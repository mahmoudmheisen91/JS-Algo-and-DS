// Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));

// Math solution:
const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];

    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;

    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
};

// Recursive Solution

function sumAll([first, last]) {
    const step = first - last < 0 ? 1 : -1;
    return first !== last ?
        first + sumAll([first + step, last]) :
        first;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
    let arr3 = arr1.filter(item => arr2.indexOf(item) == -1);
    let arr4 = arr2.filter(item => arr1.indexOf(item) == -1);

    return arr3.concat(arr4);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));