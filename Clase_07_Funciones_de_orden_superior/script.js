const array = ['Manzana', 'uva', 'perA', 'sandia'];
const pasarMayuscula = (texto) => texto.toUpperCase();
const pasarMinuscula = function(texto){
    return texto.toLowerCase();
}
function remplazarAX(texto){
    return texto.replaceAll('a', 'x');
}


// ESta funcion toma la lista y otra funcion parametros
function porCadaUno(lista, miFuncion){
    for(const item of lista){
        console.log( miFuncion( item)  );
    }
}


porCadaUno( array, pasarMinuscula );
porCadaUno( array, pasarMayuscula );
// Versión Clasica
/* porCadaUno( array,  function (texto){
    return texto.replaceAll('a', 'x');
}) */
// Versión Moderna
porCadaUno( array, (texto) => texto.replaceAll('a', 'x') )



