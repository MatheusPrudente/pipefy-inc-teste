const numbers = {
  "zero" : "0",
  "one" : "1",
  "two" : "2",
  "three" : "3",
  "four" : "4",
  "five" : "5",
  "six" : "6",
  "seven" : "7",
  "eight" : "8",
  "nine" : "9"
}
  
const mathematicalSymbols = {
  "minus" : "-",
  "plus" : "+",
  "multiplication" : "*",
  "division" : "/",
}

function stringChallenge(str) {
  let mathematicalFormula = convertToMathematicalFormula(str);
  let result = eval(mathematicalFormula);
  let finalStr = convertToFullNumber(result) + ":" + reverseToken("token");

  return replaceQuartets(finalStr);
}

function convertToMathematicalFormula(str) {
  let mathematicalFormula = "";
  let currentString = "";

  for (let index = 0; index < str.length; index++) {
    currentString += str.substring(index, index + 1);

    if (numbers[currentString]) {
      mathematicalFormula += numbers[currentString];
      currentString = "";
    }

    if (mathematicalSymbols[currentString]) {
      mathematicalFormula += mathematicalSymbols[currentString];
      currentString = "";
    }
  }

  return mathematicalFormula;
}

function convertToFullNumber(result) {
  let fullNumber = "";
  let isNegative = result < 0;
  let resultStr = result.toString();
  let objet = Object.entries(numbers);

  if (mathematicalSymbols[resultStr[0]]) {
    start = 1;
    fullNumber += mathematicalSymbols[resultStr[0]];
  }

  for (let index = 0; index < resultStr.length; index++) {
    for (let [key, value] of objet) {
      if (value.toString() === resultStr[index]) {
        fullNumber += key;
        break;
      }

      if (isNegative) {
        isNegative = false;
        fullNumber += "minus";
        break;
      }
    }
  }

  return fullNumber;
}

function reverseToken(token) {
  return token.split("").reverse().join("");
}

function replaceQuartets(str) {
  for (let index = 3; index < str.length; index += 4) {
    str = str.substring(0, index) + "_" + str.substring(index + "_".length);
  }

  return str;
}

console.log(stringChallenge("foursixminustwotwoplusonezero"));