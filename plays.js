// variables
let comp = ["rock", "paper", "scissors"];
let Player;
let cs;
let container= document.querySelector('.container');

// funcion que genera la jugada de la computadora
function computerPlay() {
    let play = Math.floor(Math.random()*3);
    cs= comp[play];
    return cs;
}

// funcion que hace la ronda
function roundPlay (ps , coms) {
    
    if (ps == comp[0] && coms == comp[2]){
        dysplay(1);
    } else if(ps == comp[0] && coms == comp[1]){
        dysplay(0);
    } 
    else if(ps == comp[1] && coms == comp[0]){
        dysplay(1);
    } else if (ps == comp[1] && coms == comp[2]){
        dysplay(0);
    } else if(ps == comp[2] && coms == comp[1]){
        dysplay(1);
    } else if (ps == comp[2] && coms == comp[0]){
        dysplay(0);
    } else if (ps == coms) {
        dysplay(2);
    }
}

// input de los botones
let btn1 = document.querySelector('.button1');
btn1.addEventListener('click', function () { roundPlay(comp[0], computerPlay())} );

let btn2 = document.querySelector('.button2');
btn2.addEventListener('click', function () { roundPlay(comp[1], computerPlay())} );


let btn3 = document.querySelector('.button3');
btn3.addEventListener('click', function () { roundPlay(comp[2], computerPlay())} );


// mensaje de resultado en blanco
let div = document.createElement('div');
container.appendChild(div);
// funcion que cambia el resultado
function dysplay(num){

        if (num==1){
            div.innerHTML = '<h1>GANASTE</h1>';
        } else if (num==0){
            div.innerHTML = '<h1>PERDISTE</h1>';
        } else {
            div.innerHTML='<h1>EMPATE</h1>';
        }
    

}






