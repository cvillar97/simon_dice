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

    })
}

function resaltarColor(color) {
    color.style.opacity = 1
    setTimeout(function () {
        color.style.opacity = 0.5
    }, 500)
}

function bloquearInputUsuario() {
    document.querySelectorAll(".colores").onclick = function () {

    }
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
