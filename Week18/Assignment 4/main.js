


let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");

elOne.title = elOne.className;
elTwo.title = elTwo.className;


elOne.textContent = elOne.className;
elTwo.textContent= `${elTwo.className}  ${elTwo.attributes.length}`;


console.log(elOne);
console.log(elTwo);