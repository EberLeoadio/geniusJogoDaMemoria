let ordem = [];
let clickOrdem = [];
let score = 0;

// 0 == verde
// 1 == vermelho
// 2 == amarelo
// 3 == azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

//cria ordem aleatoria de cores
let sorteioOrdem = () => {
    let corOrdem = Math.floor(Math.random() * 4);
    ordem[ordem.length] = corOrdem;
    clickOrdem = [];

    for(let i in ordem){
        let elementoCor = createColorElement(ordem[i]);
        lightColor(elementoCor, Number(i) + 1);
    }
}

//acende a proxima color
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 400);
    // clearInterval;
    setTimeout(() => {
        element.classList.remove('selected');
    }, number );
}

//checa se os botoes clicados sao os mesmos gerado na ordem do jogo
let checkOrdem = () => {
    for(let i in clickOrdem){
        if(clickOrdem[i] != ordem[i]){
            gameOver();
            break;
        }
    }
    if(clickOrdem.length == ordem.length){
        alert(`Pontuação: ${score}\nVocê acertou! Próximo nível`);
        nextLevel();
    }
}

//funcao para o click do usuario
let click = (color) =>{
    clickOrdem[clickOrdem.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrdem();
    }, 250);
}

//funcao retorna color
let createColorElement = (color) => {
    if(color == 0){
        return verde;
    }else if(color == 1){
        return vermelho;
    }else if(color == 2){
        return amarelo;
    }else if(color == 3){
        return azul;
    }
}

//funcao para o proximo nivel do jogo

let nextLevel = () => {
    score++;
    sorteioOrdem();
}

//funcao para GameOver
let gameOver = () => {
    alert(`Pontuação: ${score}!!!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo!`);
    ordem = [];
    clickOrdem = [];

    playGame();
}

//funcao para iniciar o jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo Jogo!`);
    score = 0;

    nextLevel();
}

//eventos de click
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

//inicio game
playGame();