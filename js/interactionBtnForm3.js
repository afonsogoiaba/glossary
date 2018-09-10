document.getElementById('form3').onclick = function(){
  let banco = new Banco('Glossario');
  document.querySelector('#cap3').innerHTML = '<section id="lista"></section>';
  banco.listAll();
}	