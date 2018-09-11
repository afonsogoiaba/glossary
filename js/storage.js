class Banco{
	constructor(banco){
		this.nomeBanco = banco
		this.dados = JSON.parse(localStorage.getItem(this.nomeBanco)) || [];
	}

	inserir(obj){
		this.dados.push(obj);
		localStorage.setItem(this.nomeBanco,  JSON.stringify(this.dados));
	}

	// buscar(dado){
	// 	this.dados = JSON.parse(localStorage.getItem(this.nomeBanco));
	// 	var achei = false;
	// 	for(var i = 0; i< this.dados.length; i++){
	// 		if(this.dados[i].dado == dado){
	// 			achei = true;
	// 			alert('palavra achada' + dado);
	// 		}
	// 	}
	// }

	buscar(palavra){
		this.dados.forEach(function (palavra){
			var mostrador = document.querySelector("#mostrador");
			mostrador.innerHTML = `
				<h2>${palavra.palavra}</h2>
				<p>${palavra.definicao}</p>
				<h3><i>${palavra.exemplo}</i></h3>`
		});
	}

	listAll () {
		this.dados.forEach(function (palavra) {
			var lista = document.querySelector('#lista');

			lista.innerHTML += `
				<div class="listItem">
					<h2>${palavra.palavra}</h2>
					<p>${palavra.definicao}</p>
					<h3><i>${palavra.exemplo}</i></h3>
				</div>`;
		});
	}
}