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




/* let equipo1 = prompt('Equipo 1');
let goles1 = prompt('Goles 1'); // 3

let equipo2 = prompt('Equipo 2');
let goles2 = prompt('Goles 2');  // 2
   //   3  >     2 
if ( goles1 > goles2 ) {
    let mensaje = 'Gano ' + equipo1 ;
    alert( mensaje);
}

// 📌 Un solo = es Asignación y == es comparación 
if ( goles1 == goles2 ) {
    let mensaje = 'Los equipos empataron' ;
    alert( mensaje);
}
 */
