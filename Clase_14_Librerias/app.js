const btnSaludar = document.querySelector('#btnSaludar');
let nombre = prompt('Nombre');

Swal.fire({
    title: "Clase 14 -",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
        console.log(login)
    },
  }).then((result) => {
        console.log(result)
  });


const agregar = () =>{
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((resultado) => {
        console.log(resultado);
        if (resultado.isConfirmed) {
            console.log('Producto Agregado al carrito')
        } else {
            console.log('No se agrergo :(')
        }
    })
}


const mostrarMensaje = ( msg, type) => {

    Swal.fire({
        title: "Clase 14 :D",
        text: msg,
        icon: type,
        confirmButtonText: 'Aceptar'
    });
}



const mostrarError = ( texto ) => {
    Swal.fire({
        imageUrl: "js.png",
        imageWidth: 64,
        imageHeight: 64,
        imageAlt: "Logo",
        title: "APP de Compras",
        text: texto,
      /*   icon: "error", */
        confirmButtonText: 'Aceptar'
    });
}


const mensaje = () => { 
   
    const mensaje = `Hola ${nombre}`;

    Swal.fire({
        title: "Clase 14 :D",
        text: mensaje,
        icon: "success",
        confirmButtonText: 'Aceptar'
    });

};

btnSaludar.addEventListener('click', mensaje);

//mostrarError('No tenemos Conexión a la RED');