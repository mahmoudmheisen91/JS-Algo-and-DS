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
// stupid solution:
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

// sol2:
function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/(([a-z])[A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/[_\s]/)
        .join("-");
}

// sol3:
// Split the string at one of the following conditions (converted to an array)
// a whitespace character [\s] is encountered
// underscore character [_] is encountered
// or is followed by an uppercase letter [(?=[A-Z])]
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

// Pig Latin:
function translatePigLatin(str) {
    if (str.match(/^[aeoiu]/g)) return str + "way";
    if (!str.match(/[aeoiu]/g)) return str + "ay";

    let arr = str.split(/(?=[aeoiu])/);
    arr.push(arr.shift());
    return arr.join("") + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));

// sol1:
function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// sol2:
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// sol3:
function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
    } else {
        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }

    return pigLatin;
}

// Search and Replace
function myReplace(str, before, after) {
    if (isUpperCase(before)) {
        after = after[0].toUpperCase() + after.substr(1);
    }

    let arr = str.split(" ");
    arr[arr.indexOf(before)] = after;

    return arr.join(" ");
}

const isUpperCase = (string) => /^[A-Z]/.test(string);

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// best:
function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substr(1);
    }

    return str.replace(before, after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// sol1
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
        // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);

    return str;
}

// sol2
function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substr(1)
    } else {
        after = after[0].toLowerCase() + after.substr(1)
    }

    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
}

// sol 3:
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
    String.prototype.capitalize ||
    function () {
        return this[0].toUpperCase() + this.slice(1);
    };

const Util = (function () {
    // Create utility module to hold helper functions
    function textCase(str, tCase) {
        // Depending if the tCase argument is passed we either set the case of the
        // given string or we get it.
        // Those functions can be expanded for other text cases.

        if (tCase) {
            return setCase(str, tCase);
        } else {
            return getCase(str);
        }

        function setCase(str, tCase) {
            switch (tCase) {
                case "uppercase":
                    return str.toUpperCase();
                case "lowercase":
                    return str.toLowerCase();
                case "capitalized":
                    return str.capitalize();
                default:
                    return str;
            }
        }

        function getCase(str) {
            if (str === str.toUpperCase()) {
                return "uppercase";
            }
            if (str === str.toLowerCase()) {
                return "lowercase";
            }
            if (str === str.capitalize()) {
                return "capitalized";
            }
            return "normal";
        }
    }

    return {
        textCase
    };
})();

function myReplace(str, before, after) {
    const {
        textCase
    } = Util;
    const regex = new RegExp(before, "gi");
    const replacingStr = textCase(after, textCase(before));

    return str.replace(regex, replacingStr);
}

// sol4
function myReplace(str, before, after) {
    const myArr = str.split(" ");
    const [wordToReplace] = myArr.filter(item => item === before);
    return wordToReplace[0].toUpperCase() !== wordToReplace[0] ?
        myArr.map(item => (item === before ? after : item)).join(" ") :
        myArr
        .map(item =>
            item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

// DNA Pairing:
function pairElement(str) {
    let arr = str.split("");
    arr = arr.map(item => {
        switch (item) {
            case "G":
                return [item, "C"];
            case "C":
                return [item, "G"];
            case "A":
                return [item, "T"];
            case "T":
                return [item, "A"];

        }
    });

    return arr;
}

console.log(pairElement("GCG"));

// sol 1:
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
}

// Convert HTML Entities
function convertHTML(str) {
    let sym = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
        ">": "&gt;",
        "<": "&lt;",
    }

    let arr = str.split("");
    return arr.map(item => {
        return /([&"'<>])/.test(item) ? sym[item] : item;
    }).join("");
}

console.log(convertHTML("Dolce & Gabbana"));

// sol 1
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// sol 2
// Use Object Lookup to declare as many HTML entities as needed.
const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
};
//Use map function to return a filtered str with all entities changed automatically.
return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// Map the Debris:
function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    return arr.map(obj => {
        let a = obj.avgAlt + earthRadius;
        let op = Math.round(2 * Math.PI * Math.sqrt(a * a * a / GM));
        return {
            name: obj.name,
            orbitalPeriod: op
        };
    });
}

console.log(orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}]));

// sol 2:
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // Loop through each item in the array arr
    arr.forEach(function (item) {
        // Calculate the Orbital period value
        var tmp = Math.round(
            2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
        );
        //Delete the avgAlt property
        delete item.avgAlt;
        //Add orbitalPeriod property
        item.orbitalPeriod = tmp;
    });
    return arr;
}

// sol 3:
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({
        name,
        avgAlt
    }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
        return {
            name,
            orbitalPeriod
        };
    });
}

orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);

// Make a Person
var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let str = firstAndLast.split(" ");

    this.getFirstName = function () {
        return str[0];
    };

    this.getLastName = function () {
        return str[1];
    };

    this.getFullName = function () {
        return str.join(" ");
    };

    this.setFirstName = function (first) {
        str[0] = first;
    };

    this.setLastName = function (last) {
        str[1] = last;
    };

    this.setFullName = function (firstAndLast) {
        str = firstAndLast.split(" ");
    };

};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());

// sol 2: 
var Person = function (firstAndLast) {
    let fullName = firstAndLast.split(' ');

    this.setFullName = (full) => fullName = full.split(' ');
    this.setFirstName = (first) => fullName[0] = first;
    this.setLastName = (last) => fullName[1] = last;

    this.getFullName = () => fullName.join(' ');
    this.getFirstName = () => fullName[0];
    this.getLastName = () => fullName[1];
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());

// Everything Be True:
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => {
        if (!pre in obj) return false;
        return !!obj[pre];
    });
}

console.log(truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex"));

// sol 1:
function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}

// sol 2:
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}

// Smallest Common Multiple
function smallestCommons(arr) {
    let out = 0;
    let narr = [];
    arr.sort((a, b) => a - b);

    function lcm(a, b) {
        let gcd = a;
        let tmp = b;
        while (tmp != 0) {
            let ogcd = gcd;
            gcd = tmp;
            tmp = ogcd % tmp;
        }
        return a * b / gcd;
    }

    let j = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        narr[j++] = i;
    }

    return narr.reduce(lcm);
}


console.log(smallestCommons([1, 5]));

// sols:
// freecodecamp.org/forum/t/freecodecamp-challenge-guide-smallest-common-multiple/16075

// Drop it:
function dropElements(arr, func) {
    // Drop them elements.
    let narr = arr.map(item => func(item));

    if (narr.includes(true))
        return arr.slice(narr.indexOf(true));

    return [];
}

console.log(dropElements([1, 2, 3, 4], function (n) {
    return n > 2;
}));

// sol 1: shift
function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

// sol2
function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// sol 3:
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

// sol 4:
function dropElements(arr, func, i = 0) {
    return i < arr.length && !func(arr[i]) ?
        (dropElements(arr.slice(i + 1), func, i)) :
        arr;
}

// Steamroller
function steamrollArray(arr, narr = []) {
    // I'm a steamroller, baby

    var flat = function (arg) {
        if (!Array.isArray(arg)) {
            narr.push(arg);
        } else {
            for (let elem in arg) {
                flat(arg[elem], narr);
            }
        }
    };

    arr.forEach(flat);
    return narr;
}

console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));

// sols:
//https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-steamroller/16079

// Binary Agents
function binaryAgent(str) {
    let arr = str.split(" ");
    arr = arr.map(item => String.fromCharCode(parseInt(item, 2)));

    return arr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// sol 2:
function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(function (char) {
            return parseInt(char, 2);
        })
    );
}

// Sorted Union:
function uniteUnique(...arr) {
    let narr = [];
    arr.map(item => {
        item.map(elem => {
            if (!narr.includes(elem)) {
                narr.push(elem);
            }
        });
    });

    return narr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// sol2
function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;
}

// sol 3
function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function (arrA, arrB) {
        //Apply filter to remove the duplicate elements in the array
        return arrA.concat(
            arrB.filter(function (i) {
                return arrA.indexOf(i) === -1;
            })
        );
    });

    return newArr;
}

// sol 4:
function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
        concatArr = concatArr.concat(arguments[i]);
        i++;
    }
    uniqueArray = concatArr.filter(function (item, pos) {
        return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
}

// sol 5:
function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);

    // create a Set which clears any duplicates since it's a regulat set and not a multiset
    return [...new Set(flatArray)];
}

// Sum All Primes:
function sumPrimes(num) {
    let isPrime = item => {
        let n = item / 2; // sqrt(item)
        for (let i = 2; i <= n; i++) {
            if (item % i == 0) return false;
        }
        return true;
    };

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) sum += i;
    }

    return sum;
}

console.log(sumPrimes(977));

// sols:
// https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-sum-all-primes/16085
function sumPrimes(num) {
    let nums = Array.from({
            length: num + 1
        })
        .map((_, i) => i)
        .slice(2);
    for (let n in nums) {
        nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);
}

// Arguments Optional algo
function addTogether(...args) {
    if (typeof (args[0]) == "number") {
        if (typeof (args[1]) == "number") {
            return args.reduce((sum, item) => sum + item, 0);
        } else if (typeof (args[1]) != "undefined") return undefined;
    } else return undefined;


    return addTogether.bind(this, ...args);
}

console.log(addTogether(2));

// sol 2
function addTogether(first, second) {
    if (typeof first !== "number") {
        return undefined;
    }
    const sum = second =>
        typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
}

// sol 3
function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof n !== "number") ?
        undefined :
        args.length > 1 ?
        args.reduce((acc, n) => (acc += n), 0) :
        n => (typeof n === "number" ? n + args[0] : undefined);
}