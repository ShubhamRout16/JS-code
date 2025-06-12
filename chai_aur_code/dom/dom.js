// DOM
// how to manipulate text on webpage
// document.getElementById("idofelelement").innerHTML = "Shubham ROUT"

// to get the name of the id of the element
// console.log(document.getElementById('header').id);

// to get the name of te class
// console.log(document.getElementById('header').className);

// getAttribute
// document.getElementById('header').getAttribute('id'); 
// takes key as input and returns value as the output
// document.getElementById('header').getAttribute('class');

// setAttribute
// document.getElementById('header').setAttribute('class','new_class heading')
// setAttribute me jis chiz ko add krna ha uska key sath me add honi vali value ko add krna ha , imp value gets overwrite so also put the old value 

// how to get the content of the element?
// document.getElementById('header').innerHTML
// document.getElementById('header').innerText
// document.getElementById('header').textContent
// on surface level all three of them give the same output but originally all three of them are different from each other

// suppose we make changes -> <h1 id="header" class="heading">Dom manipulation - by chai aur code <span style="display: none;">test text</span></h1>
// then difference between output shown by innerText and textContent will be 
// innerText -> only shows the content visible on the screen
// textContent -> shows the content hidden by any css , shows complete text
// innerHTML -> shows all the html elements used on the content


// querySelector
// document.querySelector('h2') 
// selects only the first h2 from the whole webpage
// we can also select the element by using queryselector on class and id
// document.querySelector('#header')
// document.querySelector('.heading')


// getElementsByClassName return html collection which is not a array so we cant iterate through it
// const tempList = document.getElementsByClassName('heading')
// const convertArray = Array.from(tempList); //which converts the html collection into a array

// now we can iterate through the array
// convertArray.forEach(function (li){
//   li.style.color = 'orange';
// })

// querySelector AND getElementByClassName gives nodelist and html collection respectively -> so convert to array and then access the elements

