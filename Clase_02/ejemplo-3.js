let usuario = prompt('Ingrese el Usuario');
let password = prompt('Ingrese la contraseña');
let mensaje;

// Si el usuario es 'admin' y el password es '123abc'
//           true        Y           true  
if(  usuario == 'admin' &&  password == '123abc' ) {
    mensaje = 'Bienvenido ' + usuario;
} else {
    mensaje = 'Usuario o Contraseña Incorrectos';
}

alert(mensaje);
