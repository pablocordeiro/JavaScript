var nome = 'AlgaWorks'; //variável global

var capitalizar = function(){
	//variável local
	var nome = 'AlgaWorks'.toUpperCase();
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function(){
	nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);
