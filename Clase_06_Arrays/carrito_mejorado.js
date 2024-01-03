
const transacciones = [
    { concepto: 'Debito', saldo: 3000, fecha: '12-01-24'}
]

const carrito = [ 
    { nombre: ' Los cien', categoria: 'Libro', precio: 5000},
    { nombre: ' Mouse Logitech', categoria: 'Computación', precio: 7500},
    { nombre: ' Teclado mecanico', categoria: 'Computación', precio: 50000},
    { nombre: ' Disco Rigido externo', categoria: 'Computación', precio: 90000},
    { nombre: ' Monitor', categoria: 'Computación', precio: 75000}
];

carrito.push({ nombre: 'Web Cam', categoria: 'Computación', precio: 120000})

console.table( carrito )


for( let i=0; i<carrito.length; i++ ){
    console.log('Nombre ' +  carrito[i].nombre );
    console.log('Precio ' +  carrito[i].precio );    
}