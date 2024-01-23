let modo = 'dark';
const ul = document.querySelector('ul');
const titulo = document.querySelector('h2');
const numero = document.querySelector('#numero');
const products = [
    {id: 1, name: 'Mouse Logitech', price: 2700 },
    {id: 2, name: 'Teclado Logitech', price: 7500 },
    {id: 3, name: 'Memoria MicroSD ', price: 5000 }
]

// Guardar un dato
localStorage.setItem('modo', modo);
console.log(  localStorage.getItem('modo') );

// Guardar un array 

//localStorage.setItem('lista', JSON.stringify( products) );
const data = JSON.parse( localStorage.getItem('lista')) 
const lista =  data ? data : [];



// Recorro el array
lista.forEach(producto => {
    ul.innerHTML += `<li>  ${producto.name}  </li>`;
});

 /* ------------------------------- Operador ++ ------------------------------ */
let n = 1;
n++;
n++;

console.log('n es ' + n);

/* ---------------------------- Operador Ternario --------------------------- */
const edad = 18;

(edad > 18) ? console.log(' Sos mayor de Edad...') : console.log('Sos menor de Edad...')

/* if( edad > 18){
    console.log('Sos mayor de Edad');
} else {
    console.log('Sos menor de Edad');
} */

const mayor = (edad > 18) ? true : false;
alert(mayor);


let nombre = prompt('Nombre');


// ''  null  --> false 
nombre = nombre ? ('Bienvenido ' + nombre) : 'Bienvenido';
titulo.innerText = nombre;


/* ------------------------------ Operador AND && ------------------------------ */
const estudiantes = [
    { name: 'Pablo', email: 'pablo@gmail.com'}
];

estudiantes.pop();

estudiantes.length == 0 && (numero.innerText = 'Sin estudiantes');

/*  VERSIÓN LARGA
if( estudiantes.length > 0 ){
    numero.innerText = estudiantes.length;
} else {
    numero.innerText = 'Sin estudiantes'
} */

/* ------------------------------- OPERADOR OR || ------------------------------ */
const logueado = undefined;
// EL OPERADOR OR  RETORNA LO DE LA IZQ SI ES VERDADERO SINO LO DE LA DERECHA
console.log(  logueado || 'No estas logueado'  );

// CON EL OPERADOR OR
const lista2 = JSON.parse( localStorage.getItem('lista')) || [];