let a = 21;
let b = 20;
let cc = (d = a);
let aa = (e = a);
let c = e + "" +d;

console.log(`_${d}_${(c + "_").repeat(++cc % --aa)} ${--e}_`);