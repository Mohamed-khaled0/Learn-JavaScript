// Method One
objMethodOne = new Object({ property: "Method One" });

console.log(objMethodOne.property); // "Method One"

// Method Two
objMethodTwo = {
  property: "Method Two",
};
console.log(objMethodTwo.property); // "Method Two"

// Method Three
objMethodThree = Object.create({ property: "Method Three" });

console.log(objMethodThree.property); // "Method Three"

// Method Four
objMethodFour = Object.assign({ property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"