let counterDiv = document.getElementById('counter');
let currentValue = parseInt(counterDiv.innerText); 

let countdown = setInterval(function() {
    if (currentValue > 0) {
        currentValue--; 
        counterDiv.innerText = currentValue; 
    } else {
        clearInterval(countdown); 
    }
}, 1000); 