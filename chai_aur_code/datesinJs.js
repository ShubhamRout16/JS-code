// DATES

const todayDate = new Date();
console.log(todayDate);
console.log(todayDate.toString());
// toISOString() and toJSON() give the same output because toJSON() internally calls toISOString() for Date objects.
console.log(todayDate.toISOString());
console.log(todayDate.toJSON());
console.log(todayDate.toLocaleString());


