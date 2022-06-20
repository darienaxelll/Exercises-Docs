(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Alex', 'Brenda', 'Carlos', 'Darien'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log('The "names" array has ' + names.length + ' names.');
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
// names.forEach(function(names) {
//     console.log('This is: ' + names)
// });
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// for(let i = 0; i < names.length; i++) {
//     console.log('This is: ' + names[i]);
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // for(let i = 0;i < names.length; i++) {
    //     names.forEach(function(names) {
    //         console.log('This is: ' + names)
    //     });
    // }

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let array = [1, 2, 3, 4, 5, 6 , 7 , 8];

    function firstItem(array) {
        console.log(array[0]);
    }

    function secondItem(array) {
        console.log(array[1]);
    }

    function lastItem(array) {
        console.log(array[array.length - 1]);
    }

    console.log(firstItem(array));
    console.log(secondItem(array));
    console.log(lastItem(array));

})();