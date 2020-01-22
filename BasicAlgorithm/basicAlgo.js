// Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

// Reverse a String
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverseString2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

// Factorialize a Number
function factorialize(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

// head
function factorialize2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

//  Tail
function factorialize3(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

function factorialize4(num, factorial = 1) {
  return num < 0
    ? 1
    : new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1);
}

factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let max = 0;
  for (let el of arr) {
    if (el.length > max) {
      max = el.length;
      console.log(el);
    }
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength2(s) {
  return s.split(" ").reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
}

function findLongestWordLength3(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

function findLongestWordLength(str) {
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}

// Return Largest Numbers in Arrays
// (Procedural approach)

function largestOfFour(arr) {
  // You can do this!
  let newArr = [];
  for (let sub of arr) {
    newArr.push(Math.max(...sub));
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// (Declarative approach)
function largestOfFour2(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

// (Declarative approach)
function largestOfFour3(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

// (Recursive approach)
function largestOfFour4(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}

// Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// (using Regular Expression)
function confirmEnding2(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

// Repeat a String
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) return "";

  let newStr = str;
  for (let i = 1; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

function repeatStringNumTimes2(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

function repeatStringNumTimes3(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

function repeatStringNumTimes4(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

function repeatStringNumTimes5(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

// Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) return str;

  let newStr = str.slice(0, num) + "...";
  console.log(newStr);
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

// Finders Keepers
function findElement(arr, func) {
  for (let el of arr) {
    if (func(el)) return el;
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement2(arr, func) {
  return arr.find(func);
}

function findElement3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// Boo who:
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool == "boolean") return true;
  return false;
}

booWho(null);

function booWho(bool) {
  return typeof bool === "boolean";
}
