var	search = document.querySelector("#search");

document.getElementById('search').style.display = 'none';

document.getElementById('form2').onclick = function(){
	search.style.display = 'flex';

	document.getElementById('search').style.height = '65vh';
	// document.getElementById('search').style.flexDirection = 'column';
	document.getElementById('search').style.justifyContent = 'center';
	document.getElementById('search').style.alignItems = 'center';
}	