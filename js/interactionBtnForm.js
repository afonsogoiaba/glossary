var	formulary = document.querySelector("#formulary");

document.getElementById('formulary').style.display = 'none';

document.getElementById('form').onclick = function(){
	formulary.style.display = 'flex';

	document.getElementById('formulary').style.height = '65vh';
	// document.getElementById('formulary').style.flexDirection = 'column';
	document.getElementById('formulary').style.justifyContent = 'center';
	document.getElementById('formulary').style.alignItems = 'center';
}	