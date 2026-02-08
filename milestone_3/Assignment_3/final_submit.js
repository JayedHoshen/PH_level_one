//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    let price = currentPrice - (discount / 100) * currentPrice;
    return price.toFixed(3);
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") return "Invalid";
  else {
    if (otp.startsWith("ph-") && otp.length === 8) return true;
    else return false;
  }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  if (typeof omr !== "object" || omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  } else {
    return Math.round(omr.right - omr.wrong / 2);
  }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (Array.isArray(array) === false) {
    return "Invalid";
  } else {
    let ha = 0,
      na = 0;
    // count ha or na in array
    for (const element of array) {
      if (element === "ha") ha++;
      else na++;
    }
    // check condition ha/na
    if (ha > na) return true;
    else if (ha === na) return "equal";
    else return false;
  }
}

//Problem-05: Text Analyzer for an AI Company
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
