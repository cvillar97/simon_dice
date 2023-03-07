let secuenciaMaquina = []
let secuenciaUsuario = []
let ronda = 0

const botonJugar = document.querySelector("#jugar")

botonJugar.onclick = function () {
    reiniciarJuego()
    


}

function manejarRonda() {
   
    actualizarNumeroRonda()
    actualizarEstadoDeJuego("Turno máquina")
    bloquearInputUsuario()
   
    secuenciaMaquina.push(obtenerColorRandom)

    secuenciaMaquina.forEach(function(color){
        
    })
}

function bloquearInputUsuario() {
    document.querySelectorAll(".colores").onclick = function(){
        
    }
}

function obtenerColorRandom(){
    let colores = document.querySelectorAll(".colores")
    return colores[obtenerNumeroRandom()]
}

function obtenerNumeroRandom(){
    let numeroRandom = Math.floor(Math.random() * 4)
    return numeroRandom
}

function actualizarNumeroRonda(){
    ronda++
    let numeroRonda = document.querySelector("numero-ronda").textContent
    numeroRonda = ronda
}

function actualizarEstadoDeJuego(estado){
    let estadoDeJuego = document.querySelector("turno").textContent
    estadoDeJuego = estado
}

function reiniciarJuego() {
    secuenciaMaquina = []
    secuenciaUsuario = []
    ronda = 0

    document.querySelector("#numero-ronda").textContent = "-"
    document.querySelector("#turno").textContent = "Turno -"
}
