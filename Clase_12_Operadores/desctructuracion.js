
/* ----------------------------- Destructuración ---------------------------- */
const objeto = { color: 'Azul', size: '32px' }

let { color, size, backGround } = objeto;

console.log(color);
console.log(size);
console.log(backGround); // No existe esta propiedad

const persona = { _id:1, firsName: 'Rocio', lastName: 'Ruiz' }

const { _id: id, firsName: nombre, lastName: apellido } = persona;


console.log(id);
console.log(nombre);
console.log(apellido);

function saveUser( {firsName: nombre, lastName: apellido} ){

    // const dato = { nombre, apellido }

    localStorage.setItem('user', JSON.stringify( { nombre, apellido } ) );
}


saveUser( persona )