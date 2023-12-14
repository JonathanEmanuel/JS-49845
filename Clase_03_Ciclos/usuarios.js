// Si mas de tres veces el usuario es invalido la cuenta se bloquea 
let usuario = prompt("Ingrese el usuario");
let errores = 0;
usuario = usuario.toLowerCase();

if ( usuario == 'john' ) {
  alert("Bienvenido");
} else {  // Si no
  alert("No te conocemos");
  // Sumo un error
  errores = errores + 1;
}

// Rep 2
usuario = prompt("Ingrese el usuario");
usuario = usuario.toLowerCase();

if ( usuario == 'john' ) {
  alert("Bienvenido");
} else {  // Si no
  alert("No te conocemos");
  // Sumo un error
  errores = errores + 1;
}

// Rep 3
usuario = prompt("Ingrese el usuario");
usuario = usuario.toLowerCase();

if ( usuario == 'john' ) {
  alert("Bienvenido");
} else {  // Si no
  alert("No te conocemos");
  // Sumo un error
  errores = errores + 1;
}

