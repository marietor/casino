
let apuesta = document.getElementById("numero")
let resultado = document.getElementById("resultado")

function apostar() {
    resultado.innerHTML = "";
        
    if (isNaN(apuesta.value) || 
    apuesta.value < 1 || apuesta.value > 6) {
        alert("Ingrese una apuesta valida ");
        resetear();
        apuesta.focus();
        return;
    }

    dados = Math.floor(Math.random() * 6) + 1;
    if (apuesta.value == dados) {
        resultado.innerHTML = `Ganaste!!!!!`

    }
    else {
        resultado.innerHTML = `Perdiste, el numero ganador fue ${dados}`

    }
}

function resetear() {
    apuesta.value = ""
    resultado.innerHTML = `resultado`
    apuesta.focus();
}

apuesta.focus();