let opcion = prompt('Opcion');

opcion = opcion.toLowerCase();

switch ( opcion) {
    case 'a':
        console.log('Se selecciono A');
        break;
    case 'b':
        console.log('Se selecciono B');
        break;
    case 'c':
        console.log('Se selecciono C');
        break;
    default:
        console.log('Opción invalida');
        break;
}