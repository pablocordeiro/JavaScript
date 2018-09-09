function incrementar () {
	var valor = 0;

	return function () {
		return ++valor;
	}
}

var fn = incrementar();
var fn2 = incrementar();

console.log(fn());
console.log(fn());
console.log(fn());

console.log(fn2());
console.log(fn2());
console.log(fn2());



var incrementar = (function() {
	var valor = 0;

	return function () {
		return ++valor;
	}
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());