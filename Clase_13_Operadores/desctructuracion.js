const persona = {
    id: 2,
    name: 'Julieta',
    email: 'july@mail.com',
    password: '123abc',
    pic: 'user.jpg',
    domicilio: {
        calle: 'Siempre Viva 123',
        cp: 1200
    },
    lenguajes: ['JavaScript', 'HTML' ]
}



// Guarde el objeto persona con los atributo name y email
function saveUser( persona ){
    const { name, email } = persona;
    console.log(name, email);

    const objeto = {
        name,
        email
    }
    console.log('Nuevo OBJ', objeto)
    localStorage.setItem('user', JSON.stringify( objeto) );
}

function saveUser2( { name, email, lenguajes } ){
    localStorage.setItem('user', JSON.stringify( { name, email, lenguajes}) );
}

const renderLengaujes = ( { lenguajes } ) => {
    lenguajes.forEach(element => {
        
    });
}

saveUser2( persona );
renderLengaujes( persona );
//                0        1         2       3
const frutas = ['Pera', 'Banana', 'Uva', 'Sandia'];

let [ fruta1, fruta2, ,fruta4 ] = frutas;
console.log( fruta1, fruta2, fruta4 );

/* ----------------------------- Operador Spread con Arrays ---------------------------- */

console.log( ...frutas )
const valores = [ 4, 128, 256, 64, 32 ];

const max = Math.max( ...valores) 
console.log('MAX: ', max)

const carrito1 = [ 'Teclado', 'Mouse', 'Pendriver'];
const carrito2 = [ 'Monitor', 'Parlante'];

const carritoFinal = [ 'Camara Web', ...carrito1, 'algo',  ...carrito2  ];

console.table(carritoFinal);

/* ----------------------------- Operador Spread con Objetos ---------------------------- */
const user1 = {
    id:1,
    name: 'Nicolas',
    email: 'nicolas@mail.com'
}

const user2 = {
    id:2,
    name: 'Gabriel',
    email: 'gabriel@mail.com'
}

const userCompleto = {
    ... user1,
    avatar: 'avatar.jpg',
    status: 'Logueado'
}

console.table(userCompleto);

let datos = {
    ...userCompleto, // Agrego los datos generales
    ...user2, // Agrego los datos del user2
}

console.table( datos )


/* ----------------------------- Rest parameters  ---------------------------- */
function mostrarDatos( ...usuarios ){ // Recibos los datos como Array
    console.log( usuarios)
}


mostrarDatos( user1, user2, true, 'texto' ); 