// // Azure api
// const subscriptionKey = "xqFRqoZBzrL8tbGgUUwtIWduWfvO3wEEEnxhUq0EIOSkgBqu3RaoJQQJ99BFACGhslBXJ3w3AAAYACOGy7ov";
// const serviceRegion = "centralindia";

// if(!window.SpeechSDK){
//   console.error("Azure Speech SDK did not load properly.");
// }

//




// we have created a array of objects with word and meaning
let vocabulary = [
  {word: "hello" , meaning: "greeting" , status: "new"},
  {word: "intend" , meaning: "have in mind as a purpose" , status: "new"},
  {word: "concern" , meaning: "something that interests you because it is important" , status: "new"},
  {word: "vain" , meaning: "unproductive of success" , status: "new"},
  {word: "entertain" , meaning: "provide amusement for" , status: "new"},
  {word: "knight" , meaning: "a person of noble birth trained to arms and chivalry" , status: "new"},
  {word: "inspire" , meaning: "serve as the inciting cause of" , status: "new"},
  {word: "skill" , meaning: "an ability that has been acquired by training" , status: "new"},
  {word: "novel" , meaning: "an extended fictional work in prose" , status: "new"},
  {word: "compel" , meaning: "force somebody to do something" , status: "new"},
]
// we want to show the first word from the array and show it on the dom
// first to that -> capture the element where we want to show the word 
const container = document.getElementById('container')

// lets create global index var so that in future want to increment the index
let currentIndex = 0;
// create a function which show the word 
function showWord(index){
  const word = vocabulary[index].word
  const meaning = vocabulary[index].meaning
  container.innerHTML = `
  <p><strong>${word}</strong></p>
  <p><strong>${meaning}</strong></p>
  `
}
  
// step 2 -> when user clicks either learned or difficult button change that words status
// first capture the buttons
const learnedButton = document.getElementById('learnedButton')
const difficultButton = document.getElementById('difficultButton')

function changeStatus(text){
  // check if curreIndex exceeds the array
  if(currentIndex >= vocabulary.length){
    container.innerHTML = `
    <p><strong>No more Words</strong></p>
    `
  }else{
    console.log(vocabulary.length);
    
    console.log("came");
    vocabulary[currentIndex].status = text;
    // calling vocab saving function after changing the text content so it stores it to the localStorage
    saveVocabulary();
    console.log(vocabulary[currentIndex].status);
    currentIndex++
    showWord(currentIndex);
  }
  const learned = vocabulary.filter(item => item.status === 'learned')
  const learnedLen = learned.length
  const difficult = vocabulary.filter(item => item.status === 'difficult')
  const difficultLen = difficult.length
  const remaining = vocabulary.filter(item => item.status === 'new')
  const remainingLen = remaining.length
  progressCount(learnedLen,difficultLen,remainingLen)
}

// to add a next button which skips the words without marking it learned or difficult
function moveToNext(){
  currentIndex++
  showWord(currentIndex);

  const learned = vocabulary.filter(item => item.status === 'learned')
  const learnedLen = learned.length
  const difficult = vocabulary.filter(item => item.status === 'difficult')
  const difficultLen = difficult.length
  const remaining = vocabulary.filter(item => item.status === 'new')
  const remainingLen = remaining.length
  progressCount(learnedLen,difficultLen,remainingLen)
}

// to add a progress counter which shows learned : number , difficult : number , remaining : number
function progressCount(l,d,r){
  const showProgress = document.getElementById('progressCounter')
  showProgress.innerHTML = `
  <p><strong>Learned : ${l} | Difficult : ${d} | Remaining : ${r}</strong></p>
  `
}

// using localStorage so that the data persists
function saveVocabulary(){
  //why like this? -> we are directly storing the data on which changes is made , because when page reloads 
  // vocabulary resets its status to its initial value so the changes made wont be seen
  localStorage.setItem('savedVocab', JSON.stringify(vocabulary))
}

// next feature we will add a filter so that users can see learned words and difficult words 
function showFilteredWords(recievedBtn){
  container.innerHTML = '';
  let filteredWords = [];

  if(recievedBtn === 'viewLearned'){
    filteredWords = vocabulary.filter(item => item.status === 'learned');
  } 
  else if(recievedBtn === 'viewDifficult'){
    filteredWords = vocabulary.filter(item => item.status === 'difficult');
  }

  if(filteredWords.length === 0){
    container.innerHTML = `<p>No words found.</p>`;
    return;
  }

  filteredWords.forEach(wordObj => {
    container.innerHTML += `
      <div class="word-card">
        <p><strong>${wordObj.word}</strong></p>
        <p>${wordObj.meaning}</p>
      </div>
    `;
  });
}


// feature all changes made to words status to its initial value new
function resetChanges(){
  // removing the savedVocab key from the localStorage
  localStorage.removeItem('savedVocab')
  // resetting all the values of status from vocabulary array to new
  vocabulary.forEach(word => word.status = 'new')
  console.log(vocabulary);
  // resetting index 
  currentIndex = 0 ;
  // re rendering the first word
  showWord(currentIndex);
  // resetting the progress count also
  const learned = vocabulary.filter(item => item.status === 'learned')
  const learnedLen = learned.length
  const difficult = vocabulary.filter(item => item.status === 'difficult')
  const difficultLen = difficult.length
  const remaining = vocabulary.filter(item => item.status === 'new')
  const remainingLen = remaining.length
  progressCount(learnedLen,difficultLen,remainingLen);
  // calling toast with message 
  showToast('Reset Successfull !')
}

// lets add a toast feature which shows successfull message after resetting the changes made
// what this toast function will do -> will recieve a message while calling the function and make changes according to it
function showToast(message){
  const toast = document.getElementById('toastDiv')
  toast.innerHTML = message
  toast.style.display = 'block'

  // removing the toast notification after 2 sec delay
  setTimeout(() => {
    toast.style.display = 'none'
  },2000)
}

// show the first word initially when page loads
window.onload = () => {
  // loading vocabulary with changes made
  const savedVocab = JSON.parse(localStorage.getItem('savedVocab')) || []
  if(savedVocab.length > 0){
    vocabulary = savedVocab;
  }
  // console.log(vocabulary); //checked its loading previously saved data
  
  showWord(currentIndex);
  const learned = vocabulary.filter(item => item.status === 'learned')
  const learnedLen = learned.length
  const difficult = vocabulary.filter(item => item.status === 'difficult')
  const difficultLen = difficult.length
  const remaining = vocabulary.filter(item => item.status === 'new')
  const remainingLen = remaining.length
  progressCount(learnedLen,difficultLen,remainingLen)
}

// ++++++++++++++++ {PHASE-2} ++++++++++++++++++++++++
// generate a quiz
// -> selecting one word from object
// display 4 meanings -> 1 correct & 3 random incorrect meanings

// function of reshuffling the remaining array
function shuffledArray(array){
  const arr = [...array] // to avoid mutation in original array we used spread operator which creates shallow copy
  for(let i = arr.length - 1 ; i > 0 ; i--){
    const j = Math.floor(Math.random() * (i+1));
    [arr[i] , arr[j]] = [arr[j] , arr[i]]
  }
  return arr;
}

let questionsArray = []

// this function generates all seven questions 
function generateQuizQuestions(){
  questionsArray = []
  // first lets try to generate for 1 question manually
  const vocabulary = [
    { word: "hello", meaning: "greeting"},
    { word: "intend", meaning: "have in mind as a purpose" },
    { word: "concern", meaning: "something that interests you because it is important" },
    { word: "vain", meaning: "unproductive of success" },
    { word: "entertain", meaning: "provide amusement for" },
    { word: "knight", meaning: "a person of noble birth trained to arms and chivalry" },
    { word: "inspire", meaning: "serve as the inciting cause of" },
    { word: "skill", meaning: "an ability that has been acquired by training" },
    { word: "novel", meaning: "an extended fictional work in prose" },
    { word: "compel", meaning: "force somebody to do something" }
  ];
  // reshuffling the vocabulary array so that everytime words are taken not in the same order
  const shuffledVocab = shuffledArray(vocabulary);

  // taking first 7 objects from the array -> each of the words will act as main word for each 7 qs
  const allWords = shuffledVocab.slice(0,7)
  // console.log(allWords);
  

  // for each word extract correct meaning and 3 distraction meaning 
  for(let i = 0 ; i < 7; i++){
    const correctWord = allWords[i].word
    // extracted each correct meaning
    const correctMeaning = allWords[i].meaning
    // creating 3 distractions meaning which will act as wrong option
    const distractions = shuffledArray(
       // this will ensure we get array of words without the word we selected for qs
       vocabulary.filter(item => item.word != correctWord)
    )
    // we want only 3 objects from shuffled array as distractors 
    .slice(0,3)
    // we want only meaning from the object
    .map(item => item.meaning)

    // merging distractors elements and correct meaning which will act as options
    const options = [...distractions,correctMeaning] // [distractions[0] , distractions[1] , distractions[2] , correctMeaning]

    // reshuffling the options
    const reShuffledOptions = shuffledArray(options) 
    
    // final question object
    let question = {
    word : correctWord,
    options : reShuffledOptions,
    correct : correctMeaning
    };

    questionsArray.push(question)
  }
  
  console.log(questionsArray);
  
  // // selected 1 word from the array and its correct meaning
  // const correctWord = vocabulary[3].word
  // const correctMeaning = vocabulary[3].meaning

  // // generate random meaning which will act as distraction
  // const distractions = shuffledArray(
  //   // this will ensure we get array of words without the word we selected for qs
  //   vocabulary.filter(item => item.word !== correctWord)
  // )
  // // we want only 3 objects from shuffled array as distractors 
  // .slice(0,3)
  // // we want only meaning from the object
  // .map(item => item.meaning)

  // // merging distractors elements and correct meaning which will act as options
  // const options = [...distractions,correctMeaning] // [distractions[0] , distractions[1] , distractions[2] , correctMeaning]

  // // reshuffling the options
  // const reShuffledOptions = shuffledArray(options)

  // // final question object
  // const question = {
  //   word : correctWord,
  //   options : reShuffledOptions,
  //   correct : correctMeaning
  // };

  // console.log(question);
  
}

// now lets create a function to render all these questions on our DOM
let currentQuestionIndex = 0;
let score = 0;
function renderQuestion(){
  const quizSection = document.getElementById('quizSection');
  const question = questionsArray[currentQuestionIndex]
  
  // show question on the dom
  quizSection.innerHTML = `
  <p><strong>${question.word}</strong></p>
  <button id="speechBtn" onclick="speakWord('${question.word}')">🔊 Play Word</button>
  `
  // mic button
  quizSection.innerHTML += `
    <button id="micBtn" onclick="listenSpeech('${question.correct}')">🎙️ Speak Answer</button>
    `

  // loop through 4 options and create buttons and radio inputs
  question.options.forEach(option => {
    quizSection.innerHTML += `
    <form>
    <input type="radio" name="option1" onclick="answerSelection('${option}')"> ${option}
    </form>
    `
  })
}

// function to handle answerSelection
function answerSelection(answer){
  const question = questionsArray[currentQuestionIndex]
  const quizSection = document.getElementById('quizSection');
  // for review answers feature -> we have to track the user answer selection
  const userAnswer = answer ;
  // lets store in question object to later use it
  question.selected = userAnswer;

  // if the answer selected is correct show correct else show wrong
  if(answer === question.correct){
    // to show the number of qs did right by the user
    score++
    quizSection.innerHTML += `<p>Correct ✅</p>`
  }else{
    quizSection.innerHTML += `<p>Wrong ❌. Correct answer: ${question.correct}</p>`;
  }

  // to move to next question
  currentQuestionIndex++

  // wait a bit to then move to next question
  setTimeout(() => {
    if(currentQuestionIndex >= questionsArray.length){
      // if current index is greater than 7 then show the final screen
      finalScreen();
    }else{
      // to show next question
      renderQuestion()
    }
  },1000)
}

//START OF TTS AND SPEECH RECOGNITION

let spokenFinalScore = false; // final score not spoken yet
// problem -> TTS hasnt been completed but next question function is fired
function speakFeedbackAndMoveOn(feedbackText){
  const utterance = new SpeechSynthesisUtterance(feedbackText)


  // when speaking is finished move on to the next questions or show final screen
  utterance.onend = () => {
    currentQuestionIndex++ 

    if(currentQuestionIndex >= questionsArray.length){
      finalScreen();
    }else{
      renderQuestion()
    }
  }

  // start speaking the feedback
  window.speechSynthesis.speak(utterance)
}

// function to show finalScreen 
function finalScreen(){
  const quizSection = document.getElementById('quizSection');

  quizSection.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your score: ${score} / ${questionsArray.length}</p>
    <button id="retakeQuiz" onclick="retakeQuiz()">Retake Quiz</button>
    <button id="reviewAnswers" onclick="reviewAnswers()">Review Answers</button>
  `;
  
  if(!spokenFinalScore){
    spokenFinalScore = true;
    // speak score
  speakFeedbackAndMoveOn(`Your score: ${score} / ${questionsArray.length}`)
  }
}

document.getElementById('startQuiz').addEventListener('click', () => {
  generateQuizQuestions();
  renderQuestion();
});

// quiz Retake
// quiz retake button in final screen
function retakeQuiz(){
  // reset questionsArray and currentQuestionIndex and score
  questionsArray = []
  currentQuestionIndex = 0
  score = 0
  // clearing the ui
  const quizSection = document.getElementById('quizSection')
  quizSection.innerHTML = ''
  generateQuizQuestions();
  renderQuestion();
}

// quiz review feature -> which shows user the summary of the quiz users answer vs correct answer
// track user answer selection 
// store each answer selected by user in each question object according to its question
// after clicking review answers button render all questions page and highlighting the answer correct and wrong
function reviewAnswers(){
  const quizSection = document.getElementById('quizSection')
  quizSection.innerHTML = `<h2>Review Answers</h2>`
  questionsArray.forEach(questionObj => {
    quizSection.innerHTML += `
    <p><strong>${questionObj.word}</strong></p>
    `
    questionObj.options.forEach(options => {
      // if answer is correct
      let symbol = ''
      let color = ''
      if(options === questionObj.correct){
        symbol = '✅';
        color = 'green';
      }
      // if answer selected is wrong
      else if(options === questionObj.selected && options !== questionObj.correct){
        symbol = '❌'; 
        color = 'red';
      }
      quizSection.innerHTML += `
        <p style="color: ${color}; margin-left: 20px;">${symbol} ${options}</p>
      `;

      quizSection.innerHTML += '<hr>';
    })
  })
}

// ++++++++++{PHASE 3}++++++++++++
// working with webspeechApi


// text to speech feature 
// what does it do? -> when clicked -> capture the word which invoked TTS
// fetch webSpeech API 
function speakWord(speechWord){
  // SpeechSynthesisUtterance is not a object its constructor function
  const utterance = new SpeechSynthesisUtterance(speechWord)
  window.speechSynthesis.speak(utterance) 
}


// speech Recognition 
// 1 -> create a speechRecognition according to browser compatibility
function listenSpeech(correctAnswer){
  const quizSection = document.getElementById('quizSection')
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition) ();

  // language settings
  recognition.lang = 'en-US'
  // this property ensures if you want half spoken word by user or full sentence when the users pauses or stops , setting it false means we want complete sentence
  recognition.interimResults = false
  // this property means how many guesses of what was spoken we want in return setting it to 1 means we want the best guess
  recognition.maxAlternative = 1

  // start listening
  recognition.start()

  // when user starts speaking capture it using
  recognition.onresult = (e) => {
    const spokenText = e.results[0][0].transcript

    // compare if what spoken by user is correct or not
    if(spokenText.toLowerCase().trim() === correctAnswer.toLowerCase().trim()){
      score++
      // quizSection.innerHTML += `<p>Correct ✅</p>`
      // asnwer is right send a string to TTS function
      // speakWord('Correct! Well Done.')
      speakFeedbackAndMoveOn('Correct! Well Done.')
    }else{
      // idea -> check speech answer if correct speaks correct and if wrong speaks wrong says the correct answer
      // quizSection.innerHTML += `<p>Wrong ❌. Correct answer: ${question.correct}</p>`;
      // speakWord(`Wrong Answer.The Correct Answer is ${correctAnswer}`)
      speakFeedbackAndMoveOn(`Wrong Answer.The Correct Answer is ${correctAnswer}`)
    }

    // // to move to next question
    // currentQuestionIndex++  

    // // to move on the next question
    // setTimeout(() => {
    //   if(currentQuestionIndex >= questionsArray.length){
    //     // if current index is greater than 7 then show the final screen
    //     finalScreen();
    //   }else{
    //     // to show next question
    //     renderQuestion()
    //   }
    // },1000)
  }

  


  // error handling 
  recognition.onerror = (e) =>{
    if(e.error === 'no-speech'){
      quizSection.innerHTML += `<p>No speech detected, please try again.</p>`;
      // Optionally, show a button to retry:
      const retryBtn = document.createElement('button');
      retryBtn.textContent = 'Try Again';
      retryBtn.onclick = () => {
        quizSection.innerHTML = ''; // Clear messages
        listenSpeech(correctAnswer, quizSection);
      };
      quizSection.appendChild(retryBtn);
    } else {
      console.error('Speech recognition error:', e.error);
    }
  }
  // end of speech
  recognition.onend = () => {
    const quizSection = document.getElementById('quizSection')
    const listenAgain = document.createElement('button')
    listenAgain.textContent = 'Listen Again'
    listenAgain.onclick = () => listenSpeech(correctAnswer)
    quizSection.appendChild(listenAgain)
  }

}

// +++++++++++++++++++{PHASE 4}++++++++++++++++++
// Voice Only quiz
function VoiceQuiz(){
  // clearing everything for the voice quiz
  const textQuiz = document.getElementById('textQuiz')
  textQuiz.innerHTML = ''
  // reset all the variables
  currentQuestionIndex = 0;
  score = 0 ;
  questionsArray = []
  spokenFinalScore = false
  // generate new 7 questions
  generateQuizQuestions();
  startVoiceQuiz();
}

// function to speak the question
function speakVoiceQuiz(questionToSpeak){
  const utterance = new SpeechSynthesisUtterance(questionToSpeak.word);
  

  utterance.onend = () => {
    // there should be 1sec gap between speaking the word and listening the answer
    listenVoiceQuiz(questionToSpeak)
  }
  window.speechSynthesis.speak(utterance)
}

function finalVoiceScreen(){
  if(!spokenFinalScore){
    spokenFinalScore = true
    feedbackVoiceQuiz(`Your score: ${score} / ${questionsArray.length}`)
  }
}

function feedbackVoiceQuiz(feedback){
  const utterance = new SpeechSynthesisUtterance(feedback)

  utterance.onend = () => {
    currentQuestionIndex++
    

    if(currentQuestionIndex >= questionsArray.length){
      // view final score and end
      finalVoiceScreen();
    }else{
      // move to next qs
      speakVoiceQuiz(questionsArray[currentQuestionIndex]);
    }
  }

  window.speechSynthesis.speak(utterance)
}


function listenVoiceQuiz(question){
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition) ();
  recognition.lang = 'en-US'
  recognition.interimResults = false
  recognition.maxAlternative = 1
  // starts listening
  recognition.start()
  // check results 
  recognition.onresult = (e) => {
    recognition.stop();
    const userSpokenText = e.results[0][0].transcript
    // save user answer for later voice review feature
    const userAnswerVoice =  userSpokenText
    if(userSpokenText.toLowerCase().trim() === question.correct.toLowerCase().trim()){
      // speak feeback
      score++
      feedbackVoiceQuiz('Correct! Well Done');
    }
    else{
      // speak feedback
      feedbackVoiceQuiz(`Wrong Answer.The Correct Answer is ${question.correct}`)
    }
  }
  recognition.onerror = (e) => {
    recognition.stop();
    console.log("Recognition error:", e.error);
    feedbackVoiceQuiz("Sorry, I could not hear you properly.");
  };
}

function startVoiceQuiz(){
  // get the current question
  const currentQuestion = questionsArray[currentQuestionIndex]
  // speak the question using TTS
  speakVoiceQuiz(currentQuestion)
}

function speakConfirmation(message){
  const utterance = new SpeechSynthesisUtterance(message)
  window.speechSynthesis.speak(utterance)
}



// listen command to start voice quiz
function listeningStart() {
  // You can display a prompt on-screen like You can display a prompt on-screen like “Say start quiz to begin.””
  // window.alert('Say start quiz to begin')
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
  recognition.lang = 'en-US'
  recognition.interimResults = false
  recognition.maxAlternative = 1
  // starts listineing
  recognition.start()
  recognition.onresult = (e) => {
    const userSpokenText = e.results[0][0].transcript
    if(userSpokenText.toLowerCase().trim() === 'start quiz' || userSpokenText.toLowerCase().trim() === 'start voice quiz'){
      // start voiceQuiz 
      speakConfirmation('Okay, starting voice quiz now.')
      VoiceQuiz();
      console.log('started calling');
      
    }else{
      // if user says something else 
      speakConfirmation('Can you please Repeat what you said ?')
    }
  }
  // in case there is no speech recognized or error restart listening after small delay
  recognition.onerror =(e) => {
    speakConfirmation(`Error is : ${e.error}`)
    listeningStart();
  }

  // after voiceQuiz ends restart listening
  recognition.onend = (e) => {
    recognition.start();
  }
}

// features completed till now
// Questions Generations
// Questions rendering & interaction
// scoring & final screen
// retake Quiz button
// pending -> review answers {done}
// bug -> to solve later -> quiz takes 14 qs instead of 7 {fixed}
// TTS(TEXT TO SPEECH) feature {done}
// voice input (speech Recognition) {done}
// idea -> to add a new feature instead of returning correct answer feedback on dom , idea is to return it through TTS
// problem -> TTS hasnt been completed but next question function is fired {solved}
// idea -> speak score and also show text when showing final screen {done}

// new features {wait}
//  -> voice command listener detects commands like 'next' , 'repeat' , 'start quiz' 
//  -> Pronounciation Practice  -> app speaks a word and user repeats it app checks accuracy
//  -> feedback system -> compares spoken word with expected word and shows match %

// basic feature 
// i say learned -> clicks