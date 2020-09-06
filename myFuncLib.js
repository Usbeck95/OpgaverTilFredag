//start på js.funcs.3
var f = 50;
function f2c() {
    return (5/9 * (f-32));
}

console.log(f2c(f));

var c = 10;
function c2f() {
    return (c * 9/5 + 32);
}

console.log(c2f(c));

//slut på js.funcs.3

//start på js.funcs.2
let tails = 0;
let heads = 0;
let flip;


flip = Math.random();
flip = Math.floor(flip * 37 + 1); // altså jeg skal skifte 2 til 37 for at den fungerer til roulette?
if (flip === 1)
    tails++;
else                            // Jeg er i tvivl om jeg så skal lave en masse cases for hver mulighed som er 37?
    heads++;

console.log('heads: ' + heads);
console.log('tails: ' + tails);

