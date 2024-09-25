
class Car {
    constructor(name , model,price){
        this.name = name;
        this.model = model;
        this.price = price;
    }

run (){
return `Car Is Running Now`;}

stop (){
    return `Car Is Stopped `;}

}

let carOne = new Car("X","2022", 42000);
let carTwo = new Car("Y","2022", 45000);
let carThree = new Car("Z","2022", 49000);

console.log(`Car One Name Is ${carOne.name} And Model Is ${carOne.model} And Price Is ${carOne.price}`);
console.log(carTwo.run);

  "Car One Name Is MG And Model Is 2022 And Price Is 420000"
  "Car Is Running Now"