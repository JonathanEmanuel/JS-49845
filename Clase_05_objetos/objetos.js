const nombre = 'Juan';  // String
const dni = 1234;  // Number
const casado = true;  // Boolean

const saludar = function(nombre){  // function
    alert('Hola ' + nombre + '. Soy una función');
}

// Defino un objeto literal
const persona = { 
    // ATRIBUTOS
    nombre: 'Rocio',        // Los : se utilizan SOLO en los Objeto 
    apellido: 'Ruiz', 
    dni: 2342,
    casado: false,
    edad: 21,
    // MÉTODOS
    saludar: function(){
        alert('Hola soy ' + this.nombre);
    },
    actualizarEstado: function(estado){
        this.casado = estado;
    },
    cumple: function(){
        this.edad ++;
        //this.edad = this.edad + 1;
    }
}

persona.tel = '11-2234-2222';

persona.saludar();

/* console.log( persona );
console.log(  persona.nombre  );
console.log(  typeof( persona )  ); */

console.log( 'Esta casado ' + persona.casado );
// Actualizo un valor del objeto 
persona.casado = true;
//persona['nombre'] = 'Lucas Segundo';


console.log( 'Esta casado ' + persona.casado );

console.log('Ahora me llamo ' + persona['nombre'] );



// Objetos con función constructora 
function Producto( nombre, precio ){
    // Atributos
    this.nombre = nombre;
    this.precio = precio;
    this.precioFINAL = 0;
    // Métodos
    this.sumarIVA = function(){
        this.precioFINAL = this.precio * 1.21;
        alert('El precio es $' + this.precio + ' | Con IVA es $' + this.precioFINAL)
    }
}

const producto1 = new Producto('Tv 32', 36000);
const producto2 = new Producto('Laptop Lenovo', 600000);
const producto3 = new Producto('Cafetera', 12000);
const producto4 = new Producto('Microfono', 6000);

producto1.sumarIVA();

console.log( producto1);
console.log( producto1.nombre );

// VERSION CON CLASES
class Perro {
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    ladrar(){
        alert('woof');
    }
}

const perro1 = new Perro('Laika', 'Negro');
const perro2 = new Perro('Kiyomi', 'Blanco');
const perro3 = new Perro('pancho', 'Marron');


console.log(perro1);