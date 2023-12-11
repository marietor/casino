let jugador = 'X';
let juego = true;
const casilla = ['', '', '', '', '', '', '', '', ''];
const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ganador() {
    for (let i = 0; i < combinaciones.length; i++) {
        const [a, b, c] = combinaciones[i];
        if (casilla[a] && casilla[a] === casilla[b] && casilla[a] === casilla[c]) {
            juego = false;
            return casilla[a];
        }
    }
    return null;
}

function perdedor(index) {
    if (juego && casilla[index] === '') {
        casilla[index] = jugador;
        document.getElementsByClassName('celda')[index].innerText = jugador;
        const ganar = ganador();
        if (ganar) {
            document.getElementById('mensaje').innerText = `Ganaste ${ganar} la partida!`;
            juego = false;
        } else if (!casilla.includes('')) {
            document.getElementById('mensaje').innerText = "Empate!";
        } else {
            jugador = jugador === 'X' ? 'O' : 'X';
            document.getElementById('mensaje').innerText = `Turno del jugador ${jugador}`;
         
        }
    }
}