/*
JSON JavaScript Object Notation

Intercambio de formato de datos muy ligero
*/

let jugador = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo',
    dorsal: '07',
    goles: 0
}

let jugadorJSON = JSON.stringify(jugador);
console.log(jugadorJSON);

let nuevoJugador = JSON.parse(jugadorJSON);

// JSON en el LocalStorage 
let jugadores = [
    {
        nombre: 'Cristiano',
        apellidos: 'Ronaldo',
        dorsal: '07',
        goles: 0
    },
    {
        nombre: 'Lionel',
        apellidos: 'Messi',
        dorsal: '10',
        goles: 0
    }
];

localStorage.setItem('Jugadores', JSON.stringify(jugadores));


let nuevosJugadores = JSON.parse(localStorage.getItem('Jugadores'));
console.log('nuevosJugadores: ', nuevoJugador)