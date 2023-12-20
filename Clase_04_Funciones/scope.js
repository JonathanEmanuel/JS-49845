let resultado = 0; // Variable Global

function doble(numero){
    resultado = numero * 2;
    let operacion = '*';  // Variable Local

    return resultado;
  
}




let resultadoObtenido = doble(20);

alert('El resultado es ' + resultado);
//alert(operacion);  ⚡ No puedo llamar desde lo global a una variable local