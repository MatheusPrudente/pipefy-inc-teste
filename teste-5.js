const symbols = {
  startTag: "<",
  closeTag: "</",
  endTag: ">",
  quartets: "_",
};

const regex = /[^\w\s]/gi;

function stringChallenge(str) {
  let finalStr = istagClosed(str);
  finalStr += ":" + reverseToken("token");

  return replaceQuartets(finalStr);
}

function istagClosed(str) {
  let stack = [];
  let start = 0;
  let end = 0;

  for (let index = 0; index < str.length; index++) {
    if (symbols["startTag"] == str[index]) {
      start = index;
    }

    if (symbols["endTag"] == str[index]) {
      end = index + 1;
    }

    if (end > 0 && start >= 0) {
      let tag = str.substring(start, end);

      if (tag.substring(0, 2) != symbols["closeTag"]) {
        tag = tag.replace(regex, "");
        stack.push(tag);
      } else {
        let current = "";
        for (let s = stack.length - 1; s >= 0; s--) {
          current = stack[s];
          tag = tag.replace(regex, "");

          if (current == tag) {
            stack.splice(s, 1);
            break;
          }
        }
      }

      start = 0;
      end = 0;
    }
  }

  return stack.length === 0 ? true : stack[0];
}

function replaceQuartets(str) {
  for (let index = 3; index < str.length; index += 4) {
    str = str.substring(0, index) + symbols["quartets"] + str.substring(index + symbols["quartets"].length);
  }

  return str;
}

function reverseToken(token) {
  return token.split("").reverse().join("");
}

//console.log(stringChallenge("<div><b><p>hello world</p><a>ancora<i></b></div>"));
console.log(stringChallenge("<div><div><b></b></div></p>"));
