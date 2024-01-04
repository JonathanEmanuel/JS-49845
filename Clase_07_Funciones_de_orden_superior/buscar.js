const productos = [
    {nombre: 'tv', precio: 230000, envioGratis: true},
    {nombre: 'PS4', precio: 530000, envioGratis: false},
    {nombre: 'Mouse', precio: 30000, envioGratis: true}
]

const encontrado = productos.find( (item) => (item.precio < 10000 && item.envioGratis == true ))


const subaPrecios = productos.map( (item )=> item.precio * 1.5)


productos.sort( (a, b) => {
    if( a.precio > b.precio){
        return 1
    }

    if( a.precio < b.precio){
        return -1
    }
    return 0
})