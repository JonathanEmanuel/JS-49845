const body = document.querySelector('body');
const btnGet = document.querySelector('#btnGet');
const row = document.querySelector('.row');
const products = [
    { id: 1, name: 'Gabinete', img: 'images/gabinete.png', price: 1000, category: 'computacion' },
    { id: 2, name: 'Auriculares Motorola', img: 'images/audio.png', price: 200, category: 'computacion' },
    { id: 3, name: 'Teclado DRAGONBORN K630', img: 'images/teclado.png', price: 300, category: 'computacion' },
    { id: 4, name: 'Celular Motorola E22', img: 'images/motorola.jpg', price: 500, category: 'celular' }
]


const mostrarLoading = () => { body.classList.remove('loaded') }
const ocultarLoading = () => { body.classList.add('loaded') }

const getProducts = (jwt) => {
                // cumplir o Fallar
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            if( jwt == '123abc'){
                resolve({status: 'ok', data: products })
            } else {
                reject({status: 'error', data: [] });
            }
        }, 3000 )
    })
}

const renderizar = (data) => {
    row.innerHTML = '';
    data.forEach(product => {
        row.innerHTML += // html
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

btnGet.addEventListener('click', () => {
   
    mostrarLoading();

    getProducts('123abc')
        .then( resp => {  // Se cumplio la promesa
            const data = resp.data;
            renderizar(data);

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
})