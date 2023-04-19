let secuenciaMaquina = []
let secuenciaUsuario = []
let ronda = 0

const botonJugar = document.querySelector("#jugar")

botonJugar.onclick = function () {
    reiniciarJuego()
    manejarRonda()


}

function manejarRonda() {

    actualizarNumeroRonda()
    actualizarEstadoDeJuego("Turno máquina")
    bloquearInputUsuario()
    let nuevoColor = obtenerColorRandom()

    secuenciaMaquina.push(nuevoColor)

    let RETRASO_MS_MAQUINA = (secuenciaMaquina.length + 1) * 1000

    setTimeout(function () {
        actualizarEstadoDeJuego("Turno jugador")
        desbloquearInputUsuario()

    }, RETRASO_MS_MAQUINA)

    secuenciaMaquina.forEach(function (color, index) {
        let RETRASO_MS_COLOR = (index + 1) * 1000
        setTimeout(function () {
            resaltarColor(color)
        }, RETRASO_MS_COLOR)

    })
}

function desbloquearInputUsuario() {
    document.querySelectorAll(".colores").forEach(function ($color) {
        $color.onclick = manejarInputUsuario
    })
}

function manejarInputUsuario(e) {

    let $color = e.target
    resaltarColor($color)
    secuenciaUsuario.push($color)

    let $colorMaquina = secuenciaMaquina[secuenciaUsuario.length - 1]

    if ($color === $colorMaquina && secuenciaUsuario.length !== secuenciaMaquina.length) {
        desbloquearInputUsuario()
    } else if($color === $colorMaquina && secuenciaMaquina.length === secuenciaUsuario.length){
        setTimeout(function(){
            manejarRonda()
            secuenciaUsuario = []
        }, 1000) 
    } else if ($color !== $colorMaquina){
        setTimeout(function(){
            reiniciarJuego()
        }, 1000) 
    }

}

function resaltarColor(color) {
    color.style.opacity = 1
    setTimeout(function () {
        color.style.opacity = 0.5
    }, 500)
}

function bloquearInputUsuario() {
    document.querySelectorAll(".colores").forEach(function(color){
        onclick = function () {
    }
    })
}

function obtenerColorRandom() {
    let colores = document.querySelectorAll(".colores")
    return colores[obtenerNumeroRandom()]
}

function obtenerNumeroRandom() {
    let numeroRandom = Math.floor(Math.random() * 4)
    return numeroRandom
}

function actualizarNumeroRonda() {
    ronda++
    let numeroRonda = document.querySelector("#numero-ronda")
    numeroRonda.textContent = ronda

}

function actualizarEstadoDeJuego(estado) {
    let estadoDeJuego = document.querySelector("#turno")
    estadoDeJuego.textContent = estado
}

function reiniciarJuego() {
    secuenciaMaquina = []
    secuenciaUsuario = []
    ronda = 0

    document.querySelector("#numero-ronda").textContent = "-"
    document.querySelector("#turno").textContent = "Turno -"
}
