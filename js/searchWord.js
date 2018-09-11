function pesquisa(word){
	if (word != "" && word != " ") {
		let banco = new Banco('Glossario');
		banco.buscar(word);
	}
}