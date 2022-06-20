// let i = 1;
//
// while(i <= 32768) {
//     console.log((i *= 2));
// }

let allCones = Math.floor(Math.random() * 50) + 50;

function remainingInventory(allCones,randomNum) {
    return allCones - randomNum;
}

console.log('Starting cones: ' + allCones);

do {
    let randomNum = Math.floor(Math.random() * 5) + 1;

    if (allCones > randomNum) {
        allCones =  remainingInventory(allCones, randomNum);
        console.log(randomNum + ' cones sold. I have ' + allCones + ' left.')
    } else if (allCones < randomNum) {
        console.log('Can\'t sell you ' + randomNum + ' , I have ' + allCones + ' left.')
        randomNum = Math.floor(Math.random() * 5) + 1;
    } else if (allCones === randomNum)  {
        console.log('You bought the last cone !!')
        allCones = 0
    }
} while(allCones > 0);

console.log('Yay!! I sold them all!!')
