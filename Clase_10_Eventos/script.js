const titulo = document.querySelector('h1');
const inputNombre = document.querySelector('#nombre');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const p = document.querySelector('p');


function validarEmailPass(){
    const email = inputEmail.value;
    const pass = inputPassword.value;

    alert(`El email es ${email} y el pass es ${pass}`);
}

formulario.addEventListener('submit', ( evento ) => {
    evento.preventDefault();  // Evito que el formulario recarge la página

    console.log(evento)
    validarEmailPass();
})


// Para setear un valor en el input
// inputNombre.value = 'John Doe';

/*
titulo.onclick = () => {
    titulo.innerText = '-------';
}

inputNombre.onfocus = () => {
    console.log('foco')
}

inputNombre.onchange = () => {
    console.log( inputNombre.value );
}
*/


function login(){
    // obtengo el dato del input 
    let nombre = inputNombre.value;

    if( nombre != ''){
        titulo.innerText = `Bienvenido ${nombre}`;
    } else {
        alert('Complete el nombre')
    }

    console.log(nombre);
}



btn2.onclick = ( ) => {
    alert('eh, porque haces click?!');
}

/* btn2.onclick = ( ) => {
    alert('Otra vez!');
}
 */
// Agrego un escuchador de eventos
btn3.addEventListener('click', function(){
    console.log('Se hizo click desde el btn III');
})

inputNombre.addEventListener('blur', () => {
    const nombre = inputNombre.value.trim();
    if( nombre.length < 3){
        p.innerText = 'El nombre debe ser de más de tres letras';
    } else {
        p.innerText = '';
    }
    console.log( inputNombre.value );
})

inputNombre.addEventListener('input', () =>{
    const nombre = inputNombre.value;
    p.innerText = nombre;
})

inputNombre.addEventListener('focus',()=>{
    p.innerText = '';

})
/* 
btn3.addEventListener('click', function(){
    console.log('Se hizo click desde el btn III OTRA VEZ');
})

 */