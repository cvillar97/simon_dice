let secuenciaMaquina = []
let secuenciaUsuario = []
let ronda = 0

const botonJugar = document.querySelector("jugar")

botonJugar.onclick = function () {

}

function actualizarNumeroRonda(ronda){
    ronda++
    let numeroRonda = document.querySelector("numero-ronda").textContent
    numeroRonda = ronda
}