//Constructor
class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let producto1= new Producto (1, "El principito", 15000, src="./El_principito.jpg")
let producto2 = new Producto (2, "Don Quijote de la Mancha", 10000, src="./Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png")
let producto3 = new Producto (3, "Mujercitas", 7000, src="./mujercitas.jpeg")
let producto4 = new Producto (4, "Orgullo y prejuicio", 8000, src="./orgullo-y-prejuicio.png")


let lista = [producto1, producto2, producto3, producto4]
let compra = []

let carrito = JSON.parse(localStorage.getItem("libros")) || [];

//Crear recorrido de productos
const shopContent = document.getElementById("shopContent")

const getProductos = async() => {
    const response = await fetch("productos.json")
    const data = await response.json()
    data.forEach(element => {
        let content = document.createElement("div");
        content.className = "contenedorDeLibros";
        content.innerHTML = ` 
            <h3>${element.nombre}</h3>
            <p>Precio: $${element.precio}</p>
            <img src= ${element.imagen}>
            `;
        shopContent.append(content);
    
    //Botón de comprar
    
        let comprar = document.createElement("button")
        comprar.className = "agregar"
        comprar.innerText = "Agregar";
        content.append(comprar);
    
        comprar.addEventListener("click", () => 
            carrito.push(
                {   id : element.id,
                    nombre : element.nombre,
                    precio : element.precio,
                    imagen : element.imagen,
                }))
        console.log(carrito)
    });

}
getProductos()


// Crear Carrito

const tablaDeContenedor = document.getElementById("tablaContenedor")

const verCarrito = document.getElementById("verCarrito")

const llenarCarrito = () => {
    tablaDeContenedor.innerHTML= ""
    const tablaCompra = document.createElement("div");
    tablaCompra.className = "tablaCompra";
    tablaCompra.innerHTML = `
    <h3 class="tablaCompraTitulo">Carrito</h3>
    `
    tablaDeContenedor.append(tablaCompra);


    carrito.forEach((element)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
        <h3>${element.nombre}</h3>
        <p>Precio: $${element.precio}</p>
        `
        tablaDeContenedor.append(carritoContent)

        let eliminar = document.createElement("button");
        eliminar.innerText = "Borrar";
        eliminar.className = "borrarProducto";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarLibro)
        guardarLocal()
    }
    )


    //Calcular total del carrito
    const total = carrito.reduce((ac, el) => ac + el.precio, 0);
    const totalCompra = document.createElement("div")
    totalCompra.innerHTML = `
    Total a pagar: ${total}
    `
    tablaDeContenedor.append(totalCompra)

}

verCarrito.addEventListener("click", llenarCarrito)

// Eliminar del carrito
const eliminarLibro = () => {
    const encontrarID = carrito.find((element)=>element.id);
    carrito = carrito.filter((carritoId) => {
       return carritoId !== encontrarID;
   });
   llenarCarrito();

}


// Filtrar producto

 function filtrar(){
     const input = document.getElementById('filtrarP').value
     let palabraClave =input.trim().toUpperCase()
     let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

     if (resultado.length > 0){
        let mensaje = "";
        resultado.forEach(function(resultad){
            mensaje += resultad.nombre + "\n" + "Precio: " + resultad.precio + ". "
        })

        Swal.fire({
            icon: 'success',
            title: "Lo tenemos disponible",
            text: mensaje
          })
     }else{
         Swal.fire({
            icon: 'error',
            title: 'Lo lamentamos',
            text: "no se encontró ninguna coincidencia con: "+ palabraClave,
            footer: '<a href="">¿Por qué tengo este problema?</a>'
          })
     }
 }
 

 //Botón filtrar
 let filtro = document.getElementById("filtrar")
 filtro.addEventListener("click", () => 
     filtrar())

// LocalStorage
const guardarLocal = () =>
{
    localStorage.setItem("libros", JSON.stringify(carrito));
}


















         