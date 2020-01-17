/* ESTRUCTURAS CONDICIONALES

IF

if(condicion){
    // código a ejecutar si cumple
}

IF - ELSE

if(condicion){
    // código a ejecutar si se cumple
}else {
    // código a ejecutar si no se cumple
}

IF - ELSE - IF

if(condicion){
    // código a ejecutar si se cumple
else if(condicion){
    // código a ejecutar si se cumple
}else{
    // código a ejecutar si no se cumple
}

SWITCH 
Evalua una expresión que regresa un valor y dependiendo de ese valor hace algo.

switch(expresion){
    case caso-1:
        código a ejecutar
        break;
    case caso-2:
        código a ejecutar
        break;
    ...
    case caso-n:
        código a ejecutar
        break;
    default 
        código en caso de no coincidencia
}


FOR

for( valor inicial; condición; actualización){
   código a ejecutar mientras se cumpla la condición
}

WHILE

while (condicion){
    código a ejecutar mientras se cumpla la condición
}

DO - WHILE

do {
    código a ejecutar mientras se cumpla la condición
}while (condicion)


TRY - CATCH    Manejo de Excepciones
try {
    Código a ejecutar
} catch (error) {
    Si el código anterior tiene errores
} finally{
    opcional
}

*/



let nombre = 'Laura';
let edad = 20;
let mayorEdad;

if(edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

let a = 10;
let b = 20;

if (a > b) {
    console.log(' a > b');
} else {
    console.log(' a <= b');
}

let diaSemana = 2;

switch (diaSemana) {
    case 1, 2, 3:
        console.log("Es 1 ó 2");
        break;

    default:
        console.log("NADA");
        break;
}

let mes = 1;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Invierno");        
        break;
    case 4:
    case 5:
    case 6:
        console.log("Primavera");        
        break;
    default:
        break;
}

for (let i=0; i < 10; i++){ // El let es para delimitar el ambito de i dentro del for.
    console.log(i);
}
// console.log(i);

let password;

// while(password !== '1234'){
//     password = prompt('Escriba su contraseña');

//     console.log(typeof password);
// }

// do {
//     password = prompt('Escriba su contraseña');

//     console.log(typeof password);
// }while(password !== '1234')

let foo;

try {
    foo = Number(datePlayer);
    foo = 10;                   // Esta línea ya no se ejecuta por que en la anterior
                                // hay un error
} catch(err){
    console.error('Error' + err)
}
console.log(foo); // Undefined



