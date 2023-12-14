// solicita el usuario hasta que sea el usuario 'juan'
let usuario = prompt('Usuario'); // laura


// mientras no sea juan 
while(  usuario != 'juan' ) {
    console.log('Usuario invalido');
    usuario = prompt('Usuario');
}

console.log('Bienvenido Juan :D');


let i = 1;
while ( i <= 5){
    console.log(i);
    i++;
}




/* 
let continuar = true;

// Mientras   var de control

while( continuar === true ){
    console.log('Estamos en el While');
    // Permitir actualizar la variable de control
    continuar = confirm('¿Seguro que deseas continuar?');
} */