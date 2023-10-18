const cuadrados = document.querySelectorAll('.cuadrado')
const topo = document.querySelector('.topo')
const tiempoRestante = document.querySelector('#tiempo-restante')
const puntos = document.querySelector('#puntos')

let resultado = 0
let posicionGolpe
let tiempo = 30
let timerId = null
let estadoJuego="PAUSA";

function cuadradoAleatorio() {
  cuadrados.forEach(cuadrado => {
    cuadrado.classList.remove('topo')
  })

  let cuadradoAleatorio = cuadrados[Math.floor(Math.random() * 9)]
  cuadradoAleatorio.classList.add('topo')

  posicionGolpe = cuadradoAleatorio.id
}

cuadrados.forEach(cuadrado => {
  cuadrado.addEventListener('click', () => {
    if (cuadrado.id == posicionGolpe) {
      resultado++
      puntos.textContent = resultado
      posicionGolpe = null
    }
  })
})



function moverTopo() {
    cuadradoAleatorio();
    timerId = setInterval(cuadradoAleatorio, 500);
    estadoJuego="PLAY"
}

moverTopo();


function cuentaAtras() {
    if(estadoJuego=="PLAY"){
        tiempo--
    }
        tiempoRestante.textContent = tiempo

        if (tiempo == 0) {
            clearInterval(cuentaAtras)
            clearInterval(timerId)
            alert('GAME OVER! Tu puntuación final fue de: ' + resultado)
            estadoJuego="PAUSA";
        }
}

let cuentaAtrasTimerId = setInterval(cuentaAtras, 1000)
