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
