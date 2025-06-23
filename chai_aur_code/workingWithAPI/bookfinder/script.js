// since data is not accessible to saveBook function we will make a global variable to save data which can be accessed by both functions
let bookData = []
let removeBook // for capturing the removing book id
async function getBook(){
  // store the user sent input
  const bookName = document.getElementById('bookNameInput').value.trim()
  // console.log(bookName);
  
  if(!bookName){
    alert('Please enter a bookname')
    return
  }
  // url of the api integrated with users bookname
  // bug -> gap in book name causes error -> encodeURIComponent
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookName)}`
  // console.log(url);
  

  //try block
  try{
    // response recieved from fetching the api
    const response = await fetch(url) // asynchronous task which will take time
    // handling the response
    if(!response.ok){
      throw new Error('response not found')
    }
    // the actual data recieved by api
    const data = await response.json()
    bookData = data.items ; // storing data.items so it can accessed by saveBook function and changes made in global level
    console.log(data);
    console.log(data.items[0].volumeInfo.title); // volume 1 title
    console.log(data.items[0].volumeInfo.publishedDate); // volume 1 publishedDate
    console.log(data.items[0].volumeInfo.publisher); // volume 1 publisher
    console.log(data.items[0].volumeInfo.pageCount); // volume 1 pageCount
    //bug -> all books doesnt have the same author field & some books have more than one author
    console.log(data.items[1].volumeInfo.authors.length);
    console.log(data.items.length);
    
    // ui updation
    // const bookShower = document.getElementById('bookDetailsShower')
    // bookShower.innerHTML = `
    //   <img src = "${data.items[0].volumeInfo.imageLinks.smallThumbnail}" alt = "books image" />
    //   <h3>Book title : ${data.items[0].volumeInfo.title}</h3>
    //   <p><strong>Author : ${data.items[0].volumeInfo.authors[0]}</strong></p>
    //   <p><strong>Page Count : ${data.items[0].volumeInfo.pageCount}</strong></p>
    //   <p><strong>Published Date : ${data.items[0].volumeInfo.publishedDate}</strong></p>
    //   <p><strong>Publisher : ${data.items[0].volumeInfo.publisher}</strong></p>
    // `

    let bookShower = document.getElementById('bookDetailsShower')
    // showing multiple books at a single time
    for(let i=0; i<data.items.length; i++){
      // all volume titles
      // console.log(data.items[i].volumeInfo.title); 
      // all volume publishedDate
      // console.log(data.items[i].volumeInfo.publishedDate);
      // all volume publisher 
      // console.log(data.items[i].volumeInfo.publisher); 
      // all volume page counts
      // console.log(data.items[i].volumeInfo.pageCount); 
      // all volume thumbnail
      // lets show it on the dom
      // bug -> only one image shows up on dom because .innerHTML replaces current element so we have to append using + operator
      // console.log(data.items[i].volumeInfo.imageLinks.smallThumbnail);
      bookShower.innerHTML += `
      <button id="saveBook" onclick="saveBook(${i})">Save</button> 
      <br>
      <img src = "${data.items[i].volumeInfo.imageLinks.smallThumbnail}" alt = "books image" />
      <h3>Book title : ${data.items[i].volumeInfo.title}</h3>
      <p><strong>Page Count : ${data.items[i].volumeInfo.pageCount}</strong></p>
      <p><strong>Published Date : ${data.items[i].volumeInfo.publishedDate}</strong></p>
      <p><strong>Publisher : ${data.items[i].volumeInfo.publisher}</strong></p>
      `
      

      // bug -> some books doesnt have authors so error is thrown
      if(data.items[i].volumeInfo.authors){
        for(let j=0; j<data.items[i].volumeInfo.authors.length; j++){
          // console.log(data.items[i].volumeInfo.authors[j]);
          // if(data.items[i].volumeInfo.authors.length > 1){
          //   console.log(data.items[i].volumeInfo.authors[j])
          //   bookShower.innerHTML += `
          //   <p><strong>${console.log(data.items[i].volumeInfo.authors[j])}</strong></p>
          //   `
          // }else{
          //   console.log(data.items[i].volumeInfo.authors[j])
          // }
          bookShower.innerHTML += `
            <p><strong>Authors : ${(data.items[i].volumeInfo.authors[j])}</strong></p>
            `
        }
      }
    }
  }
  // catch block for errors
  catch(error){
    const bookShower = document.getElementById('bookDetailsShower')
    bookShower.innerHTML = `
    <p style="backgroundColor: red textColor: white">Error is : ${error.message}</p>
    `
  }
}

// creating Save button to save to the LocalStorage

// step 1 -> getting the bookdata and saving it in the localStorage
function saveBook(index){
  console.log(index);
  let toSaveBook = bookData[index] // getting the book which user wants to store
  // we got book data -> get the exisiting saved Books from localStorage
  let saved = JSON.parse(localStorage.getItem('savedBooks')) || [] // fetches saved book if there is or empty array & JSON.parse() converts string to array
  // now check for if there is any book matching to the one we are going to save -> to prevent duplicate saving
  let alreadyExists = saved.some((existingBook) => { // .some method checks if any one of the element meets the condition and returns true & false based on that
    existingBook.id === toSaveBook.id
  })
  // if there is no duplicate book push new book into the saved array
  if(!alreadyExists){
    saved.push(toSaveBook)
  }
  // save the updated array back to localStorage
  localStorage.setItem('savedBooks',JSON.stringify(saved)) // we must convert the array back into strings because localStorage only stores strings
}

// step 2 -> get the saved book data from the localStorage and display it in the DOM
function showSavedBooks(){
  let saved = JSON.parse(localStorage.getItem('savedBooks')) || []
  // now loop through the saved books and display it in the dom
  // bug -> for removeOnly() (more books appearing when you click remove) this happens because we are not cleaning the previous dom before rendering updated saved books list
  const savedBooks = document.getElementById('savedBooks')
  savedBooks.innerHTML = ''
  saved.forEach(book => {
    console.log(book);
    
    // removeBook = book
    // console.log(book.volumeInfo.title);
    savedBooks.innerHTML += `
    <img src = "${book.volumeInfo.imageLinks.smallThumbnail}" alt = "books image" />
    <h3>Book title : ${book.volumeInfo.title}</h3>
    <p><strong>Authors : ${book.volumeInfo.authors?.join(', ') || 'unknown author'}</strong></p>
    <button id="removeOnly" onclick="removeOnly('${book.id}')" style="margin-bottom: 10px;">Remove</button>
    <br>
    `
  });
}


// removing all the savedbook from localstorage
// why prefer to use .removeItem instead of .clear ?
// .clear() removes everything from localStorage including scripts etx
function clearAll(){
  localStorage.removeItem('savedBooks')
  // problem -> after removing savedBooks from the localStorage UI is not updated
  const savedBooks = document.getElementById('savedBooks')
  savedBooks.innerHTML = ''
}

// feature to only remove the selected items
function removeOnly(removeBook){
  let saved = JSON.parse(localStorage.getItem('savedBooks')) || []
  let updated = saved.filter((filteredBook) => {
    return filteredBook.id !== removeBook
  })
  localStorage.setItem('savedBooks',JSON.stringify(updated))
  showSavedBooks();
}

// showing the saved books when page reloads
window.onload = function() {
  showSavedBooks();
}
