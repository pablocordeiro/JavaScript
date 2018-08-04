var x = 456e5; //45600000
var y = 123e-6; //0.000123

console.log(x);
console.log(x.toExponential());

var a = 0xFFF;

console.log(a);
console.log(a.toString(16));

console.log(3.357.toFixed(2)); //Parâmetro leva em conta apenas casas decimais
console.log(3.357.toPrecision(2)); //Leva em conta a parte inteira