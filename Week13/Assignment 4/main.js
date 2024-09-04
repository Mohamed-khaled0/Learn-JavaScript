function specialMix(...data) {
  let sum = 0;
  let hasNumbers = false;

  for (let item of data) {
    if (typeof item === "number") {
      sum += item;
      hasNumbers = true;
    } 
    else if (typeof item === "string") {
      let extractedNumber = parseInt(item);
      if (!isNaN(extractedNumber)) {
        sum += extractedNumber;
        hasNumbers = true;
      }
    }
  }

  if (hasNumbers) {
    return sum;
  } else {
    return "All Is Strings";
  }
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings