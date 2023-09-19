// Pom -----------------------------------------
function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;
