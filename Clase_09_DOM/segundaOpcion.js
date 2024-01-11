/* ------------------------- 1. Selecciono los elemento ------------------------ */
const cursos = [
    {name: 'JavaScript', img: 'images/js.png', description: 'Define el comportamiento de la Aplicación Web'},
    {name: 'CSS', img: 'images/css.png', description: 'Define el estilo de la Aplicación Web'},
    {name: 'html', img: 'images/html.png', description: 'Define la estructura de la Aplicación Web'},
    {name: 'Python', img: 'images/python.png', description: 'Nuevo curso'}
]


const titulo = document.getElementsByTagName('titulo');
const pJS = document.getElementById('text-js');
const nombre = prompt('Ingrese su nombre');
const contenedor = document.getElementById('cursos');
// template string
let mensaje = `Bienvenido ${nombre} 😉`;

console.log(titulo);

titulo.innerText = mensaje;


/* --------------------------- 2.Recorro el array --------------------------- */

for(let i=0; i<cursos.length; i++){
    let curso = cursos[i];

    let card = document.createElement('div');
    card.innerText = curso.name;
    card.classList.add('card');
    console.log(card);

    contenedor.appendChild(card);
}
