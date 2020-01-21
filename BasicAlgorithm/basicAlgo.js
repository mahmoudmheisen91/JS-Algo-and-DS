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
