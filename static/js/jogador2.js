const vidaJogador2 = document.getElementById('vidaJogador2')
const botaoJogador2Mais1 = document.getElementById('botaoJogador2Mais1')
const botaoJogador2Menos1 = document.getElementById('botaoJogador2Menos1')
const botaoJogador2Mais5 = document.getElementById('botaoJogador2Mais5')
const botaoJogador2Menos5 = document.getElementById('botaoJogador2Menos5')
const vidaVenenoJogador2 = document.getElementById('vidaVenenoJogador2')
const botaoVenenoJogador2Mais1 = document.getElementById('botaoVenenoJogador2Mais1')
const botaoVenenoJogador2Menos1 = document.getElementById('botaoVenenoJogador2Menos1')
const botaoVenenoJogador2Mais5 = document.getElementById('botaoVenenoJogador2Mais5')
const botaoVenenoJogador2Menos5 = document.getElementById('botaoVenenoJogador2Menos5')

let vidaJogador2counter = 20;
let vidaVenenoJogador2counter = 0;

vidaJogador2.innerHTML = vidaJogador2counter;
vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;


botaoJogador2Mais1.addEventListener('click', funcaoDoJogador2Mais1);
botaoJogador2Menos1.addEventListener('click', funcaoDoJogador2Menos1);
botaoJogador2Mais5.addEventListener('click', funcaoDoJogador2Mais5);
botaoJogador2Menos5.addEventListener('click', funcaoDoJogador2Menos5);
botaoJogador2Reset.addEventListener('click', funcaoDoJogador2reset);
botaoVenenoJogador2Mais1.addEventListener('click', funcaoDoJogador2Mais1Veneno);
botaoVenenoJogador2Menos1.addEventListener('click', funcaoDoJogador2Menos1Veneno);
botaoVenenoJogador2Mais5.addEventListener('click', funcaoDoJogador2Mais5Veneno);
botaoVenenoJogador2Menos5.addEventListener('click', funcaoDoJogador2Menos5Veneno);
botaoVenenoJogador2Reset.addEventListener('click', funcaoDoJogador2VenenoReset);

function funcaoDoJogador2Mais1() {      

    vidaJogador2counter = vidaJogador2counter + 1;
    vidaJogador2.innerHTML = vidaJogador2counter;
}
function funcaoDoJogador2Menos1() {

    vidaJogador2counter = vidaJogador2counter - 1;
    vidaJogador2.innerHTML = vidaJogador2counter;

}

function funcaoDoJogador2Mais5() {      

    vidaJogador2counter = vidaJogador2counter + 5;
    vidaJogador2.innerHTML = vidaJogador2counter;
}

function funcaoDoJogador2Menos5() {

    vidaJogador2counter = vidaJogador2counter - 5;
    vidaJogador2.innerHTML = vidaJogador2counter;

}

function funcaoDoJogador2reset() {      

    vidaJogador2counter = 20;
    vidaJogador2.innerHTML = vidaJogador2counter;

}

function funcaoDoJogador2Mais1Veneno() {

    vidaVenenoJogador2counter = vidaVenenoJogador2counter + 1;
    vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;

}

function funcaoDoJogador2Menos1Veneno () {

    vidaVenenoJogador2counter = vidaVenenoJogador2counter - 1;
    vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;
    
}

function funcaoDoJogador2Mais5Veneno() {


    vidaVenenoJogador2counter = vidaVenenoJogador2counter + 5;
    vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;

}

function funcaoDoJogador2Menos5Veneno() {

    vidaVenenoJogador2counter = vidaVenenoJogador2counter - 5;
    vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;
    
}


function funcaoDoJogador2VenenoReset() {

    vidaVenenoJogador2counter = 0;
    vidaVenenoJogador2.innerHTML = vidaVenenoJogador2counter;

    
}