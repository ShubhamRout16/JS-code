const cart = ["shoes","kurtas","pajamas"]

const promise = createOrder(cart) // will return a promise object with orderID on completion
// consuming a promise
promise.then(function(orderId){
  console.log(orderId);
  return orderId
})
.then(function (orderId){
  return proceedToPayment(orderId)
})
.then(function(orderId){
  console.log(orderId)
})
.catch(function(err){
  console.log(err.message);
})

// creating a promise
function createOrder(cart){
  
  const pr = new Promise(function(resolve,reject){
    if(!validateCart(cart)){
      const err = new Error('cart is not valid')
      reject(err)
    }
    const orderId = '12345'
    if(orderId){
      resolve(orderId)
    }
  })

  return pr;
}
function proceedToPayment(orderId){
  return new Promise(function (resolve,reject){
    resolve('payment successfull')
  })
}


function validateCart(cart){
  return true
}