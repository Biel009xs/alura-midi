// Pom -----------------------------------------
function tocaSomPom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;
