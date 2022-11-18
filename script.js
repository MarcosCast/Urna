let seuVotoPara = document.querySelector('.p1a span');
let cargo = document.querySelector('.p1b span');
let descricao = document.querySelector('.p1d');
let aviso = document.querySelector('.p2');
let lateral = document.querySelector('.p1-right');
let numeros = document.querySelector('.p1c');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
           numeroHtml += '<div class="numero pisca"></div>';
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
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome:  ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotosHtml = '';
        for(let i in candidato.fotos) {
            if(candidato.fotos[i].samll){
                fotosHtml = `<div class="p1-image small"><img src="images/${candidato.foto[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHtml = `<div class="p1-image"><img src="images/${candidato.foto[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
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
    if(numero === ''){
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';    
        lateral.innerHTML = '';    
    };
}

function corrige() {
    comecarEtapa();
}
function confirma() {
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if(votoBranco === true) {
        votoConfirmado = true;
        console.log("Confirmando em BRANCO...");
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true;
        console.log("Confirmando como "+numero);
    }

    if(votoConfirmado) {
        etapa++;
        if(etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        }else {
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
        }
    }
}

comecarEtapa();