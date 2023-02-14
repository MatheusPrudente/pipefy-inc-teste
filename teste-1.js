function arrayChallenge(arr) {
  const targetElement = arr[0];
  let pairs = [];
  
  for (let current = 1; current < arr.length; current++) {
    let currentElement = arr[current];
    let nextElement = arr[current]; // initialize
    
    for (let next = current + 1; next < arr.length; next++) {
        nextElement = arr[next];
        resultFormula = currentElement + nextElement;
        if(resultFormula == targetElement) {
          pairs.push({currentElement, nextElement})
        }
      }
  }
  
  return formatPairs(pairs) + ":" + reverseToken("token");
}

function formatPairs(pairs) {
  const standard = -1;
  let stringPairs = "";
  
  if(pairs.length) {
    let currentElement;
    let nextElement;

    for(let current = 0; current < pairs.length; current++) {
      currentElement = pairs[current].currentElement;
      nextElement = pairs[current].nextElement;
      stringPairs += currentElement + "," + nextElement;
      if (pairs[current + 1]) {
        stringPairs += " ";
      }
    }
    
    return stringPairs;
  }
  
  return standard;
}

function reverseToken(token) {
  return token.split("").reverse().join("");
}

//console.log(arrayChallenge([7,3,5,2,-4,8,11,20,-13,9,-2,10,1]));
console.log(arrayChallenge([17,4,5,6,10,11,4,-3,-5,3,15,2,7]));