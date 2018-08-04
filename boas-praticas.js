//Não utilizar variáveis globais, utilizar funcoes auto executaveis
(function(){
	//Sempre deixar criação de variáveis no topo, faça o Hoisting você mesmo
	var escopoLocal,
		escopoGlobal,
		obj; //Utilizar da vírgula na criação de variáveis.

	escopoLocal = "Teste"; //Utilizar aspas duplas

    //Caso sejam poucas propriedades, deixe em uma linha só
	obj = {nome: "Pablo", idade: 25}; 

    //Caso quebre a linha, tire o espaço sobrando no fim da anterior
	obj = { //Deixe a abertura na linha de criação do objeto
		nome: "Pablo", 
		sobrenome: "Cordeiro", 
		idade: 25
	};  //E o fechamento em uma linha própria
})();