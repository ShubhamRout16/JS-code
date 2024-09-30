<!-- ! ADV FUNCTIONS -->
1. like other values like num,string,booleans functions can be also stored inside of variable.
-> eg:- const function1 = function greeting() {
      console.log('hello shubham');
    }
    console.log(function1);
    function1();
2. functions which are stored in variable can also be accessed by directly using variable name without giving the name to function. and this type of function is called ANONYMOUS FUNCTION.
-> eg:- const function1 = function () {
      console.log('hello shubham')
}
3. functions syntax has 2 adavantages 1. that it is easier to read & 2. hoisting - means that the function can be called even before defining the function & we dont have to worry about the order in which we write our code. hoisting generally doesnt work in functions which are stored inside of variable.

4. we can also save a function inside of an object its called METHOD.
5. functions can be also stored inside of function
6. setTimeout(); is built in function is js which allows us to run a function in future.
-> setTimeout() takes 2 parameters.
-> 1st parameter - defines a function which will run in future
-> 2nd parameter - tells after how much time the function will run in future.
-> in setTimeout() function time is in millseconds => 1000millisec = 1sec.
!! -> setTimeout function works like asynchronous code, means it wont wait for the code to run and it will automatically move to the second line. all the code we have written so far in js are synchronous code. and only setTimeout() function runs a asynchronous code.
-> but function which is defined in setTimeout func works in synchronous code.
eg:- ASYNCHRONOUS CODE & SYNCHRONOUS CODE
   setTimeout(function(){
      // inside here code runs in synchronous nature
      console.log('future')
      console.log('future2')
    }, 4000); // code will run after 4 secs

    console.log('next line'); //but here code runs in asynchonrous nature 

7. setInterval() function also runs a function in future & and takes 2 paramaters 
-> but the setInterval() functions repeat the code after a certain period of time regularly.
-> How can we stop the setInterval();
  -> setInterval() function returns a number & this number is an ID and we can use this id to stop the setInterval() function.

<!-- ! most prefeered method to loop through an array => forEach()-->
1. forEach() function is generally used to loop through an array because its easier to read.
2. forEach() functions takes a parameter and loop through an array and prints the contents of array through the parameter.
3. in forEach() loop return; or continue; should be used if we want to skip an iteration
4. it is recommended to not use break; in forEach() function , break; is better used in regular for loop.

8. arrow functions 
-> in arrow functions whenever there is only one variable then there is no need for brackets
eg:- const oneParam = param => {
      console.log(param + 1);
    }
    oneParam(2);
-> in arrow functions , functions can be writeen in one line
eg:- const oneLine = () => 2 + 3;
    console.log(oneLine());
-> when we are passing a function i another function then arrow function is best to use.

9. what is the better way to use onclick functions? 
-> by using addEventListner() 
-> addEventListener() takes 2 parameters 1st parameter takes an 'event' & 2nd parameter takes a function which will run on the occurence of the event.
-> advanatages of addEventListener()
1. let us add multiple listeners to a single event.
2. let us remove listeners from the event.
-> on using keydown event with addEventListener it stores the key pressed and in its parameter.

10. methods of array - filter() & map()