document.getElementById('form2').onclick = function(){
	document.querySelector('#cap3').innerHTML = 
	`<section class="procura" id="search">

		<div class="explication">
			<h2>Chapter 4: increase your knowledge!</h2>
					<p>Researching words that have difficulty, learning becomes easier as you begin to better understand what you are studying. Never forget, what you've learned one day will be with you forever, even after a long time.</p>
		</div>

		<div class="form" id="pesquisa">
			<form class="cadastro">
				<h2>Find a word!</h2>
				<div class="container-entrada">
					<label for="wordSearch">Word:</label>
					<input type="text" id="wordSearch" name="wordSearch">
				</div>

				<a id="pesquisarPalavra" href="#cap3" onclick="pesquisa(wordSearch.value)">Search</a>
			</form>
		</div>

		<div class="mostrador" id="mostrador" name="mostrador"></div>
		
	</section>`

	var	search = document.querySelector("#search");

	search.style.display = 'flex';

	document.getElementById('search').style.height = '65vh';
	document.getElementById('search').style.justifyContent = 'center';
	document.getElementById('search').style.alignItems = 'center';
}	
