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
    // Creamos cada elemento
    let card = document.createElement('div');
    
    card.classList.add('card'); // Agregamos la clase card al elemento
    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    
    let img = document.createElement('img');
    img.setAttribute('src', curso.img);
    img.setAttribute('alt', curso.name);    
    cardHeader.appendChild(img);
    
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardTitle = document.createElement('h4');
    cardTitle.innerText = curso.name;

    let cardDescription = document.createElement('p');
    cardDescription.innerText = curso.description;
    

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);


    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    console.log(card);

    contenedor.appendChild(card);
}
