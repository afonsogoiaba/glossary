function searchWord (palavra) {
	var word = document.querySelector('#wordSearch').value;
	if (word != "" && word != " ") {
		let banco = new Banco('Glossario');
		banco.buscar(word);

		alert('word '+ word +' finded sucessfully');
	}

}