
  function sayHello(theName, theGender) {
    if (theGender === "Male"){
        console.log(`Hello Mr ${theName}`) ;
    }else{
        console.log(`Hello Miss ${theName}`) ;
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"