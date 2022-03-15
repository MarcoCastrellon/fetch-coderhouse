function obtenerGolosinas () {
    const dulces = 'productos.json';
    fetch(dulces)
    .then( resultado =>  resultado.json())
    .then(datos => {
        //  console.log(datos.golosinas)
         const { golosinas } = datos;
         golosinas.forEach( golosina => {
             console.log(golosina.id)
             console.log(golosina.nombre)
             console.log(golosina.precio)
         })

    })
}

obtenerGolosinas()