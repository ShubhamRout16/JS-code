// string - allows you to manipulate and work with texts (strings)

let username = "shubham";

// first = username.charAt(0);
// console.log(username.charAt(0));

// charAt() is used to access the character of the strings by using the index.

// indexOf() returns the index for the first occurrence of the substring. lastIndexOf() returns the index for the last occurrence of the substring.

console.log(username.indexOf("h"));
console.log(username.lastIndexOf("h"));

// length is a property of JavaScript strings, arrays, and some other objects that returns the number of characters or elements in that object

console.log(username.length);

// trim() is used to remove the space before and after the given string
// trim() method does not make any changes in the original string.
// trim() mehtod makes a new string without any spaces.
// ! thats why strings in js are immutable.

let myName = "shubham  ";

myName = myName.trim();
console.log(myName);

// in JavaScript you can use . toLowerCase() or . toUpperCase() methods to convert strings to either all lowercase or all uppercase characters

// startsWith() JavaScript string method checks whether a string begins with the specified characters. It returns true if the string begins with the specified characters, otherwise, it returns false
// it is generally used with if statements and return booleans

let fullName = "shubhamrout";

let result = fullName.startsWith(" ");

if (result){
    console.log("your name is starting with ' ' ");
}
else {
    console.log(fullName);
    
}

// similarly there is endswith()

let full = "shubhamrout ";

let result1 = full.endsWith(" ");

if (result1){
    console.log("your name is ENDING with ' ' ");
}
else {
    console.log(full);
    
}

// include() it check if the string contains any space between them

let full1 = "shubham rout";

let result2 = full1.includes(" ");

if (result2){
    console.log("your name cant include a empty space ");
}
else {
    console.log(full1);
    
}

// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement

// let phoneNumber = "9525-1532-69";

// phoneNumber = phoneNumber.replaceAll("-", ",");

// console.log(phoneNumber);

// The padStart() method pads a string from the start. The padStart() method pads a string with another string (multiple times) until it reaches a given length.

let phoneNew = "9525153269";

phoneNew = phoneNew.padStart(15,"0");
console.log(phoneNew);

// padEnd() method is used with JavaScript strings to pad the end of a string with another string, until it reaches a specified length

let phoneN = "9525153269";

phoneN = phoneN.padEtart(15,"0");
console.log(phoneN);

