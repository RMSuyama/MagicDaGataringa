const vidaJogador1 = document.getElementById('vidaJogador1')
const botaoJogador1Mais1 = document.getElementById('botaoJogador1Mais1')
const botaoJogador1Menos1 = document.getElementById('botaoJogador1Menos1')
const botaoJogador1Mais5 = document.getElementById('botaoJogador1Mais5')
const botaoJogador1Menos5 = document.getElementById('botaoJogador1Menos5')
const vidaVenenoJogador1 = document.getElementById('vidaVenenoJogador1')
const botaoVenenoJogador1Mais1 = document.getElementById('botaoVenenoJogador1Mais1')
const botaoVenenoJogador1Menos1 = document.getElementById('botaoVenenoJogador1Menos1')
const botaoVenenoJogador1Mais5 = document.getElementById('botaoVenenoJogador1Mais5')
const botaoVenenoJogador1Menos5 = document.getElementById('botaoVenenoJogador1Menos5')

let vidaJogador1counter = 20;
let vidaVenenoJogador1counter = 0;

vidaJogador1.innerHTML = vidaJogador1counter;
vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;


botaoJogador1Mais1.addEventListener('click', funcaoDoJogador1Mais1);
botaoJogador1Menos1.addEventListener('click', funcaoDoJogador1Menos1);
botaoJogador1Reset.addEventListener('click', funcaoDoJogador1Reset);
botaoVenenoJogador1Mais1.addEventListener('click', funcaoDoJogador1Mais1Veneno);
botaoVenenoJogador1Menos1.addEventListener('click', funcaoDoJogador1Menos1Veneno);
botaoVenenoJogador1Reset.addEventListener('click', funcaoDoJogador1VenenoReset);

botaoJogador1Mais5.addEventListener('click', funcaoDoJogador1Mais5);
botaoJogador1Menos5.addEventListener('click', funcaoDoJogador1Menos5);
botaoVenenoJogador1Mais5.addEventListener('click', funcaoDoJogador1Mais5Veneno);
botaoVenenoJogador1Menos5.addEventListener('click', funcaoDoJogador1Menos5Veneno);


function funcaoDoJogador1Mais1() {      

    vidaJogador1counter = vidaJogador1counter + 1;
    vidaJogador1.innerHTML = vidaJogador1counter;
}   

function funcaoDoJogador1Menos1() {

    vidaJogador1counter = vidaJogador1counter - 1;
    vidaJogador1.innerHTML = vidaJogador1counter;

}

function funcaoDoJogador1Reset() {      

    vidaJogador1counter = 20;
    vidaJogador1.innerHTML = vidaJogador1counter;

}

function funcaoDoJogador1Mais1Veneno() {


    vidaVenenoJogador1counter = vidaVenenoJogador1counter + 1;
    vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;

}

function funcaoDoJogador1Menos1Veneno () {

    vidaVenenoJogador1counter = vidaVenenoJogador1counter - 1;
    vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;
    
}

function funcaoDoJogador1VenenoReset () {

    vidaVenenoJogador1counter = 0;
    vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;

    
}

function funcaoDoJogador1Mais5() {      

    vidaJogador1counter = vidaJogador1counter + 5;
    vidaJogador1.innerHTML = vidaJogador1counter;
}   

function funcaoDoJogador1Menos5() {

    vidaJogador1counter = vidaJogador1counter - 5;
    vidaJogador1.innerHTML = vidaJogador1counter;

}

function funcaoDoJogador1Mais5Veneno() {


    vidaVenenoJogador1counter = vidaVenenoJogador1counter + 5;
    vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;

}

function funcaoDoJogador1Menos5Veneno () {

    vidaVenenoJogador1counter = vidaVenenoJogador1counter - 5;
    vidaVenenoJogador1.innerHTML = vidaVenenoJogador1counter;
    
}