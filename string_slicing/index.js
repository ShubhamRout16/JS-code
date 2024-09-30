// String slicing - it is method in which we create a substring from the portion of another string
//                  string.slice(start, end)
// while slicing a string the ending index is exclusive so we nee to add +1 indexing.

const fullName = "shubham rout";

// let firstName = fullName.slice(0 , 7);
// console.log(firstName);

// let lastName = fullName.slice(8 , 12);
// console.log(lastName);

let firstName = fullName.slice(0 , fullName.indexOf(" "));
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ") + 1); // we have used here +1 because we want to get output of the string after the space thats why.
console.log(lastName);

// now slice s string first part before "@" into username and the last part after "@" into extension.

const email = "shubhamrout90@gmail.com";

let username = email.slice(0 , email.indexOf("@"));
console.log(username);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);


// str.slice(-num) = str.slice(length-num);
