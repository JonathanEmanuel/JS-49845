/* --------------------------------- REPASO --------------------------------- */

let products = [
    { id: 1, name: 'Samsung TV', price: 600000 },
    { id: 2, name: 'DELL notbook', price: 400000 },
    { id: 3, name: 'Auriculares Sony', price: 15000 },
    { id: 4, name: 'Monitor Philips', price: 120000 },
    { id: 5, name: 'Teclado logitech', price: 30000 },
];


function buscarPorNombre (nombre ){
    const product = products.find( product => product.name.toLowerCase() === nombre.toLowerCase() );
    if (product ){
        return 'Se encontro el producto';
    } else {
        return 'No existe el producto';
    }
}

console.log( buscarPorNombre('TEcladO logitech') );

/* ------------------------------ FIN DE REPASO ----------------------------- */


/* -------------------------------------------------------------------------- */
/*                                    MATH                                    */
/* -------------------------------------------------------------------------- */
const pi = Math.PI;
console.log(pi);
const valores = [ 20, 40, 5, 75]

const max = Math.max( 20, 40, 5, 75);
const min = Math.min( ...valores );
console.log(max, min);

const price = 123.56;

console.log( Math.floor( price )  );

const aleatorio =  Math.floor( (Math.random() * 6) + 1 );

console.log( aleatorio );

/* -------------------------------------------------------------------------- */
/*                                    DATE                                    */
/* -------------------------------------------------------------------------- */
// Obtengo Fecha y hora actual
const fecha = new Date();
const meses =  ['Enero', 'Febrero', 'Marzo'];
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles']
const diaSemana = fecha.getDay();
const numeroMes = fecha.getMonth();
const dia = fecha.getDate();
const year = fecha.getFullYear();

console.log('Año ' + fecha.getFullYear() );
console.log('Mes ' + meses[numeroMes] );
console.log('Día ' + dia)

let mensaje = dia + '-' + (numeroMes + 1) + '-' + year;
console.log(mensaje);


console.log('Fecha actual ' + fecha.toLocaleDateString() );
console.log('Hora actual ' + fecha.toLocaleTimeString() );
console.log('Fecha y hora ' + fecha.toLocaleString() );


const finDeCurso = new Date("February 8, 2024")
const hoy = new Date();
const milisegundosPorDia = 86400000;


console.log( (finDeCurso - hoy) / milisegundosPorDia );

