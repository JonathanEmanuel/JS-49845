const nombre = 'Juan';  // String
const dni = 1234;  // Number
const casado = true;  // Boolean

const saludar = function(nombre){  // function
    alert('Hola ' + nombre + '. Soy una función');
}

// Defino un objeto literal
const persona = { 
    nombre: 'Lucas',        // Los : se utilizan SOLO en los Objeto 
    apellido: 'Ruiz', 
    dni: 2342,
    casado: false
}

persona.tel = '11-2234-2222';


/* console.log( persona );
console.log(  persona.nombre  );
console.log(  typeof( persona )  ); */

console.log( 'Esta casado ' + persona.casado );
// Actualizo un valor del objeto 
persona.casado = true;
persona['nombre'] = 'Lucas Segundo';


console.log( 'Esta casado ' + persona.casado );

console.log('Ahora me llamo ' + persona['nombre'] );



// Objetos con función constructora 
function Producto( nombre, precio ){
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto('Tv 32', 36000);
const producto2 = new Producto('Laptop Lenovo', 600000);
const producto3 = new Producto('Cafetera', 12000);
const producto4 = new Producto('Microfono', 6000);


console.log( producto1);
console.log( producto1.nombre );

