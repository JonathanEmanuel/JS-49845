const precio =  parseFloat( prompt('Ingrese el precio') );
const saldo = 5000;
// ✏ Validar que se un número

console.log(precio);
if(  precio > saldo ) {
    alert('🛑 Fondos insuficientes!');

} else if ( precio == saldo) {
    alert('Te quedastes en banca rota 😥');

} else {
    alert('Segui gastando 😁');
}

