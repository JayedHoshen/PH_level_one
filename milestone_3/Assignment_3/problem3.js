function finalScore(omr) {
  if (typeof omr !== "object" || omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  } else {
    return Math.round(omr.right - omr.wrong / 2);
  }
}
