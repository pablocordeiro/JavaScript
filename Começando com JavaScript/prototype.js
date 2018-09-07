function Stark(nome, idade, corDoCabelo){
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = corDoCabelo;
	this.sobrenome = "Stark";
	this.apresentar = function(){
		console.log("Olá, me chamo " + this.nome + " da casa " + this.sobrenome + ".");
	}
}

//Agregando algo a um objeto
Stark.prototype.darTchau = function(){console.log("Tchau");};


var ned = new Stark("Eddard", 40, "Preto");
ned.apresentar();

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.apresentar();

sansa.darTchau();

// console.log(ned);
// console.log(sansa);


String.prototype.apagar = function(){return "";}

console.log("oi".apagar());

