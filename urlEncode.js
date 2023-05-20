const urlEncode = function (text) {
  // Solution 1
  while (text[0] === " ") {
    text = text.substring(1);
  }
  while (text[text.length - 1] === " ") {
    text = text.substring(0, text.length - 1);
  }
  return encodeURI(text);
  
  //Solution 2
  /*for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i === 0) {
        while (text[0] === " ") {
          text = text.substring(1);
        }
      } else if (i === text.length - 1) {
        while (text[text.length - 1] === " ") {
          text = text.substring(0, text.length - 1);
        }
      } else text[i] = "%20";
    }
  }
  return encodeURI(text);
  */
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure   "));