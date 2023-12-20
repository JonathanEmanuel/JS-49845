console.log('Inicio del programa')
let edad = 21;
// Declare la función
function pedirNombre (){
    let nombre = prompt('Ingrese su Nombre');
}

function tipoDeCambio(pesos,valorDolarHoy){

    let resultado=pesos/valorDolarHoy;
    let mensaje = 'Tus pesos valen ' + resultado + ' dolares 😪'; 
    alert(mensaje);

}



/*
let misPesos = parseFloat( prompt('Ingrese sus pesos'));
let valorDolar = parseFloat( prompt('Ingrese el valor del dolar'));

tipoDeCambio(misPesos, valorDolar);
*/


// Llamo a la función
//pedirNombre();


function aumentoSueldo(sueldo){
    let resultado =   sueldo * 1.10;
    return resultado;
}
//       <----  
//let color = prompt('Color');
let sueldoFinal = aumentoSueldo( 350 );


alert(sueldoFinal);

console.log(sueldoFinal);

function login(user, pass){
    if( user == 'admin' && pass == '1234'){
        return true;
    } else {
        return false;
    }
}


let logueado = login( 'lucas', '1234' );


function calculadora(n1, n2, operacion){
    let resultado;

    if( operacion == '+'){
        resultado = n1 + n2;
    } else if( operacion == '-' ){
        resultado = n1 - n2;

    } else if( operacion == '/'){
        if( n2 == 0) {
            resultado = 'No se puede dividir por cero'
        } else {
            resultado = n1 / n2
        }
    } else if( operacion == '*'){
        resultado = n1 * n2;
    }
    
    else {
        resultado = 'Error 😕';
    }


    return resultado;
}

let r1 = calculadora(20, 30, '+');
let r2 = calculadora(20, 10 , '-');



console.log('La suma es ' + r1);



