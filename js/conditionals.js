"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color == 'blue') {
        console.log('blue is the color of the sky')
    } else if (color == 'red') {
        console.log('strawberries are red')
    } else {
        console.log('I don\'t know anything about ' + color)
    }
}
/**
console.log(analyzeColor('green'));
*/
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/** console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case 'red':
            alert('Strawberries are red');
            break;
        case 'orange':
            alert('Oranges are orange');
            break;
        case 'yellow':
            alert('The sun is yellow');
            break;
        case 'green':
            alert('The grass is green');
            break;
        case 'blue':
            alert('The sky is blue');
            break;
        case 'indigo':
            alert('Indigo can be in colors of rocks');
            break;
        case 'violet':
            alert('Violets are violet');
            break;
        default:
            alert('I don\'t know nothing about ' + color);
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/**
 let userColor = prompt('What is your favorite color (red, orange, yellow, green, blue, indigo or violet) ?')

analyzeColor(userColor);
 */
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total) {
    if(luckyNumber == 1){
        return alert('Great your lucky number was  1! Your total before discount was: $' + total +  ' and after the discount it is: $' + (total  - (.10 * total)));
    } else if (luckyNumber == 2) {
        return alert('Great your lucky number was  2! Your total before discount was: $' + total +  ' and after the discount it is: $' + (total - (.25 * total)));
    } else if (luckyNumber == 3) {
        return alert('Great your lucky number was  3! Your total before discount was: $' + total +  ' and after the discount it is: $' + (total - (.35 * total)));
    } else if (luckyNumber == 4) {
        return alert('Great your lucky number was  4! Your total before discount was: $' + total +  ' and after the discount it is: $' + (total - (.5 * total)));
    } else if (luckyNumber == 5) {
        return alert('Your lucky number was 5! Your total before was: $' + total + ' ,but now it is free!!');
    }  else {
        return alert('Sorry, you don\'t get a discount today. ')
    }
}
/**
let total = prompt('What is your total?')
let luckyNum = prompt('What\'s your lucky number?');

calculateTotal(luckyNum, total);
*/
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
/**var luckyNumber = Math.floor(Math.random() * 6);

let total = prompt('What is your total?')

calculateTotal(luckyNumber, total);
 */
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let user = confirm('Would you like to pick a number today?')

function userAnswer(userChoice) {
    if (userChoice === true) {

        let userNum = Number(prompt('What number would you like to pick today?'));

        if(Number.isInteger(userNum)) {
            evenOrOdd(userNum);
            sumOfUserNum(userNum);
            positiveOrNegative(userNum);
        } else {
            return alert('Invalid input, try again')
        }
    } else {
        return alert('We can try again tomorrow...')
    }
}

function evenOrOdd(userNum) {
    if(userNum % 2 === 0) {
         alert('Your number is even!')
    } else {
         alert('Your number is odd!')
    }
}

function sumOfUserNum(userNum) {
    return alert('Your number plus 100 is: ' + (userNum + 100));
}

function positiveOrNegative(userNum) {
    if(userNum >= 0) {
        return alert('Your number is positive');
    } else {
        return alert('Your number is negative');
    }
}

userAnswer(user);