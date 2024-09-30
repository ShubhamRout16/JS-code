//  switch - a switch can be very efficient replacement for many else if statements

let day="pizza";

switch(day){
    case 1:
        console.log("it is monday");
        break;
    case 2:
        console.log("it is tuesday");
        break;
    case 3:
        console.log("it is wednesday");
        break;
    case 4:
        console.log("it is thrusday");
        break;
    case 5:
        console.log("it is friday");
        break;
    case 6:
        console.log("it is saturday");
        break;
    case 7:
        console.log("it is sunday");
        break;
    default:
        console.log(`${day} is not a day of the week`);
        break;
                    
}
