const cart = ["shoes","kurtas","pajamas"]

const promise = createOrder(cart) // will return a promise object with orderID on completion
// consuming a promise
promise.then(function(orderId){
  proceedToPayment(orderId)
})