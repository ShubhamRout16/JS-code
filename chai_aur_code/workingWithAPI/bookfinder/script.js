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
    console.log(data);
    console.log(data.items[0].volumeInfo.title); // volume 1 title
    console.log(data.items[0].volumeInfo.publishedDate); // volume 1 publishedDate
    console.log(data.items[0].volumeInfo.publisher); // volume 1 publisher
    console.log(data.items[0].volumeInfo.pageCount); // volume 1 pageCount
    //bug -> all books doesnt have the same author field & some books have more than one author
    console.log(data.items[1].volumeInfo.authors.length);
    console.log(data.items.length);
    
    // ui updation
    const bookShower = document.getElementById('bookDetailsShower')
    bookShower.innerHTML = `
      <img src = "${data.items[0].volumeInfo.imageLinks.smallThumbnail}" alt = "books image" />
      <h3>Book title : ${data.items[0].volumeInfo.title}</h3>
      <p><strong>Author : ${data.items[0].volumeInfo.authors[0]}</strong></p>
      <p><strong>Page Count : ${data.items[0].volumeInfo.pageCount}</strong></p>
      <p><strong>Published Date : ${data.items[0].volumeInfo.publishedDate}</strong></p>
      <p><strong>Publisher : ${data.items[0].volumeInfo.publisher}</strong></p>
    `
  }
  // catch block for errors
  catch(error){
    const bookShower = document.getElementById('bookDetailsShower')
    bookShower.innerHTML = `
    <p style="backgroundColor: red textColor: white">Error is : ${error.message}</p>
    `
  }

}