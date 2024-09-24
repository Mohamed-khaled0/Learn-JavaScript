
/*  Needed Output
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };

  Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  3
  true
  */


  

  let myInfo2 = new Map();
  myInfo2.set("username", "Osama");
  myInfo2.set("role", "Admin");
  myInfo2.set("country", "Egypt");
  
  console.log(myInfo2); 
  console.log(myInfo2.size); 
  console.log(myInfo2.has("role")); 