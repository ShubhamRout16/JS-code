<!-- ! what is the difference between JS and JSON -->
1. json syntax has everything in double quotes and it doesnt supports functions in objects
2. json is more universal than js because its syntax can be understood by almost every programming language
3. json syntax is similar to js syntax but with less features
4. json is used when to send data between two computers
5. json is used to store data
6. Json built in objects.
-> JSON.stringify() => converts js objects into string which can be used to store data in local storage.
-> JSON.parse() => converts a string from local storage back into js objects.
-> localStorage() => which is used to store data permanetnly , for eg:- in our rock paper scissors projects when we refresh the page our score resets to 0 automatically to avoid it we will use JSON built in object localstorage to store 
our data permanently.
-> localStorage only supports strings
-> localStorage has two methods:-
-> 1. localStorage.setItem('name', 'hello'); where 'name' will be later used to access that string 'hello'.
-> 2. localStorage.getItem('name'); here used to access that value

<!-- ! AUTO BOXING -->
1. console.log('hello'.length); => will give length of string hello.
2. console.log('hello'.toUpperCase()) => will uppercase the string hello.
-> what happens here is that js understands 'hello' wraps this string into a special object and applies methods to it.
3. auto boxing can be applied to strings, numbers, boolean
4. auto boxing doesnt applies to null and undefined

<!-- ! objects are REFERENCES -->
1. whenever we create a new objects and insert property and value inside of it , actually in computers memory object1 we created act as reference and whenever we try to 
-> const object2 = object1;  => it doesnt copy the property and value inside object1 it just copy the reference of object1 into object2.
-> which is much faster and called as COPY BY REFERENCE
-> const object1 = {
  message: 'hello';
}
  const object2 = object1 ; => it doesnt actually copies object1 into object2 variable but it copies its reference.
  object1.message = 'good morning' => even though object1 is constant we can change the property value of object1 because constant only prevents us from changing the reference and it doesnt prevents us from making changes inside the reference.
  console.log(object1) => output:- property message value changed from 'hello' => 'good morning'
  console.log(object2) => output:- same changes are made in object2 also, because object1 & object2 have same references and changes are made inside of the same references.
-> 3. objects can not be compared directly
  const object3 = {
    message: 'good morning'
  }
  console.log(object3 === object1); => output:- false => because object3 and object1 have 2 different references.
  console.log(object2 === object1); => output:- true => because object1 & object2 have same references.

<!-- ! SHORTCUTS in objects -->
Destructuring:-

1. const object4 = {
  message: 'good morning'
  price: 799
}
2. if we want to take out message property out of object4 we can do that by using DESTRUCTURING
3. const { message, price } = object4.message ; 
4. console.log(message) => output:- 'good morning' => destructuing takes out message value from object4 and saves it in messsage variable.
5. console.log(price) => output:- 799
SHORT HAND PROPERTY:-

1. const object5 = {
  message: message //message here is variable which we defined earlier 
  message // SHORT HAND PROPERTY - upper code runs in a single line
}
  console.log(object5); => output:- {message: 'good morning'}

SHORT HAND METHOD :-

1. const object5 = {
  message,
  method: function function1 (){
    console.log('hello shubham');
  }
  method (){ => shorthand method => which does the same thing as upper code without using the fucntion name
    console.log('hello shubham') ;
  }
}
object5.method(); => 1. 'hello shubham'