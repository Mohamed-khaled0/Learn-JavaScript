

// for(let i = 1; i<=100;i++){
//   let myD = document.createElement("div");
//   let myH= document.createElement("h3");
//   let myP = document.createElement("p");
//   let myText=document.createTextNode("product title" +[i] );
//   let myT= document.createTextNode("paragraph discreption" +[i] );
//       myH.appendChild(myText);
//       myP.appendChild(myT);
//       myD.appendChild(myH);
//       myD.appendChild(myP);
// document.body.appendChild(myD);
// }

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function(){
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
}
