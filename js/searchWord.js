document.querySelector('#pesquisarPalavra').onclick = function (palavra) {
	var word = document.querySelector('#wordSearch').value;
	if (word != "") {
		let banco = new Banco('Glossario');
		banco.buscar(word);
	}

}