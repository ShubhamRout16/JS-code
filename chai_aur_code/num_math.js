// Math
console.log(Math.floor(Math.random()*10) + 1);
// +1 krne se 0 aane ke chances hata deta ha
// math.floor hamesa lower value dega 
// example - number 1 -> 10 ke beech me chhaiye hoga toh kya krna ha?
// agr floor ni kiya toh random value 11 vi aaskti ha 

const min = 10;
const max = 20;

// imp formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
