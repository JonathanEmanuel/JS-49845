// String
let nombre = 'Juan';
// Number
let edad = 21;
// boolean
let casado = false;

// object
const persona = { nombre: 'Julieta', edad: 19 }

persona.apellido = 'Ruiz';
// persona = 3;  🛑 Esto genera un error! 
console.log(persona);

// Lista
//                0        1       2      3    4 
const frutas = [ 'manzana', 'uva', 'pera', 32, true ];
console.log( frutas[0]); // Visualizo la manzana

const carrito = [ 'Libro: Los 100 ',  'Mouse gamer', 'Teclado', 'Microfono USB', 'parlante', 'Monitor', 'Camara Web', 'Cable USB' ];

let cantidad = carrito.length;

for( let i=0; i<cantidad; i++ ){
    console.log( 'posición ' + i + ': ' + carrito[i] );    
}
// Agrego elemento al array
//let producto = prompt('Producto ');

carrito.push( 'Pera' );
console.table( carrito);
// SAco un elemento del carrito
carrito.pop();
// Saco el pimer elemento del array
carrito.shift();


// SAcar un elemento por posicion
carrito.splice(5,1);

console.table( carrito);


//const carritoa = [ 'Libro: Los 100 ',  'Mouse gamer', 'Teclado', 'Microfono USB', 'parlante', 'Monitor', 'Camara Web', 'Cable USB' ];

const porcion = carrito.slice(1, 4); // Hace una copia de una porción de los elementos

console.table(carrito);
console.table(porcion);

// Para buscar un elemento en el array utilizamos el método indexOf

let pos = carrito.indexOf('Parlante');
alert('Posicion ' + pos);