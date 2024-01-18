const titulo = document.querySelector('h2');
const inputNombre = document.querySelector('#nombre');
const btn = document.querySelector('#btn');
const btnCerrar = document.querySelector('#btn-cerrar');
const btnBorrar = document.querySelector('#btn-borrar');
const formulario = document.querySelector('form');
const p = document.querySelector('p');

// sessionStorage.setItem('token', '123abc');
localStorage.setItem('clave', 'mi contraseña');

// Leo el valor del localStorage
const nombre = localStorage.getItem('name');
if( nombre ) {
    titulo.innerText = `Bienvenido ${nombre}`;
} else {
    titulo.innerText = `Bienvenido`;
}



formulario.addEventListener('submit', ( evento ) => {
    evento.preventDefault();  // Evito que el formulario recarge la página
    const nombre = inputNombre.value ;
    console.log(nombre);

    localStorage.setItem('name', nombre);

    titulo.innerText = `Bienvenido ${nombre}`;
})

btnCerrar.addEventListener('click', ()=> {
    localStorage.removeItem('name');
    titulo.innerText = `Bienvenido`;
})

btnBorrar.addEventListener('click', () => {
    localStorage.clear();
})


inputNombre.addEventListener('blur', () => {
    const nombre = inputNombre.value.trim();
    if( nombre.length < 3){
        p.innerText = 'El nombre debe ser de más de tres letras';
    } else {
        p.innerText = '';
    }
})

inputNombre.addEventListener('input', () =>{
    const nombre = inputNombre.value;
    p.innerText = nombre;
})

inputNombre.addEventListener('focus',()=>{
    p.innerText = '';
})


/* ------------------------ Quiero Guardar un objeto ------------------------ */
const persona = {
    nombre: 'Sofia',
    email: 'sofia@gmail.com',
    edad: 27,
    casado: false,
    cursos: [
        { nombre: 'Desarrollo Web'},
        { nombre: 'JavaScript'},
        { nombre: 'React'}
    ]
}


// Guardo el objeto como String
localStorage.setItem('persona', JSON.stringify(persona) );

// Leo el Storage como String y luego lo conviero a JSON
const datos = JSON.parse( localStorage.getItem( 'persona') );

console.log(datos);
