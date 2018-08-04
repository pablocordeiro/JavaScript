//Hoisting

/*
	No JavaScript as declarações de variáveis e funções são movidas para o topo.
	Se eu tentar usar uma variável antes de criar e em outra parte do código criá-la, o código funcionará sem problemas.
	É preciso ter cuidado com isso, pois se criar e atribuir um valor a ela no mesmo statement, a criação será levada para o topo, 
	mas a atribuição não.
*/


console.log(x); //Exibe undefined, pois só a criação foi levada para o topo.

var x = 5;

console.log(x); //Exibe o valor 5