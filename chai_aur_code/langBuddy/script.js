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



// show the first word initially when page loads
window.onload = () => {
  // loading vocabulary with changes made
  const savedVocab = JSON.parse(localStorage.getItem('savedVocab')) || []
  if(savedVocab.length > 0){
    vocabulary = savedVocab;
  }
  // console.log(vocabulary); //checked its loading previously saved data
  
  showWord(currentIndex);
}