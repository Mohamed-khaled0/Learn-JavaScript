let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = 0;




for (let i = 0; i < friends.length; i++) {
  if (friends[i][0].toLowerCase() !== letter) {
    count++;
    console.log(`${count} => ${friends[i]}`);
  }
}


// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"