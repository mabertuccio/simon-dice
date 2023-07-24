const $botonJugar = document.querySelector("#boton-jugar");
$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    console.log("Funciona");
}

function turnoMaquina() {
    const $cuadros = document.querySelectorAll(".cuadro");
    const $cuadroMaquina = $cuadros[Math.floor(Math.random() * $cuadros.length)];
}
