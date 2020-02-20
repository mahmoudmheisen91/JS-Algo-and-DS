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

// sol 1:
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// sol 2:
function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}

// Seek and Destroy:
function destroyer(arr) {
    let arr1 = arguments[0];
    let arr2 = [...arguments];
    arr2.shift();

    return arr1.filter(item => !arr2.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// sol 2:
function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !args.includes(val);
    });
}

// sol 3 se6:
const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

// Wherefore art thou:
function whatIsInAName(collection, source) {
    var arr = [];

    arr = collection.filter(item => {
        let out = true;
        for (let key in source) {
            out = out && item[key] == source[key];
        }
        return out;
    });

    return arr;
}

console.log(whatIsInAName([{
    "apple": 1,
    "bat": 2
}, {
    "bat": 2
}, {
    "apple": 1,
    "bat": 2,
    "cookie": 2
}], {
    "apple": 1,
    "bat": 2
}));

// sol2:
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

// We start by filtering through collection using Array.filter().
// Next, we map through all keys and return Boolean values based 
// on the check conditions: both the key and its corresponding value 
// must exist within the object we are filtering through.
// Then we reduce the mapped Boolean values to a single Boolean that 
// indicates whether all srcKeys pass the conditions checked above.
// This single Boolean will be used to filter through the collection.

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        return srcKeys
            .map(function (key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            })
            .reduce(function (a, b) {
                return a && b;
            });
    });
}

// Spinal Tap Case:
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/[\s_]/g, ' ');
    let nstr = str.split("").map((item, index, arr) => {
        if (item !== item.toLowerCase() && arr[index - 1] !== " ") {
            item = " " + item;
        }
        return item;
    }).join("").trim();
    return nstr.replace(/\s/g, '-').toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));