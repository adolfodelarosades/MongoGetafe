/*
OBJETOS

4 MANERAS DE CREAR OBJETOS

1. MEDIANTE UN LITERAL DE OBJETO

{
    propiedad1: valor,
    propiedad2: valor,

    ....
    metodo() {

    }
    ....
}

Puedo añadir propiedades a posteriori

2. Mediante new Object

3. Mediante función Constructora

function Identificador (parámetros) {
    código para intanciar el objeto con this
}


4. MEDIANTE CLASES (ECMAScript 5)
*/



// FORMA 1
let jugador1 = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Dos Santos Aveiro',
    dorsal: 7,
    goles: 0,
    equipos: [
        {
            nombre: 'Real Madrid',
            ciudad: 'Madrid'
        },
        {
            nombre: 'Manchester United',
            ciudad: 'Manchester'
        }
    ],
    marcarGol() {
        this.goles++;
    }
}

// Acceso con notación de punto
console.log(jugador1.nombre);
jugador1.dorsal = 9;
jugador1.marcarGol();
jugador1.balonesOro = 5;

console.log(jugador1);
console.log('Jugador 1', jugador1);

// 2 OPCION
let jugador2 = new Object();
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = 10;
jugador2.goles = 0;
jugador2.marcarGol = function() {  //AQUI NO ACEPTA FUNCIONES DE FLECHA
    this.goles++;
}
jugador2.restaGol = function() { return --this.goles};

console.log('*'.repeat(10));
jugador2.marcarGol();
console.log(jugador2.goles);
jugador2.restaGol();
console.log(jugador2.goles);
console.log('*'.repeat(10));

// 3. Mediante función Constructora
function Jugador(nombre, apellidos, dorsal, goles){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;

    this.marcarGol = function() {
        this.goles++;
        alert('¡Gol de ' + this.nombre + ' ' + this.apellidos + '!');
    }
}


let jugador3 = new Jugador('Sergio', 'Ramos', 4, 0);
let jugador4 = new Jugador('Julio', 'Iglesias', 1, 0);

console.log(jugador3);
jugador3.marcarGol();
console.log(jugador3);


// 4. MEDIANTE CLASES (ECMAScript 5)

class Vehiculo {
    marca;
    modelo;
    color;
    stock = 10;

    constructor(marca = 'Renault', modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;

        // "Propiedad" privada
        let precio;
        this.getPrecio = () => precio;
        this.setPrecio = valor => precio = valor;
    }

    ventaVehiculo() {
        this.stock--;
    }

    cambioColor(color) {
        this.color = color;
    }
}

let vehiculo1 = new Vehiculo(undefined, 'Megane', 'Gris');
let vehiculo2 = new Vehiculo('Ford', 'Megane', undefined);

vehiculo1.cambioColor('Verde');
vehiculo1.setPrecio(15000);


console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo1.getPrecio());

