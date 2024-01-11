/* ------------------------ 1.Selecciono los elemento ----------------------- */
const titulo = document.querySelector('h1');
const sub = document.querySelector('.sub');
const contenedor = document.querySelector('#cursos');

const cursos = [
    {name: 'JavaScript', img: 'images/js.png', description: 'Define el comportamiento de la Aplicación Web'},
    {name: 'CSS', img: 'images/css.png', description: 'Define el estilo de la Aplicación Web'},
    {name: 'html', img: 'images/html.png', description: 'Define la estructura de la Aplicación Web'},
    {name: 'Python', img: 'images/python.png', description: 'Nuevo curso'}
]

/* --------------------------- 2.Recorro el array --------------------------- */
cursos.forEach(curso => {
    /* ------------------------ 3.Creo los elemento HTML ------------------------ */
    contenedor.innerHTML += // html
                        `<div class="card">
                            <div class="card-header">
                                <img src="${curso.img}" alt="HTML">
                            </div>
                            <div class="card-body">
                                <h4> ${curso.name}</h4>
                                <p>${curso.description}</p>
                            </div>
                        </div>`;
});

/* ---------------------- 4.Seleccion todos los cursos ---------------------- */
const seleccion = document.querySelectorAll('.card');
console.log(seleccion);

seleccion.forEach(element => {
    console.log(element);
});
