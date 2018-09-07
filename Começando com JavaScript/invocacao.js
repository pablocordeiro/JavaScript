function dizerOi(nome) {
	console.log("Oi " + nome);
	// console.log(this);
}
dizerOi("Arya");

dizerOi.call({},"Arya");

dizerOi.apply({}, ["Arya"]);

