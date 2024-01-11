
const titulo = document.getElementById('titulo');
const pJS = document.getElementById('text-js');
//const nombre = prompt('Ingrese su nombre');
const contenedor = document.getElementById('cursos');
let mensaje = 'Bienvenido '

console.log(titulo);

titulo.innerText = mensaje;
//                      0               1               2
const logos = ['images/js.png', 'images/css.png', 'images/html.png']
// Inserto desde JS la (s) card (s)
for(let i=0; i<3; i++){
    let imagen = logos[i];
    console.log(imagen);

    contenedor.innerHTML += '<div class="card"><div class="card-header"><img src="'+ imagen +'" alt="HTML"></div></div>';
}


