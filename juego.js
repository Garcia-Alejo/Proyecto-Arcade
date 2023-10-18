const tablero = document.querySelector(".tablero");
let foodX, foodY;
let snakeX = 5, snakeY=7;

const lugarComida = () => {
    foodX=Math.floor(Math.random()*30) + 1;
    foodY=Math.floor(Math.random()*30) + 1;
}


const iniciarJuego = () => {
    let htmlMarkUp = `<div class ="comida" style="grid-area: ${foodY} / ${foodX }"> </div>`;
    htmlMarkUp += `<div class ="vibora" style="grid-area: ${snakeY} / ${snakeX }"> </div>`;
    tablero.innerHTML = htmlMarkUp;
} 
lugarComida();
iniciarJuego();