let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const [f1, f2, f3] = myFriends;

let friendDetails = function(friendObj){
    const {title: t, age: a, available: av, skills:[, s2]} = friendObj;

    console.log(t);
    console.log(a);
    console.log(av ? "available" : "Not Available");
    console.log(s2);
}

if(chosen === 1) friendDetails(f1);
if(chosen === 2) friendDetails(f2);
if(chosen === 3) friendDetails(f3);


// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"