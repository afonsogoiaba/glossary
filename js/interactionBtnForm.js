document.getElementById('form').onclick = function(){
	document.querySelector('#cap3').innerHTML = 
	`<section class="formu" id="formulary">

		<div class="explication">
			<h2>Chapter 3: now it's your turn!</h2>
			<p>Make it worth it! Show what is capable to the world and be proactive. Studies reveal that when a person explains something to another person, it ends up refining their thinking and finding easier ways to arrive at a particular answer. The fixation of content for those who share their knowledge is 80% higher in comparison to those who keep things to themselves. Enjoy, free your knowledge!</p>
		</div>
		<div class="form" id="cadastro">
			<form class="cadastro">
				<h2>Register a word!</h2>
				<div class="container-entrada">
					<label for="word">Word:</label>
					<input type="text" id="word">
				</div>

				<div class="container-entrada">
					<label	for="definicao">Definition </label>
					<input type="text" id="definition">
				</div>
				
				<div class="container-entrada">
					<label for="example">Example:</label>
					<input type="text" id="example">
				</div>

				<a id="cadastrarPalavra" href="#formulary" onclick="cadastro()">Register</a>
			</form>
		</div>

	</section>`

	var	formulary = document.querySelector("#formulary");

	formulary.style.display = 'flex';

	document.getElementById('formulary').style.height = '65vh';
	// document.getElementById('formulary').style.flexDirection = 'column';
	document.getElementById('formulary').style.justifyContent = 'center';
	document.getElementById('formulary').style.alignItems = 'center';
}	