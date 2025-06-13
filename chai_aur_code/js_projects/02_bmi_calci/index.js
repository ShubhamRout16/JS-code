const form = document.querySelector('form');
// ye empty value store krta ha
// form k default behaviour ha jo v value leta ha usko database me submit krdeta ha
// isko rokne ke liye ek event use krte ha
form.addEventListener('submit', function(e){
  e.preventDefault(); // ye dhyan deli wali chiz h -> form ko rokne ke liye event

  const height = parseInt(document.querySelector('#height').value);
  // sochne ki baat ha ? isko generally humlog bahar lete ha toh is bar andar kyu liya?
  // agar bahar lelete toh user ka diya hua data store ni kr pata aur form se empty value leleta
  // preventDefault() -> ye property form ko default behaviour ko rokti ha -> we can store height and weight values
  // document.querySelector('#height').value -> returns a string -> isliye parseInt se integer me convert krna padega
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const analysis = document.querySelector('#analysis');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }
  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`
  // additional task
  if(bmi < 18.6){
    analysis.innerHTML = `you are under weight because your bmi is ${bmi}`;
  }
  if(bmi > 18.6 && bmi < 24.9){
    analysis.innerHTML = `you have normal weight because your bmi is ${bmi}`;
  }
  else{
    analysis.innerHTML = `you are overweight weight because your bmi is ${bmi}`;
  }
  }
});
