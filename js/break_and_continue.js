let user = prompt('Hi! What\'s your name?');
let num = parseInt(prompt('Hello ' + user + ', pick an odd number between 1-50: '));

// for (let i = 0; i < 50; i++) {
//
//     let num = parseInt(prompt('Hello ' + user + ', pick an odd number between 1-50: '));
//
//     if(num % 2 !== 0) {
//         break;
//     }
//     console.log(i);
// }

console.log('Number to skip is: ' + num);

for (let i = 1; i <= 50; i++) {
    if(i == num) {
       console.log('Yikes!! Skipping number: ' + num);
       continue;
    }
    if(i % 2 !== 0) {
        console.log('Here is an odd number: ' + i)
    }
}

