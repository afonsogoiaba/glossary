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
		var achei = false;
		for(var i = 0; i< this.dados.length; i++){
			if(this.dados[i].dado == dado){
				achei = true;
				alert('palavra acahda' + dado);
			}
		}
	}
}