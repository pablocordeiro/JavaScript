//for, for in, while, do while

var x = 0;

while(x < 10) {
	console.log("X é igual a " + x);
	x = x + 1;
}

do {
	console.log("X é igual a " + x);
	x = x + 1;	
} while ( x < 10)

for(var y = 0; y < 10; y = y + 1) {
	console.log(y);
}


var obj = {
	nome: 'Daenerys',
	sobrenome: 'Targaryen'
};

for(var prop in obj){
	console.log(prop + ': ' + obj[prop]);
	//prop retorna o nome do atributo do objeto
	//obj[prop] retorna o valor
}