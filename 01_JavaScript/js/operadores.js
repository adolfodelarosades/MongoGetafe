/* 
OPERADORES ARITMÉTICOS

+ - * / % ++ -- Negación Unaria

Concatenacion de cadenas +


OPERADORES DE ASIGNACIÓN

= 
+=
-=
*=
/=
%=


OPERADORES DE COMPARACIÓN

== 
===     Igualdad Estricta
!=      Distinto / Desigualdad
!==     Distinto / Desigualdad Estricta
>
>=
<
<=


OPERADORES LÓGICOS

&&      AND
||      OR
!       NOT


OPERADOR TERNARIO

? : 


OPERADOR DE TIPOS

typeof El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.

PRECEDENCA DE OPERACIONES
De Izq. a Der. e igual que en matemáticas.


*/

let resultado = 'Cinco';
let total = resultado * 2; // NaN

console.log(total);

// Resto 

let a = 13 % 2;

console.log(a);

// Incremento ++ 
let b = 1;

console.log(b++);
console.log(b);

let c = 1;
console.log(++c);
console.log(c);

// Negación Unaria
let d = 4;
let e = -d;

let nombre = 'Juan';
let apellidos = 'Perez Gónzalez';
let mensaje = nombre + ' ' + apellidos;
console.log(mensaje);

let edad = 46;
mensaje = nombre + ' tiene ' + edad + ' años. ';
console.log(mensaje);

let f = 4;
let g = 10;

f += g; // Equivalente a  f = f + g;

f -= g; // Equivalente a  f = f - g;


let ciudad = 'Getafe';
let termino = 'Getafe';

let hayRespuesta = ciudad == termino;
console.log(hayRespuesta);

let puntuacion1 = 8.4;
let puntuacion2 = '8.4';

let valoracion = puntuacion1 == puntuacion2;
console.log(valoracion);
valoracion = puntuacion1 === puntuacion2;
console.log(valoracion);

let valor1 = 100;
let valor2 = 200;
let valor3 = 100;

resultado = valor2 > valor1 && valor1 === valor3;
console.log(resultado);

resultado = valor2 < valor1 || valor1 === valor3;
console.log(resultado);

let mayorEdad = false;
mayorEdad = !mayorEdad;

console.log(mayorEdad);


mayorEdad = (edad >= 18) ? 'Adulto' : 'Menor';
console.log(mayorEdad);


