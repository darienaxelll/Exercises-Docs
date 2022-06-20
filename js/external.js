alert('welcome to my Website!');

let userColor = prompt('Hey! What is your favorite color? ');

alert('Great, ' + userColor + ' is my favorite color too!')

//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
// Finally, commit the changes to your git repository, and push to GitHub.

const moviePrice = 3;
let numA = prompt("How many night would you like to rent The little mermaid?");
let numB = prompt("How many night would you like to rent Brother Bear?");
let numC = prompt("How many night would you like to rent Hercules?");

var total = (numA * moviePrice) + (numB * moviePrice) + (numC * moviePrice);
alert('Your total for this transaction is: $' + total);


let google = 400;
let amazon = 380;
let facebook = 350;

var job1 = prompt("How many hours did you work for Google this week?");

var job2 = prompt("How many hours did you work for Amazon this week?");

var job3 = prompt("How many hours did you work for Facebook this week?");

var totalIncome = (job1 * google) + (job2 * amazon) + (job3 * facebook);
alert('Your total income this week based in your inputs is: $' + totalIncome);

let classFull = confirm('Is there spots in the class still?');
let classConflict = confirm('If you were to enroll in this class, no conflict with other classes will occur?');

if (classFull && classConflict) {
    alert('Congrats! You are registered! (:');
} else {
    alert('Hmm... seems to be an issue, please go talk to admissions.')
}

let moreThanTwo = confirm('Do you have more than two items on your cart?')
let offerStillValid = confirm('Is the offer in the product still valid?')
let premiumMember = confirm('Are you a premium member?')

alert('' + (moreThanTwo && offerStillValid || premiumMember) + '');