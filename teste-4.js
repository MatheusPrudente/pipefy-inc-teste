const symbols = {
  even: "-",
  odd: "*",
  quartets: "_",
};

function stringChallenge(str) {
  let currentNumber = 0;
  let nextNumber = 0;
  let finalStr = "";
  let currentIsEven = 0;
  let nextIsEven = 0;

  for (let index = 0; index < str.length; index++) {
    currentNumber = parseInt(str[index]);

    if (str[index + 1]) {
      nextNumber = parseInt(str[index + 1]);

      if (currentNumber > 0 && nextNumber > 0) {
        currentIsEven = isEven(currentNumber);
        nextIsEven = isEven(nextNumber);

        if (currentIsEven && nextIsEven) {
          finalStr += currentNumber + symbols["even"];
        } else if (!currentIsEven && !nextIsEven) {
          finalStr += currentNumber + symbols["odd"];
        } else {
          finalStr += currentNumber;
        }
      }
      continue;
    }
    finalStr += currentNumber;
  }
  finalStr += ":" + reverseToken("token");
  console.log(finalStr);
  return replaceQuartets(finalStr);
}

function isEven(str) {
  return str % 2;
}

function replaceQuartets(str) {
  for (let index = 3; index < str.length; index += 4) {
    str =str.substring(0, index) + symbols["quartets"] + str.substring(index + symbols["quartets"].length);
  }

  return str;
}

function reverseToken(token) {
  return token.split("").reverse().join("");
}

//console.log(stringChallenge("99946"));
console.log(stringChallenge("56647304"));
