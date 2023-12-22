/* 
    💡 Calculara de notas de los alumnos de un curso
    📌 Ingresar tres estudiates. Luego cantidad elegida -- Ok
    📌 Ingresar la nota1 y la nota2 --Ok
    📌 Calcular el promedio - Ok
    📌 Mostrar si esta 
        - Promocionado ( 7 o más )
        - Aprobado ( 4 o más )
        - Desaprobado ( menos de cuatro)
    📌 Validar Nombre, nota1 y nota2  - Ok
*/
let estudiante;
let nota1;
let nota2;
let promedio;
let estado;
let totalEstudiantes;

/* FUNCION 1 - ESTADO: Retornar un APRO, DES, PROM */
function obtenerEstado(promedio){
    if( promedio < 4 ){
        return 'Desaprobado';
    } else if (  (promedio >= 4) && (promedio < 7)  ){
        return 'Aprobado';
    } else if ( promedio >= 7) {
        return 'Promocionado';
    }
}

/* FUNCION 2 - PROMEDIO */
function calcularPromedio(nota1, nota2){
    return ( parseFloat(nota1) + parseFloat(nota2) ) / 2;
}

/* FUNCION 3 - VALIDAR NOTA. Sea un numero y sea entre 1 y 10 */
function validarNota(nota){           // No es un No numero 
    if( (nota >= 1) && (nota <=10)  && !isNaN(nota)  ){
        return true;
    } 
    else {
        return false;
    }
}

/* FUNCION 4 - VALIDAR NOMBRE:  Que no sea vacio, y que tenga almenos tres letras  */
function validarNombre(nombre){
         //    true             true
    if(  nombre == '' || (nombre.length < 3) ){
        return false;
    } else {
        return true;
    }
}



totalEstudiantes = parseInt(  prompt('¿Cuantos estudiantes hay?')  )

// Bucle Principal
for( let i=1; i <= totalEstudiantes; i++  ){

    do { // Pide el nombre del estuadiante hasta que sea valido
        estudiante = prompt('Nombre del Estudiante');

        if ( ! validarNombre( estudiante)){
            alert('Nombre invalido');
        }

    } while( ! validarNombre(estudiante) )


    do { // Pide la nota hasta que sea valido
        nota1 = prompt('Nota 1');
        if ( ! validarNota( nota1)){
            alert('Nota Invalida');
        }
        
    } while( ! validarNota(nota1) )


    do { // Pide la nota hasta que sea valido
        nota2 = prompt('Nota 2');
        if ( ! validarNota( nota2)){
            alert('Nota Invalida');
        }
        
    } while( ! validarNota(nota2) )


    promedio = calcularPromedio(nota1, nota2);
    estado = obtenerEstado(promedio);

    let mensaje = estudiante + ' | ' + nota1 + ' | ' +  nota2 + ' | ' + '\n Promedio: ' + promedio + ' | ' + estado;

    console.log(mensaje);

    alert(mensaje);
}

