const body = document.querySelector('body');
const productsRow = document.querySelector('#products');
const btnGet = document.querySelector('#btnGet');
const btnGetProducts = document.querySelector('#btnGetProducts');
const comentarios = document.querySelector('#comentarios');
const mostrarLoading = () => { body.classList.remove('loaded') }
const ocultarLoading = () => { body.classList.add('loaded') }



const renderProducts = (data) => {
    productsRow.innerHTML = '';
    data.forEach(product => {
        productsRow.innerHTML += // html
                    `<div class="card">
                            <div class="card-header">
                                <h4>${product.name}</h4>
                            </div>
                            <div class="card-body">
                                <img src="${product.img}" alt="${product.name}" class="img-responsive">
                                <h4>$${product.price}</h4>
                                <button class="btn" type="button">Comprar</button>
                            </div>
                    </div>`
    });
}

const renderComment = (lista) => {
    console.table(lista)
    comentarios.innerHTML = '';
    lista.forEach(comentario => {
        comentarios.innerHTML += 
        `<div class="comentario">
            <h4> ${comentario.email}</h4>
            <p>
                ${comentario.body}
            </p>
        </div>`
    });

}

// FETCH A UN SERVIDOR
btnGet.addEventListener('click', ()=> {
    console.log('Click');
    mostrarLoading();
    comentarios.innerHTML = '';

    const endPoint = 'https://jsonplaceholder.typicode.com/comments';
    // Fetch del tipo GET
    fetch( endPoint)
        .then( respuesta =>  respuesta.json())
        .then( respJSON => {
            console.log(respJSON);

            renderComment( respJSON );
        }).catch( error=> {
            console.error( error)
            Swal.fire({
                title: "Upss tenemos un problema",
                text: 'Ocurrio un error en el servidor. Por favor intente más tardes',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        })
        .finally( ()=> {
            ocultarLoading();
        })
})


const getProductPromesa = () => {
    mostrarLoading();
    const endPoint = 'models/data.json';
    fetch(endPoint)
        .then( respuesta =>  respuesta.json())
        .then( resp => {  // Se cumplio la promesa
            const data = resp.data;
            const categorias = resp.category;

            console.table(categorias);
            console.log(data);
            renderProducts(data);

        }).catch( error => { // Fallo la promesa
            Swal.fire({
                title: "Error",
                text: 'Ocurrio un error',
                icon: "error",
                confirmButtonText: 'Aceptar'
            });

        }).finally ( ()=> {
            ocultarLoading();
        })
}

const getProduct = async () => {
    mostrarLoading();

    try {
        const endPoint = 'models/data.json';
        const response  = await fetch(endPoint);
        const json = await response.json()
        renderProducts(json.data);
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: 'Ocurrio un error',
            icon: "error",
            confirmButtonText: 'Aceptar'
        });
    }

    ocultarLoading();
}






/* ------------------------------- FECHT LOCAL ------------------------------ */
btnGetProducts.addEventListener('click', () => {
   getProduct();
  
})
