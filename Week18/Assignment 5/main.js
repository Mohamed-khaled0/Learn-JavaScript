let counterDiv = document.getElementById('counter');
let counterValue = parseInt(counterDiv.textContent);

let interval = setInterval(() => {
  counterValue--;
  counterDiv.textContent = counterValue;

  if (counterValue === 5) {
    window.open("https://elzero.org", "_blank", "width=300,height=300");
  }

  if (counterValue === 0) {
    clearInterval(interval);
  }
}, 2);