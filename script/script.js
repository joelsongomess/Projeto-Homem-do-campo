const homem = document.getElementById('homem');
const btn = document.getElementById('btnMover');

let posicao = 0;
const passo = 100;
const larguraHomem = 400;
const limite = window.innerWidth - larguraHomem - 100; // margem de segurança

btn.addEventListener('click', () => {
  if (posicao < limite) {
    posicao += passo;
    homem.style.left = posicao + 'px';
  } else {
    alert("Sucesso! O homem chegou à cidade.");
    posicao = 0;
    homem.style.left = posicao + 'px';
  }
});
