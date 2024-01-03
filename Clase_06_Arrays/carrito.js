const carrito = [];
let producto;
let opcion = confirm('¿Agregar Producto?');


while( opcion == true ){
    producto = prompt('Producto ');
    carrito.push( producto);

    opcion = confirm('¿Agregar Producto?');
}

// Muestro el carrito
for(let i=0; i<carrito.length; i++ ){
    console.log( carrito[i] );
}
console.log('🤯')
console.table( carrito);