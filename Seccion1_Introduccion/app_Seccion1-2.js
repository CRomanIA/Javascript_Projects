
//Variables y tipo de datos

//para definir variables var,const,let
var nombre = 'croman';
console.log(nombre);
//funcion que permite ver el tipo de dato de una variable
console.log(typeof(nombre));

var edad = 24;
console.log(edad);
console.log(typeof(edad));

var edad = 'cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1.999;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
/*
este es un comentario en más de una línea de codigo
como pueden ver el comentario se acaba cuando se sale de las 
etiquetas de comentario
*/

/******************************************************/

/*
Operadores matematicos
*/

//Declaracion de variables
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

//Asignacion de valores en a las variables
edadAna = 34;
edadMaria = 25;
yearActual = 2020;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;
console.log('la diferencia de edad entre ana y maria es de ' + diferenciaEdad + ' años');
console.log('la edad entre ambas es de ' + sumaEdades + ' años');
console.log('El año en que nacio Ana es ' + yearAna);
console.log('El año en que nacio Maria es ' + yearMaria);
console.log('El año en que nacio Maria x2 es ' + yearMaria * 2);
console.log('El año en que nacio Maria /2 es ' + yearMaria / 2);

/******************************************************/

/* Operadores lógicos, unarios y de asignación*/
//Logicos <> <= >= ==
var edadFelipe, edadDaniel;
edadDaniel = 16;
edadFelipe = 5;

var menor = edadFelipe < edadDaniel;
console.log(menor);

var mayor = edadFelipe > edadDaniel;
console.log(mayor);

var igual = edadFelipe > edadDaniel;
console.log(igual);

//Operador de negacion
//Conviere la operacion contraria a la que debería dar
var negacion = !(edadFelipe > edadDaniel);
console.log(negacion);

//Operadores unarios, ++incremento, --decremento
edadFelipe++;
console.log('con operador unario incremento, en vez de 5, felipe tiene ' + edadFelipe);

console.log('con operador unario decremento, en vez de '+ edadFelipe-- + ' felipe tiene ' + edadFelipe);

//Asignacion +=, -=, *=, /=, %=

var a = 12;
var b = 5;
var c = a % 5; //el resto de una division
console.log('el residuo de la division es '+ c);

a += b;
console.log(a);
a -= b
console.log(a);
a *= b;
console.log(a);
a /= b;
console.log(a);
