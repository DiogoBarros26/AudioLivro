const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoAnteriorCapitulo = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1


function tocarFaixa() { 
    audio.play(); 
    taTocando = true;
    console.log("Deu Play!");
    botaoPlayPause.classList.add("tocando");
}

function pausarFaixa(){
    audio.pause();
    taTocando = false;
    console.log("Deu Pause");
    botaoPlayPause.classList.remove("tocando");
}

function tocarOuParar(){
    if (taTocando === true){
        pausarFaixa();
    } else{tocarFaixa(); }
}

function ProximoCapitulo(){
    pausarFaixa();
    if (capituloAtual < qtdCapitulos ){
        capituloAtual = capituloAtual + 1;}
        else{
            capituloAtual = 1;
        }
        audio.src = "./audios/"+capituloAtual + ".mp3"
        textoCapitulo.innerText = "capitulo " + capituloAtual

    }

function AnteriorCapitulo(){
    pausarFaixa();
   if( capituloAtual === 1){
    capituloAtual = qtdCapitulos;
   } else {
    capituloAtual = capituloAtual - 1;
   }
   audio.src = "./audios/"+capituloAtual + ".mp3"
   textoCapitulo.innerText = "capitulo " + capituloAtual
}

botaoPlayPause.addEventListener("click", tocarOuParar);
botaoProximoCapitulo.addEventListener("click", ProximoCapitulo);
botaoAnteriorCapitulo.addEventListener("click", AnteriorCapitulo);