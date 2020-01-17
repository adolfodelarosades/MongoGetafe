/*
FUNCIONES
Como JS no tiene tipado la función tampo se Tipa
function nombreFuncion (paramétros) {
    código que ejecuta la función
    return valorDeRetorno
}

Sintaxis de invocación
nombreFuncion(argumentos);


FUNCIONES ANÓNIMAS

let cuadrado = function(a) {
    return a * a;
}

FUNCIONES FLECHA

let cubo = (paramétros) => { return a * a; }

let cubo = (a) => { return a * a * a; }
let cubo2 = a => a * a * a;
()=>{console.log('Hola Mundo a los 2 segundos');}


CALLBACK
Función que define como argumento otra función


AMBITOS

Ámbito de las variables declaradas con VAR es el de la función más próxima

Ámbito de las variables declaradas con LET es el del bloque de código más próximo

Ámbito Global

*/

function suma(a, b) {
    console.log( a + b );
}

function multiplicacion( a, b) {
    let c = a * b;
    return c;
    //return a * b;
}

suma(3,5);
let resultado = multiplicacion(2, 5);
console.log(resultado);

let cuadrado = function(a) {
    return a * a;
}

console.log(cuadrado(5));

let cubo = (a) => { return a * a * a; }
console.log(cubo(5));

let cubo2 = a => a * a * a;
console.log(cubo2(10));

setTimeout(()=>{
    console.log('Hola Mundo a los 2 segundos');
}, 2000);


// CALLBACKS
let seconds = 10;
function countDown(onTimeChanged) { //onTimeChanged es el callback
    setInterval(()=>{
        if ( seconds > 0 ) {
            --seconds;
            onTimeChanged();
        }
    }, 1000); 
}

function showSecond() {
    console.log(seconds);
}

function mostrarSegundos() {
    console.log( '-' + seconds);
}

countDown(showSecond);
countDown(mostrarSegundos);


//Ámbitos var
function mayorEdad(edad) {
    if( edad >= 18){
        var adulto = true;
    }else{
        var adulto = false;
    }
    console.log('ADULTO', adulto);
}
mayorEdad(40);
//console.log(adulto); //ESTO DA ERROR

//Ámbito let
function setPuntuacion(puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;        
    }else {
        let apto = false;
    }
    console.log(apto);
}
// setPuntuacion(3); // DA UN ERROR

// Ámbito global
function triangulo(a, b) {
    area = 0.5 * a * b;
}

triangulo(2,4);
console.log(area);


