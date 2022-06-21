let divProductos = document.getElementById('divProductos')
let cartArray = []
if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart'))
} else {

    localStorage.setItem('cart', JSON.stringify(cartArray))
}
// infomarcion de los productos como precio, stock, nombre y marca
fetch('productos.json')
    .then(response => response.json())
    .then(productos => {

        productos.forEach(producto => {
            let imageLink = "";
            if (producto.nombre === "Botines") {
                imageLink = "https://images.unsplash.com/photo-1597274747316-808c6786c165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

            } else if (producto.nombre === "Jersey") {
                imageLink = "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
            } else if (producto.nombre === "Shorts") {
                imageLink = "https://images.unsplash.com/photo-1601393709771-3938c63d41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80";
            } else if (producto.nombre === "Calcetas") {
                imageLink = "https://images.unsplash.com/photo-1511110011044-5ce8fb4e7b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";
            } else if (producto.nombre === "Espinilleras") {
                imageLink = "https://media.istockphoto.com/photos/shin-guard-picture-id855913132?s=612x612";
            }

            divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem; margin: 4px;">
            <div class="card-header">Ropa Deportiva</div>
            <img src="${imageLink}" width="200px" height="200px>
            <div class="card-body">
                <h4 class="card-title"> ${producto.nombre}</h4>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <button class="btn btn-secondary" id="boton${producto.id}">Agrega al carrito</button>
            </div>
        </div>
      `

        });


        // agrega el producto en el carrito y nos da una notificacion de que lo hemos hecho.
        productos.forEach((productoEnArray, indice) => {
            document.querySelector(`#boton${indice + 1}`).addEventListener('click', () => {
                let productoCarrito = productos[indice]
                cartArray.push(productoCarrito)
                localStorage.setItem('cart', JSON.stringify(cartArray))
                Toastify({
                    text: `Producto ${productoCarrito.nombre} Agregado al carrito`,
                    duration: 1000,
                    newWindow: false,
                    close: true,
                    gravity: "bottom",
                    position: "center",
                    stopOnFocus: false,
                    style: {
                        background: "radial-gradient(circle at 4.07% 76.52%, #ffa51c 0, #FF6600 10%, #FF6600 20%, #FF6600 30%, #FF3300 40%, #EE176F 50%, #FF0000 60%, #cc015b 70%, #b6005d 80%, #FD1C03 90%, #FF6600 100%)",
                    },
                }).showToast();
            })

        })
    })



const productos = async () => {
    let promesa = await fetch('productos.json')
    let productos = await promesa.json()

    return productos
}
productos().then(producto => console.log(producto))






