document.getElementById('form3').onclick = function(){
  let banco = new Banco('Glossario');
  document.querySelector('#cap3').innerHTML = 

  '<section id="lista" class="lista">'+
  	'<h2>see a world of words!</h2>'+
  '</section>';
  banco.listAll();
}	