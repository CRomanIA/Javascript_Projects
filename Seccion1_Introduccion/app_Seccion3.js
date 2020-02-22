/*
Sentencia if, else
*/

var nombre = 'Christian';
var esCasado = false;

if(esCasado == true){
    console.log(nombre + ' es casado.')
}else{
    console.log(nombre + ' es soltero.')
}

/*
if anidados:
Sentencias logicas: and(&&), or(||), not(!).
*/

var nombre2 = 'Felipe';
var edad = 61;
//si la edad es menor a 12, es un niño
//si la edad es menor que 11 y mayor que 18 es un adolecente
//si la edad es mayor a 17 y menor a 60 es un adulto
//si la edad es mayor de 60 es un anciano
if(edad < 12){
    console.log(nombre2 + ' es un niño.');
}else if((edad > 11) && (edad < 18)){
    console.log(nombre2 + ' es un adolecente');    
}else if ((edad > 17) && (edad < 60)){
    console.log(nombre2 + ' es un adulto');
}else{
    console.log(nombre2 + ' es un anciano');
}

/*
Sentencia Switch
Evalua el valor de la variable, y lo evalua en los posibles casos que puede tener los valores en la variable.
*/

var mes = 2;

switch(mes){
    case 1:
        console.log('Enero');
        //Para hacer el corte, si vale 1, será enero y no seguirá buscando
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    default:
        console.log('Mes no encotrado');
        break;  
}

/*
Estructura for
sentencia repetitivas o condicionales
se agrega la variable
se le da la condicion incremental
se utiliza la sentencia unaria para darle la condicion de entrega de datos

*/

/*
for(var i=1; i<=10; i+=1){
    console.log(i);
}
for(var i=10; i>=1; i--){
    console.log(i);
}
*/


/* 
Sentencia while, do while 
es casi la misma logica que el for, pero en diferentes secciones, para despues al finalizar debemos informar en que parte termine, sino la sentencia sería infinita

*/
//while

/*
var i = 1;
while(i <=10){
    console.log(i);
    i++;
}
console.log(i);
*/

//Do while

var i = 1;
do{
    console.log(i);
    i++
}while(i <= 10);