function cadastrarPalavra () {
	var word = document.querySelector("#word").value;
	var definition = document.querySelector('#definicao').value;
	var example = document.querySelector("#example").value;
	try {
		if (word == "" || word == " " || definition == "" || definition == " " || example == "" || example == " ") throw 'empty';

		let palavra = new Palavra(word, definition, example);
		let banco = new Banco('Glossario');
		banco.inserir(palavra);

		alert('Word added successfully');

		document.getElementById('cap3').innerHTML = '';
	} catch (err) {
		alert(err);
	}

	alert('funciona ....................');
}