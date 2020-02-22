//¿Que es una función?
//Def: nombre de la funcion (hay algunas que no necesariamente usan nombre y se les llama funciones anonimas )

function mensaje (){
    console.log('mensaje de la funcion');
}
mensaje();

var msj2 = 'mensaje dentro de la funcion';

function mensaje2(msj2){
    console.log(msj2);
}
//llamando la funcion para que se ejecute en el html
mensaje2(msj2);


function mensaje3(){
    return 'mensaje como devolucion de la funcion';
}   
//llamando la funcion para que se ejecute en el html
var msj3 = mensaje3();
console.log(msj3);


/*
Argumento de las funciones 
*/

function sumar(a ,b ,c =3 ){
    return a + b + c;

}
var result = sumar(5,8,9);
var result1 = sumar(3,7);
console.log(result);
console.log(result1);

//funciones anonimas = utiliza las funciones como expresiones
var sumar = function (a ,b ,c){
    return a + b + c;

}
var result = sumar(5,8,9);
console.log(result);


/*
Funciones recursivas 
recursivo: permite llamar a funciones por si mismas
*/

//sacar el factorial de 4
//4 = 1 * 2 * 3 * 4 = 24

var factorial = function(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return (n * factorial(n-1));
    }
}

console.log(factorial(5));

//Funciones predefinidas
//son funciones propiamente tal del lenguaje
/* 
eval = Evalua si el codigo es correcto
isFinite = Evalua si el numero es finito o infinito
isNaN = Evalua un argumento si no es un numero
parseInt = convierte una cadena de texto como entero
parseFloat = convierte una cadena de texto como real
Number = convierte objeto en numeros
String = convierte objeto en cadena
Date = es un objeto que devuelve la fecha del sistema en formato de fecha de unix
    para eso de recibe con un formato string
*/

//Arreglos
/*
Son objetos de tipo lista, son un tipo de variable que permite guardar informacion.
Pero no un dato, sino varios datos
se puede recorrer el arreglo
se pueden mutar los datos que tienen los arreglos

la longitud y tamaño(cantidad de elementos que puede tener un arreglo), que tiene un arreglo no son fijos (son variables).

*/
//Tipo de arreglos
//Estas son las diferentes formas de declarar un arreglo.
var bebidas = ['coca','fanta','sprite'];
console.log(bebidas);

var bebidas2 = new Array('pepsi','bilz','pap');
console.log(bebidas2);

/*
Funciones Basicas con arreglos
*/

//Arreglo de cuatro elementos
var nombres = ['Daniel','Felipe','Christian','Luigi'];
var vegetales = new Array('Tomate','Lechuga','Zanahoria');

console.log(nombres[2]);
console.log(vegetales[0]);
//para mutar los valores del array
nombres[2] = 'Jose';
vegetales[0] = 'Pimenton';

console.log(nombres[2]);
console.log(vegetales[0]);

//Propiedad length
console.log(nombres.length);
//para recorrer el arreglo
for(var i = 0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}
//otro metodo con el for each
vegetales.forEach(function(elemento, indice){
    console.log(elemento, indice);
})
//Para Agregar desde el final del arrays
console.log(nombres);
nombres.push('Francisca');
console.log(nombres);
//Para Agregar desde el principio del arrays
nombres.unshift('Roxana');
console.log(nombres);
//Para Eliminar desde el final del arrays
nombres.pop();
console.log(nombres);
//Para eliminar desde el principio del arrays
nombres.shift();
console.log(nombres);

//Saber el indice de uno de los elementos
var posicion = nombres.indexOf('Felipe');
console.log(posicion);

//Splice: Eliminar un elemento en cualquier parte del array (n= desde donde va a eliminar, n=la cantidad de elementos dentro del array que va a eliminar)
nombres.splice(1,2);
console.log(nombres);