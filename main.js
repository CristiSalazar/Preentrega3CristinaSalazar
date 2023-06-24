//Declaración de variables
let tipoDeLibro = ""
let continuar = true
let libroUno = 0
let libroDos = 0
let libroTres = 0
let precioUno = 0
let precioDos = 0
let precioTres = 0 

// Operaciones
let multiplicacion = function (a, b){
    return(a * b)
}
let resta = function (a,b){
    return(a - b)
 }

//Constructor
class Producto {
    constructor(id, nombre, precio, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = resta(stock,1);
        this.imagen = imagen;
    }
}

let producto1= new Producto (1, "El principito", 15000, 5, src="./El_principito.jpg")
let producto2 = new Producto (2, "Don Quijote de la Mancha", 10000, 25, src="./Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png")
let producto3 = new Producto (3, "Mujercitas", 7000, 40, src="./mujercitas.jpeg")
let producto4 = new Producto (4, "Orgullo y prejuicio", 8000, 20, src="./orgullo-y-prejuicio.png")


let lista = [producto1, producto2, producto3, producto4]
let compra = []

let carrito = JSON.parse(localStorage.getItem("libros")) || [];

//Crear recorrido de productos
const shopContent = document.getElementById("shopContent")


lista.forEach(element => {
    let content = document.createElement("div");
    content.className = "contenedorDeLibros";
    content.innerHTML = ` 
        <h3>${element.nombre}</h3>
        <p>Precio: $${element.precio}</p>
        <p>Stock: ${element.stock}</p>
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
                stock : element.stock,
                imagen : element.imagen,
            }))
    console.log(carrito)
});




// Crear Carrito

const tablaDeContenedor = document.getElementById("tablaContenedor")

const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () =>{
    const tablaCompra = document.createElement("div");
    tablaCompra.className = "tablaCompra";
    tablaCompra.innerHTML = `
    <h3 class="tablaCompraTitulo">Carrito</h3>
    `
    tablaDeContenedor.append(tablaCompra);
    const tablaButton = document.createElement("h1")
    tablaButton.innerText = "x";
    tablaButton.className = "tabla-compra-boton";
    tablaCompra.append(tablaButton);

    carrito.forEach((element)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
        <h3>${element.nombre}</h3>
        <p>${element.precio}</p>
        <p>${element.stock}</p>
        `
        tablaDeContenedor.append(carritoContent)

        // //Compra exitosa
        // let compraExitosa = document.getElementById("compraExitosa")
        // compraExitosa.addEventListener("click", () => 
        //     alert("hola"))




        let eliminar = document.createElement("span");
        eliminar.innerText = "x";
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


//Calcular stock restante

    const stockRestante1 = carrito.reduce((ac, el) => ac - el.stock, 20);
    // const stockCompra1 = document.createElement("div")
    // stockCompra1.innerHTML = `
    // Stock que queda: ${stockRestante1}
    // `
    // tablaDeContenedor.append(stockCompra1)

})


let stockRestante1a =[]
let stockRestante1 = resta(producto1.stock, libroUno)
let stockRestante2a = []
let stockRestante2 = resta(producto2.stock, libroDos)
let stockRestante3a = []
let stockRestante3 = resta(producto3.stock, libroTres)

// Eliminar del carrito
const eliminarLibro = () => {
    const encontrarID = carrito.find((element)=>element.id);
    carrito = carrito.filter((carritoId) => {
       return carritoId !== encontrarID;
   });

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

















         