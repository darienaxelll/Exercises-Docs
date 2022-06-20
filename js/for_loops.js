
function showMultiplicationTable(num) {
    for(let multiplier = 1; multiplier < 11; multiplier++) {
        console.log((num + ' x ' + multiplier + ' = ' + (num * multiplier)));
    }
}

showMultiplicationTable(3);

function tenRandomNum() {
    for (let num = 0; num < 10; num++)  {

        let randomNumber = Math.floor((Math.random() * 180) + 20);

        if(randomNumber % 2 === 0) {
            console.log(randomNumber + ' is even')
        } else {
            console.log(randomNumber + ' is odd')
        }
    }
}

tenRandomNum();

function pyramidNum(rows) {
    let bucketStr = "";
    for(let num = 1; num <= rows; num++) {
        // console.log("Outer loop reporting in " + num);

        for(let num2 = 1; num2 <= num; num2++){
            bucketStr += num;

        }
        console.log(bucketStr)
         bucketStr = "";
    }
}

pyramidNum(9);

for (let i = 100; i >= 5; i -= 5) {
    console.log(i)
}

// i need some explanation on "i = (i-5)" because i just guessed...

