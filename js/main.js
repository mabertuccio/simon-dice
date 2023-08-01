const secuenciaMaquina = [];
let retrasoMaquina = 1000;

const secuenciaUsuario = [];
let retrasoUsuario = 0;

const $botonJugar = document.querySelector("#boton-jugar");
$botonJugar.onclick = comenzarJuego;

function comenzarJuego() {
    secuenciaMaquina.length = 0;
    secuenciaUsuario.length = 0;
    retrasoMaquina = 1000;
    retrasoUsuario = 0;
    
    turnoMaquina();
}

function turnoMaquina() {
    deshabilitarInputUsuario();

    const $cuadros = document.querySelectorAll(".cuadro");
    const $cuadroMaquina = $cuadros[Math.floor(Math.random() * $cuadros.length)];
    secuenciaMaquina.push($cuadroMaquina);

    for (let i = 0; i < secuenciaMaquina.length; i++) {
        setTimeout(() => {
            iluminarCuadro(secuenciaMaquina[i]);
        }, retrasoMaquina + i * 1000);

        
    }

    setTimeout(() => {
        habilitarInputUsuario();
    }, retrasoMaquina + secuenciaMaquina.length * 500);
}

function iluminarCuadro($cuadro) {
    $cuadro.style.opacity = 0.5;

    setTimeout(() => {
        $cuadro.style.opacity = 1;
    }, 500);
}

function habilitarInputUsuario() {
    const $cuadros = document.querySelectorAll(".cuadro");

    $cuadros.forEach($cuadro => {
        $cuadro.addEventListener("click", manejarInputUsuario);
    });
}

function deshabilitarInputUsuario() {
    const $cuadros = document.querySelectorAll(".cuadro");

    $cuadros.forEach($cuadro => {
        $cuadro.removeEventListener("click", manejarInputUsuario);
    });
}

function manejarInputUsuario(e) {
    const $cuadroUsuario = e.target;
    secuenciaUsuario.push($cuadroUsuario);

    iluminarCuadro($cuadroUsuario);

    const indice = secuenciaUsuario.length - 1;
    if (secuenciaUsuario[indice] !== secuenciaMaquina[indice]) {
        alert("Perdiste!");
    } else {
        if (secuenciaUsuario.length === secuenciaMaquina.length) {
            retrasoUsuario = 0;
            secuenciaUsuario.length = 0;
            turnoMaquina();
        }
    }
}
