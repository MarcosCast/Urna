let seuVotoPara = document.querySelector('.p1a span');
let cargo = document.querySelector('.p1b span');
let descricao = document.querySelector('.p1d');
let aviso = document.querySelector('.p2');
let lateral = document.querySelector('.p1-right');
let numeros = document.querySelector('.p1c');

let etapaAtual = 0;
let numero = '';


function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
           numeroHtml += '<div class="numero  pisca"></div>';
        } else {
           numeroHtml += '<div clas="numero"></div>';
        }

    }
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
    
}

function atualizarInterfazer() {
    console.log("Atualizando a Interface...");
    console.log(numero);

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
        elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizarInterfazer();
        }
    }
    
}

/*function clicou(n) {
    alert("Voce apertou o número: " +n);
}*/

function branco() {
    alert("Você apertou a tecla BRANCO!");
}

function corrige() {
    alert("Você apertou a tecla CORRIGE!");
}
function confirma() {
    alert("Você apertou a tecla CONFIRMA!");
}

comecarEtapa();