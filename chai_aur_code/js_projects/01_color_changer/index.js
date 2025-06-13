console.log("shubham rout");
const button_use = document.querySelectorAll('.button');
const body_use = document.querySelector('body');

// buttons ko iterate krna ha
button_use.forEach(function (button) {
  console.log(button); 
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'inverse'){
      body_use.style.backgroundColor = black;
    }
    if(e.target.id === 'grey'){
      body_use.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body_use.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body_use.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body_use.style.backgroundColor = e.target.id;
    }
    
  });
});