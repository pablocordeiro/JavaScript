var obj = {
	nome: "Daenerys", 
	sobrenome: "Targaryen",
	idade: 16,
	apresentarAnonima: function(){
		console.log("Meu nome é " + this.nome + ' ' + this.sobrenome + '.');
	},
	apresentarExterna: apresentar
}; 

function apresentar(){
	console.log("Meu nome é " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj);
console.log(obj.nome);


obj.apresentarAnonima();
obj.apresentarExterna();
//Variáveis dentro de um objeto são chamadas de propriedade