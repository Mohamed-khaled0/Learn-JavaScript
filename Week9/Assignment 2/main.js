let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends = ["Eman" , "Osama"];
console.log(friends); // ["Eman", "Osama"]

//anther solution


let friends2 = ["Ahmed", "Eman", "Osama", "Gamal"];
friends2.pop();
friends2.shift();

console.log(friends2); // ["Eman", "Osama"]