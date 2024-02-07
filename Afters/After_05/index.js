const modal = new bootstrap.Modal('#modalCarrito', {});
const btnModalCarrito = document.querySelector('#btnModalCarrito');
const cartCount = document.querySelector('#cartCount');
const cartSum = document.querySelector('#cartSum');
const inputSearch = document.querySelector('#inputSearch');
const listProducts = document.querySelector('#listProducts');
const selectCategory = document.querySelector('#selectCategory');
const modalListProducts = document.querySelector('#modalListProducts');
const btnClose = document.querySelector('#btnClose');
const btnSave = document.querySelector('#btnSave');
const btnOrder = document.querySelector('#btnOrder');

let products_list = [];

const listCart = JSON.parse( localStorage.getItem('cart') ) || [];
const cart = new Cart(listCart);

cartCount.innerText = cart.getCount();


btnModalCarrito.addEventListener('click', function(){
    const list = cart.getProducts();
    cartSum.innerText = cart.getSum();

    redenCart( list );

    modal.show();
})

btnSave.addEventListener('click', ()=> {
    console.log('Inicio')
    setTimeout( () => {

        
        Swal.fire({
            title: "Carrito de Compras",
            text: "Compra finalizada",
            icon: "success"
        });
    

    }, 3000)


    modal.hide();
   
    localStorage.removeItem('cart');
})

btnClose.addEventListener('click', ()=> {
    modal.hide();
})

inputSearch.addEventListener('input', (event) => {
    const search = event.target.value; // inputSearch.valur
    const newList = products_list.filter(  (product) => product.name.toLowerCase().includes( search.toLowerCase() )  );
    renderProducts(newList);
})

selectCategory.addEventListener('change', (e) => {
    const id_category = selectCategory.value;
    console.log('Cateoría', id_category )

    filtroCategoria( id_category )
})

btnOrder.addEventListener('click', ()=> {
    products.sort(  (a, b ) => {
        if(  a.price < b.price  ){
            return -1
        }
        if ( a.price > b.price){
            return 1
        }

        return 0
    } )

    renderProducts(products)
    btnOrder.setAttribute('disabled', true)
})

const filtroCategoria = ( id_category ) => {
    const newList = products_list.filter (  (product) => product.id_category == id_category );
    renderProducts(newList);

    //console.table(newList);
}

 /* ------- Recibe la lista de productos y la recorre y loos renderizas ------- */
const renderProducts = (list) => {
    listProducts.innerHTML = '';
    list.forEach(product => {
        listProducts.innerHTML += // html
            `<div class="col-sm-4 col-md-3">
                <div class="card p-2">
                    <h4 class="text-center">${product.name} </h4>
                    <img class="img-fluid" src="${product.img}" alt="${product.name}">
                    <h3 class="text-center">$${product.price} </h3>
                    <button id="${product.id_product}" type="button" class="btn btn-primary btnAddCart">
                        <i class="fa-solid fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>`;
    });

    /* -------------- Agrege el escuchador de eventos a los botones ------------- */
    const btns = document.querySelectorAll('.btnAddCart');
    btns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

}

const addToCart = ( e )=> {
    const id = e.target.id;
    const product = products.find( item => item.id_product == id );
    console.table(product);
    cart.addToCart( product);
    cartCount.innerText = cart.getCount();
    
    Toastify({
        close: true,
        text: "Producto agregado al Carrito",
        gravity: 'bottom',
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
    }).showToast();

}

const redenCart = (list) => {
    modalListProducts.innerHTML = '';
    list.forEach( product => {
        modalListProducts.innerHTML += // html
            `<tr>
                <td> ${product.name} </td>
                <td> ${product.units}</td>
                <td>$${product.price}</td>
                <td>$${product.price * product.units}</td>
            </tr>`
    });
}

const renderCategory = ( list) => {
    selectCategory.innerHTML = '';
    list.forEach( category => {
        selectCategory.innerHTML += // html
        `<option value="${category.id_category}"> ${category.name}</option>`
    });
}

// hacemos una solicitud AJAX -> Fetch
const getProducts = async () => {

    try {
        const endPoint = 'data.json';
        const resp = await fetch(endPoint);
        const json = await resp.json();


        const { products, category } = json;
        products_list = products;
        console.table( category)
        renderProducts( products);
        renderCategory( category)

    } catch (error) {
        Swal.fire({
            title: "Error",
            text: 'Ocurrio un error al mostrar los Productos, por favor intente más tarde :)',
            icon: "error",
            confirmButtonText: 'Aceptar'
        });

        console.log(error)
    }


}

getProducts();
