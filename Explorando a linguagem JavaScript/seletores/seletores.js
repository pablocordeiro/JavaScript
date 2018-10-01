$(function(){
	var selecionarTodosClientes = $('#selecionar-todos-clientes');
	var selecionarClientes = $('.js-selecionar-cliente');

	selecionarClientes.on('click', function() {
		var totalUsuariosSelecionados = selecionarClientes.filter(':checked').length;
		var checked = (totalUsuariosSelecionados === selecionarClientes.length);

		selecionarTodosClientes.prop('checked', checked);
	});

	selecionarTodosClientes.on('click', function() {
		selecionarClientes.prop('checked', selecionarTodosClientes.prop('checked'));
	});
});