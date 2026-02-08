function analyzeText(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return "Invalid";
  } else {
    let myStr = str.split(" ");
    let longwords = myStr[0],
      token = 0;
    for (const element of myStr) {
      token += element.length;
      if (element.length > longwords.length) longwords = element;
    }
    return { longwords: longwords, token: token };
  }
}
