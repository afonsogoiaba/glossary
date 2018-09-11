class Banco{
	constructor(banco){
		this.nomeBanco = banco
		this.dados = JSON.parse(localStorage.getItem(this.nomeBanco)) || [];
	}

	inserir(obj){
		this.dados.push(obj);
		localStorage.setItem(this.nomeBanco,  JSON.stringify(this.dados));
	}

	buscar(dado){
		this.dados = JSON.parse(localStorage.getItem(this.nomeBanco));
		for(var i = 0; i< this.dados.length; i++){
			if(this.dados[i].palavra == dado){
				alert(dado)
				let mostrador = document.querySelector('#mostrador')
				mostrador.innerHTML = `
					<h2>${this.dados[i].palavra}</h2>
					<p>${this.dados[i].definicao}</p>
					<h3><i>${this.dados[i].exemplo}</i></h3>`
			}
		}
	}

	// buscar(palavra){
	// 	this.dados.forEach(function (palavra){
	// 		var mostrador = document.querySelector("#mostrador");
	// 		mostrador.innerHTML = `
	// 			<h2>${palavra.palavra}</h2>
	// 			<p>${palavra.definicao}</p>
	// 			<h3><i>${palavra.exemplo}</i></h3>`
	// 	});
	// }

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