let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray
  .reduce((acc, curr) => acc.concat(curr), [])
  .reduce((acc, curr) => acc + curr);

console.log(result); // Elzero
