let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start+1; i < mix.length; i++) {
  if (typeof mix[i] === typeof start && mix[i] > start) {
    console.log(mix[i]);
  }
}
// Output
2
3
4