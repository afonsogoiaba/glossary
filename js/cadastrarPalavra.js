document.getElementById('cadastrarPalavra').onclick = function () {
	var word = document.querySelector("#word").value;
	var example = document.querySelector("#example").value;
	try {
		if (word == "" || word == " " || example == "" || example == " ") throw 'empty';

		let palavra = new Palavra(word, example);
		let banco = new Banco('Glossario');
		banco.inserir(palavra);

		alert('Word added successfully');

		document.getElementById('formulary').style.display = 'none';
	} catch (err) {
		alert(err);
	}
}