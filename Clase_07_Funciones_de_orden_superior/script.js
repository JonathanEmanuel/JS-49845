const array = ['Manzana', 'uva', 'perA', 'sandia'];
const pasarMayuscula = (texto) => texto.toUpperCase();

const pasarMinuscula = function(texto){
    return texto.toLowerCase();
}
// ESta funcion toma la lista y otra funcion parametros
function porCadaUno(lista, miFuncion){
    for(const item of lista){
        console.log( miFuncion( item)  );
    }
}


porCadaUno( array, pasarMinuscula );
porCadaUno( array, pasarMayuscula );
//porCadaUno( array, alert );
console.log(array);





