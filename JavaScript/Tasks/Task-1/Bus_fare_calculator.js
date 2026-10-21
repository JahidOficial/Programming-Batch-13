/**
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var age = 90;
var isStudent = true;

if(age < 10){
    console.log("Free Ticket");
}else if(isStudent){
    console.log("50% Discount");
}else if(age >= 60){
    console.log("15% Discount");
}else{
    console.log("Regular Ticket Fare 800 tk");
}