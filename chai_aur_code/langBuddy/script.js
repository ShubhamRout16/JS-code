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
  container.innerHTML = ''
  if(recievedBtn === 'viewLearned'){
    const filteredArrayLearned = vocabulary.filter(item => item.status === 'learned')
    for(let i = 0; i < filteredArrayLearned.length ; i++){
      container.innerHTML += `
      <p><strong>${filteredArrayLearned[i].word}</strong></p>
      <p><strong>${filteredArrayLearned[i].meaning}</strong></p>
      `
    }
    console.log(filteredArrayLearned);
  }
  if(recievedBtn === 'viewDifficult'){
    const filteredArrayDifficult = vocabulary.filter(item => item.status === 'difficult')
    for(let i = 0; i < filteredArrayDifficult.length ; i++){
      container.innerHTML += `
      <p><strong>${filteredArrayDifficult[i].word}</strong></p>
      <p><strong>${filteredArrayDifficult[i].meaning}</strong></p>
      `
    }
    console.log(filteredArrayDifficult);
  }
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
  // first lets try to generate for 1 question manually
  const vocabulary = [
    { word: "hello", meaning: "greeting" },
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

// function to show finalScreen 
function finalScreen(){
  const quizSection = document.getElementById('quizSection');
  quizSection.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your score: ${score} / ${questionsArray.length}</p>
  `;
}

document.getElementById('startQuiz').addEventListener('click', () => {
  generateQuizQuestions();
  renderQuestion();
});

// features completed till now
// Questions Generations
// Questions rendering & interaction
// scoring & final screen
