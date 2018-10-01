$(function(){
	var selecionarTodosClientes = $('#selecionar-todos-clientes');
	var selecionarClientes = $('.js-selecionar-cliente');

	function estilizarLinhaClientes(){
		selecionarClientes.filter(':checked').parents('tr').addClass('selecionado');
		selecionarClientes.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	selecionarClientes.on('click', function() {
		var totalUsuariosSelecionados = selecionarClientes.filter(':checked').length;
		var checked = (totalUsuariosSelecionados === selecionarClientes.length);

		selecionarTodosClientes.prop('checked', checked);
	});

	selecionarTodosClientes.on('click', function() {
		selecionarClientes.prop('checked', selecionarTodosClientes.prop('checked'));
		estilizarLinhaClientes();
		// if (selecionarClientes.prop('checked')){
		// 	selecionarClientes.parents('tr').addClass('selecionado');
		// } else {
		// 	selecionarClientes.parents('tr').removeClass('selecionado');
		// }

	});

	selecionarClientes.on('change', function(evento){
		var selecionarCliente = $(evento.target);

		estilizarLinhaClientes();
		// if (selecionarCliente.prop('checked')){
		// 	selecionarCliente.parents('tr').addClass('selecionado');
		// } else {
		// 	selecionarCliente.parents('tr').removeClass('selecionado');
		// }

		
	});
});