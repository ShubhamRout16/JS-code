// checked property - it checks the checked state of a html element or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const phonePayBtn = document.getElementById("phonePayBtn");
const gpayBtn = document.getElementById("gpayBtn");
const paytmBtn = document.getElementById("paytmBtn");
const myBtn = document.getElementById("myBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

myBtn.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed !`;
    }
    else {
        subResult.textContent = `you are NOT subscribed !`;
    }

    if(phonePayBtn.checked){
        paymentResult.textContent = `you are paying using phonepay`;
    }
    else if(gpayBtn.checked){
        paymentResult.textContent = `you are paying using gpay`; 
    }
    else if(paytmBtn.checked){
        paymentResult.textContent = `you are paying using paytm`;
    }
    else {
        paymentResult.textContent = `you must select a payment type`;
    }
}