// Vars and Concat Challenge

let theTitle = ' Elzero',
 theDescription = 'Elzero Web School' , 
 theDate = "25/10";

let card  = `
<div> 
<h3>Hello ${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>
</div>`;


document.write(card.repeat(4))