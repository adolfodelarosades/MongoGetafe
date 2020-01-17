/*
* STRINGS
* TEMPALTE LITERALS
Escribir cadenas multilíneas sin secuencias de escape y permitiendo interpolación de variables y constantes

let identificador = `
    caracteres ... ${variables}
`
* NUMBERS

* FECHAS
 new Date(año, mes, dia, hora, minuto, segundos, milisegundos)
 new Date(milisegundos) referenciados a Epoch (01/01/1970)
 new Date(fecha-string)


* ARRAYS



*/
console.warn('*'.repeat(40) + 'Strings' + '*'.repeat(40));
// Strings
let nombre = 'Juan';
console.log('Nombre ', nombre);
console.log('Longitud: ', nombre.length);
console.log('Lower: ', nombre.toLowerCase);
console.log('Upper: ', nombre.toUpperCase);
console.log('Posición 2: ', nombre.charAt(2));
console.log('indexOf de n: ', nombre.indexOf('n') );
console.log('indexOf de k: ', nombre.indexOf('k') );


nombre = 'Amanda';
console.log('Nombre: ', nombre);
console.log('lastIndex a: ', nombre.lastIndexOf('a'));
console.log('includes: ', nombre.includes('x'));
console.log('startsWith a: ', nombre.startsWith('a'));
console.log('endsWith a: ', nombre.endsWith('a'));

let apellidos = 'Perez';

console.log('concat: ', nombre.concat(' ' + apellidos) );

let frase = '     En un lugar    de La Mancha ....     ';
console.log('trim: ', frase.trim());
console.log('repeat: ', '*'.repeat(80));

let cadena = '012345abcde';
console.log('cadena: ', cadena );
console.log('slice 2-5: ', cadena.slice(2,5)); // 234 El segundo parámetro sin incluir
console.log('slice -2: ', cadena.slice(-2));   // Dos últimos

console.warn('*'.repeat(40) + 'Template Literal' + '*'.repeat(40));

// TEMPALTE LITERALS
console.log('Template Literal: ', `El jugador es ${nombre} ${apellidos} tiene ${ 2020 - 1985 } años.
Originario de Madrid`);

console.warn('*'.repeat(40) + 'Numbers' + '*'.repeat(40));

// Numbers
let resultado = '9.7';
console.log('resultado: ', resultado );
console.log('parseInt: ',  parseInt(resultado));
console.log('parseFloat: ',  parseFloat(resultado));
console.log('Number: ',  Number(resultado));
console.log('Number.isInteger: ',  Number.isInteger(resultado));
console.log('isNaN', isNaN(nombre)); // La función isNaN() determina cuando el valor es NaN o no. 

let puntuacion = 9;
console.log('puntuacion: ', 9 );
console.log('toString: ', puntuacion.toString());

let puntuacion2 = 2.6;
console.log('round: ', Math.round(puntuacion2));
console.log('ceil: ',Math.ceil(puntuacion2));
console.log('floor: ',Math.floor(puntuacion2));

console.warn('*'.repeat(40) + 'Fechas' + '*'.repeat(40));

console.log('new Date(): ' , new Date());
console.log('new Date(73, 11, 18): ' , new Date(73, 11, 18)); // Los meses empiezan en 0 (0-11)
console.log('new Date(2001, 11, 2018): ' , new Date(2001, 11, 20));
console.log('new Date("2001-01-20"): ' , new Date('2001-01-20'));
let hoy = new Date();

console.log('hoy.getFullYear(): ', hoy.getFullYear() );
console.log('hoy.getMonth(): ', hoy.getMonth() );

let meses = ['E', 'F', 'M', 'A', 'My', 'J', 'Jl', 'Ag', 'S', 'O', 'N', 'D'];
console.log('hoy.getMonth() como index: ', meses[hoy.getMonth()] );

console.log('hoy.getDate(): ', hoy.getDate(), 'Día del mes' );
console.log('hoy.getMinutes(): ', hoy.getMinutes() );
console.log('hoy.getSeconds(): ', hoy.getSeconds() );
console.log('hoy.getMilliseconds(): ', hoy.getMilliseconds() );

console.log('hoy.getDay()', hoy.getDay(), 'Día de la semana');
console.log('hoy.getTime()', hoy.getTime(), 'milisegundos');

// ARRAYS

console.warn('*'.repeat(40) + 'Arrays' + '*'.repeat(40));
let frutas = ['manzanas', 'naranjas', 'kiwis'];

console.log('frutas: ', frutas);
console.log('frutas.length', frutas.length);
console.log('frutas.pop(): ', frutas.pop(), 'Elimina el último' );
console.log('frutas: ', frutas);
console.log('frutas.push("albaricoques"): ', frutas.push('albaricoques'), 'Inserta al final');
console.log('frutas: ', frutas);
console.log('frutas.push(["platano","naranja"]): ', frutas.push(['platano','naranja']), 'Inserta un array');
console.log('frutas: ', frutas);

console.log('frutas.unshift("papaya"): ', frutas.unshift('papaya'), 'Inserta al principio');
console.log('frutas: ', frutas);

console.log('frutas.slice(1,3): ', frutas.slice(1,3), 'Primera posición incluida, segunda no incluida');
console.log('frutas: ', frutas);
console.log('frutas.slice(1,3): ', frutas.splice(1,3), 'Ambas posición incluida y Modifica el array');
console.log('frutas: ', frutas);

console.log('frutas.splice(1,1,"platanos") ', frutas.splice(1,1,'platanos'), 'Sustituye el elemento');
console.log('frutas: ', frutas);

console.log('frutas: frutas.splice(1,0, "melones") ', frutas.splice(1,0, 'melones'), 'Añade el elemento sin eliminar nada');
console.log('frutas: ', frutas);

console.log('frutas.reverse(): ', frutas.reverse(), 'Invierte');

console.log('frutas.sort(): ', frutas.sort(), 'Ordena');

let puntuaciones = [13,45,12,98,3];
console.log('Array de números: ', puntuaciones);
puntuaciones.sort((a,b) => b-a);
console.log('Array de números Ordenados Desc con sort: ', puntuaciones);
puntuaciones.sort((a,b) => a-b);
console.log('Array de números Ordenados Asc con sort: ', puntuaciones);

console.log('frutas.includes("pomelos"): ', frutas.includes('pomelos'));

console.log('frutas.join("😎"): ', frutas.join('😎'));

let marcasEuropeas = ['Seat', 'Renault', 'Mercedes'];
let marcasAsiaticas = ['Toyota', 'Mazda'];
let marcas = marcasEuropeas.concat(marcasAsiaticas);
console.log('marcasEuropeas', marcasEuropeas);
console.log('marcasAsiaticas', marcasAsiaticas);
console.log('Concatenar arrays: ', marcas);

let marcasSeleccionadas = marcasEuropeas.concat(); 
console.log('marcasSeleccionadas = marcasEuropeas.concat(): ', marcasSeleccionadas, 'Rompe Referencia' );
marcasEuropeas.push('Dacia');
console.log('marcasEuropeas', marcasEuropeas);
console.log('marcasSeleccionadas: ', marcasSeleccionadas );

// Spread operator
let marcasCoreanas = ['Hyundai', 'KIA'];
console.log('Spread - marcasAsiaticas.push(...marcasCoreanas): ',  marcasAsiaticas.push(...marcasCoreanas), marcasAsiaticas);

//Parametros rest
function setCategorias(...categorias){
    return categorias;
}

let categoriasCalzado = setCategorias('Zapato', 'Zapatillas', 'Botas');
console.log('Parametro rest: ', categoriasCalzado);

// Ciclo forEach( ECMAScript 5)
// array.forEach( (elemento, i) => {
//     código con cada elemento      
// })

let jugadores = [
    {nombre: 'María', apellidos: 'Pérez', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6}
];

console.table(jugadores);

jugadores.forEach( jugador => {
    if(jugador.puntuacion >= 5){
        jugador.apto = true;
    }else{
        jugador.apto = false;
    }
});
console.log('jugadores.forEach: ')
console.table(jugadores);

/* Map (ECMAScript 5)
Devuelve un array con el resultado de cada iteracción

Array.map((elemento,i) => {
    codigo 
});
*/

let nombreJugadores = jugadores.map( (jugador, i) => {
    return (i + 1) + '.- ' + jugador.nombre + ' ' + jugador.apellidos;
});
console.log('Map crea otro archivo basado en uno ya existente haciedo alguna transformación');
console.table(nombreJugadores);

// Filter
let jugadoresAptos = jugadores.filter( (jugador) => {
    return jugador.apto;  //Debe retornar un booleano y en funcion a esto hace el filtro
});

console.log('Filter por apto, creando un nuevo array');
console.table(jugadoresAptos);

// Sobre undefined push() lanza error
let array1 =[];
array1.push('Getafe');

/*
Reduce (ECMAScript 5)
Recorre los valores y en cada ciclo de iteración  actualiza un valor de inicio 
y otro de fin a partir de los valores de cada elemento de acuerdo al código

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

array.reduce( (inicio, fin) => {
    codigo de inicio y fin
})
*/

console.log('REDUCE');
jugadores[0].puntuacion = [4.5, 6.5, 7.8];
jugadores[1].puntuacion = [9.3, 3.5, 6.8];
jugadores[2].puntuacion = [7.5, 4.5, 7.9];

console.table(jugadores);
// HACE RECURSIVAMENTE LA OPERACION
jugadores.forEach( (jugador, i) => {
    let suma = jugador.puntuacion.reduce((a, b) => { 
        return a + b;
    });
    jugadores[i].promedio = suma / jugador.puntuacion.length;
});
console.table(jugadores);

const arrayX = [1, 2, 3, 4];
console.log('arrayX', arrayX);
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(arrayX.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arrayX.reduce(reducer, 5));
// expected output: 15




