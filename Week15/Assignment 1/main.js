let member = {
  name: "Elzero",
  age:38,
  country : "Egypt",
  fullDetails : function(){
    return `My name is ${this.name} , My Age Is ${this.age} , I live in ${this.scountry}`;
  }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt