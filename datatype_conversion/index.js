/* datatype conversion => in datatype conversion we can convert one datatype to another. (strings, numbers, booleans)
> we do so because the input we take from user is in form of string and if we want to arithmetic calculation we need to convert it in numbers.
*/

let num = 16
//console.log(typeof num);
// console.log(typeof(num)); => this is another type using which we can find out the type of datatype.

let inString = String(num)
//console.log(inString);
//console.log(typeof inString);

let string = "shubham"
let numBe = Number(string)
// console.log(numBe);
// console.log(typeof numBe);

/* 1. if 16 => "16" , agr num ko string me convert krenge to value show krega output me
2. if "shubham" => NaN {not a number} , agr string ko number me convert krenege to uska datatype toh change hojayega but value woh NaN hi show krega.
*/

let boolean = true
// console.log(boolean);
let numBoolean = Number(boolean)
// console.log(numBoolean);
// console.log(typeof numBoolean);

// if boolean is changed to number then true => 1 , false => 0

let number = 1
let booleanNum = Boolean(number)
// console.log(booleanNum);
// console.log(typeof booleanNum);

// 1 => true , 0 => false

let constant = null
// console.log(constant);
// console.log(typeof constant);
let stringBe = Boolean(constant)
// console.log(stringBe);

// null => false if null is changed into boolean

let empty = ""
// console.log(empty);
// console.log(typeof empty);

let convert = Number(empty)
console.log(convert);
console.log(typeof convert);

// "" => 0 if empty string is converted to number.
// "" => flase if empty string is converted to boolean.











 





