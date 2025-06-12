const sups = ["gojo","naruto","luffy","jason"]

// what will happen if we store the value returned by foreach loop in variable
const returnee = sups.forEach((item) => {
  console.log(item);
  // foreach doesnt returns any value
  return item;
})

// console.log(returnee);

// filter -> as per the given condition if true returns the value which satisfies the condition

// const nums = [1,2,3,4,5,6,7,8,9,10]

const newNums = nums.filter( (num) => {
  // give condition
  return num > 2 //explicit return
})
// console.log(newNums);

// const newnumber = nums.filter((num) => num > 8) //implicit return 
// console.log(newnumber);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bok) => {
  // return (bok.genre === 'History')
  // return (bok.publish >= 2000)
  // return (bok.publish >= 1995 && bok.genre === 'History')
})
// console.log(userBooks);


// maps & chaining
// const numsnew = [1,2,3,4,5,6,7,8,9,10]

// add krdiya sbme 10
// const newnums = numsnew.map((num) => {
//   return num + 10
// })
// console.log(newnums);

// chaining krenge mtlb map ke andar map ke andar filter kuch bhi ho skta ha
// const newnums = numsnew
                      .map((num) => {
                        return num * 10
                      })
                      .map((num) => { //1 nhi jayega naya num jayega jo ki ha 10 (1*10)
                        return num + 1
                      })
                      .filter((num) => {
                        return (num >=40)
                      })
// console.log(newnums);


// reduce method
const numbers = [1,2,3,4,5,6,7]

// const renumber = numbers.reduce(function (acc,currval) {
//   console.log(`accumulated value : ${acc} & current value : ${currval}`);
//   return acc+currval;
// })
// console.log(renumber);

const renumber = numbers.reduce((acc,curr) => acc+curr,0 )
console.log(renumber);


const shoppingCart = [
  {
    course : "js course",
    price: 2999,
  },
  {
    course : "dsa course",
    price: 5999,
  },
  {
    course : "py course",
    price: 999,
  },
  {
    course : "data science course",
    price: 12999,
  },
]
// add all prices
const total = shoppingCart.reduce((acc,curr) => acc + curr.price ,0)
console.log(total);
