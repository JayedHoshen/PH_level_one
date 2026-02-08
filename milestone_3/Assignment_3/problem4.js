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
