let cartDiv = document.getElementById('cartDiv');

let cartArray = JSON.parse(localStorage.getItem('cart'));
let precioTotal = 0



function updatePrice(precio) {
    cartDiv.innerHTML += `
    <div>Precio total es de $${precio}</div> 
    `
}


// suma cada producto en el carrito
function loadProduct(cartArray) {
    cartDiv.innerHTML = ""
    console.log(cartArray)
    cartArray.forEach((productoCarrito, indice) => {
        precioTotal += productoCarrito.precio

        cartDiv.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${indice}" style="max-width: 540px;">
                
            <div class="col-md-8">
                <div class="card-body">
               
                <h5 class="card-title">${productoCarrito.nombre}</h5>
                
                <p class="card-text">$${productoCarrito.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${indice}">Descartar</button>
            </div>
            </div>
            </div>
        </div>
    `

    })
    updatePrice(precioTotal)
    console.log(precioTotal)
    testProduct(cartArray)

}

// esta funcion es para eliminar productos no deseados en el carrito
function testProduct(cartArray) {
    cartArray.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${indice}`).addEventListener('click', () => {
            precioTotal = precioTotal - productoCarrito.precio
            console.log(`Producto ${productoCarrito.nombre} eliminado`)
            document.getElementById(`productoCarrito${indice}`).remove()
            let index = cartArray.findIndex(item => { return item.id === productoCarrito.id })
            cartArray.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cartArray))
            console.log(precioTotal)
        })
    })
    //updatePrice(precioTotal)
}


loadProduct(cartArray)

/*cartDiv.innerHTML += `
<div>Precio total es de $${precioTotal}</div> 
`*/