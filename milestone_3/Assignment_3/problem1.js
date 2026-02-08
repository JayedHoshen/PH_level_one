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
