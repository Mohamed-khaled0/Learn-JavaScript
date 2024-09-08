let counterDiv = document.getElementById('counter');
let counterValue = parseInt(counterDiv.textContent);

let interval = setInterval(() => {
    counterValue--;
    counterDiv.textContent = counterValue;
    if (counterValue === 0) {
      clearInterval(interval);
      window.location.href = "https://elzero.org";
    }
  }, 1000);