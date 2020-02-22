console.log(document.title);
document.title = 'Prueba de titulo';
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1');

h1[0].innerHTML = 'prueba';
console.log(h1);

var boton = document.getElementById('boton');
console.log(boton); 

function mensaje(){
    alert('mensaje de alerta');
}

boton.addEventListener('click', mensaje);

