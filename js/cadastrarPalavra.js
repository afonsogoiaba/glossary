function cadastro(){
	var word = document.querySelector("#word").value;
	var definition = document.querySelector("#definition").value;
	var example = document.querySelector("#example").value;
	try {
		if (word == "" || word == " " || definition == "" || definition == " " || example == "" || example == " ") throw 'empty';

		let palavra = new Palavra(word, definition, example);
		let banco = new Banco('Glossario');
		banco.inserir(palavra);

		alert('Word added successfully');

		limpar();
	} catch (err) {
		alert(err);
	}
}