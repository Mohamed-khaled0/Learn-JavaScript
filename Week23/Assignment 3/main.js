// Edit The Class
class User {
    #card;
    constructor(username, card) {
      this.username = username;
      this.#card = card;
    }

    creditCard(){
        return  this.#card.toString().match(/\d{4}/g).join("-");
    }

get showData(){
   return `Hello ${this.username} Your Credit Card Number Is ${this.creditCard()}`;

}
}

  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined