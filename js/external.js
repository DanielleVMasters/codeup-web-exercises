"use strict";
console.log('Hello from external JavaScript');
alert("Welcome to my Website!");
let userInput = prompt("What's your favorite color?");
alert(userInput + "!? That's my favorite too!");

//You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules
// (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3,
// how much will you have to pay?

let thelittlemermaid = prompt("How many days would you like to rent the little mermaid?");
alert("that will be " + thelittlemermaid * 3 + " dollars" );

let brotherbear = prompt("How many days would you like to rent brother bear?");
alert("that will be " + brotherbear * 3 + " dollars" );

let hercules = prompt("How many days would you like to rent the hercules?");
alert("that will be " + hercules * 3 + " dollars" );
let movietotal = (parseInt(thelittlemermaid) + parseInt(brotherbear) + parseInt(hercules)) * 3;
alert("total will be " + movietotal);

//Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

alert("Let's calculate your pay from Google, Amazon and Facebook for the week");

let googlepay = prompt("How much is your hourly pay from Google?");
let googlehours = prompt("and how many hours?");
let googletotal = googlepay * googlehours
alert("your pay this week for google is " + googletotal);

let amazonpay = prompt("How much is your hourly pay from Amazon?");
let amazonhours = prompt("and how many hours?");
let amazontotal = amazonpay * amazonhours
alert("your pay this week for Amazon is " + amazontotal);

let facebookpay = prompt("How much is your hourly pay from Facebook?");
let facebookhours = prompt("and how many hours?");
let facebooktotal = facebookpay * facebookhours
alert("your pay this week for google is " + facebooktotal);

let totalpay = parseInt(facebooktotal) + parseInt(amazontotal) + parseInt(googletotal)

alert("Your total pay this week is " + totalpay);

//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.
let schedule = confirm("are you available to enroll in class?")
console.log(schedule);
let classroom = confirm("Is there room in the class you'd like to take?")
console.log(classroom)
if (schedule) {
    if (classroom) {
        alert("you are enrolled")
    } else {
        alert("enroll another time")
    }
} else {
    alert("enroll another time")
}

//A product offer can be applied only if a person
//buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
alert("We have a limited time offer for you!")
let amountitems = confirm("Have you bought 2 or more items?")
console.log(amountitems)
let premium = confirm("or are you a premium member?")
console.log(premium)
if (amountitems||premium) {
    {
        alert("Offer Applied")
    }
} else {
    alert("sorry offer can't be applied")
}
