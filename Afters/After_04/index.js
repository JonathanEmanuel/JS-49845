const modal = new bootstrap.Modal('#modalCarrito', {});
const btnModalCarrito = document.querySelector('#btnModalCarrito');


btnModalCarrito.addEventListener('click', function(){
    modal.show();
})