const edad = parseInt( prompt('Ingrese su edad') );
console.log(edad);
let mensaje;

if( edad > 18){
    mensaje = 'Sos mayor edad ✔';
} else {
    mensaje = 'Sos menor de edad ❌';
}

alert(mensaje);