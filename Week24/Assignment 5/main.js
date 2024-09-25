


let start = performance.now();

for(let i = 0; i < 1000; i++){
    document.write(`<div>${i}</div>`)
}

let end = performance.now();

let duration = end - start;

console.log(`"Loop Took ${Math.trunc(duration)} Milliseconds."`);

// Needed Output

"Loop Took 1921 Milliseconds."

