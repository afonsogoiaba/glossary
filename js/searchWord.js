function pesquisa(){
	var word = document.querySelector('#wordSearch').value;
	if (word != "" && word != " ") {
		let banco = new Banco('Glossario');
		banco.buscar(word);
	}
}