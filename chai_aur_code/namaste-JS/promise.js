const cart = ["shoes","kurtas","pajamas"]

const promise = createOrder(cart) // will return a promise object with orderID on completion
// consuming a promise
promise.then(function(orderId){
  console.log(orderId);
  // proceedToPayment(orderId)
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
function validateCart(cart){
  return true
}