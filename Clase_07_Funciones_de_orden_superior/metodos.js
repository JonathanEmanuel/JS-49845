const array = ['Manzana', 'uva',  'perA', 'sandia', 'uva'];

/*
array.forEach( function(item){  
    console.log(item)  
})
*/
/*
const mostrar = (texto ) => {
    console.log(texto.toUpperCase() )
}
array.forEach( mostrar )
*/

// Por cada uno... forEach crea el parametro item 
array.forEach( (item)   => {
    console.log( item.toUpperCase() )
});

let buscar = prompt('Buscar producto');
const encontrados = array.find( ( item ) => item.toLowerCase() === buscar.toLowerCase() );

if( encontrados ){
    alert ('Se encontro ' + encontrados)
} else {
    alert('No se encontro el elemento ' + buscar)
}

const listaFiltrada = array.filter( ( item ) => item.toLowerCase() === buscar.toLowerCase()  )

console.log( listaFiltrada);


// MAP
const nuevaLista = array.map( (item) => item.toUpperCase() );

console.table( nuevaLista);

console.log(array);

array.sort();

console.table( array);
