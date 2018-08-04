/* Código abaixo demonstra problema de variável global poder ser
alterada em qualquer parte do escopo
var contador = 0; //Global
function tick() {
	contador = contador + 1;
	console.log(contador);
}
tick();
tick();
contador = 10;
tick();
*/

var tick = (function(){
	var contador = 0;

	return function(){
    	contador = contador + 1;		
    	console.log(contador);
	}

})();

tick();
tick();
tick();
