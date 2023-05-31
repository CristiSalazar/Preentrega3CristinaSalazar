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
let resta = function (a,b,){
    return(a - b)
 }

//Constructor
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let producto1= new Producto ("alma contra alma", 15000, 20)
let producto2 = new Producto ("el quijote", 10000, 25)
let producto3 = new Producto ("las aventuras de mila", 7000, 40)

let lista = [producto1, producto2, producto3]
let compra = []

let carrito = []
const shopContent = document.getElementById("contenidoTienda")
lista.forEach(element => {
    let content = document.createElement("div");
    content.innerHTML = ` 
    <h3>${element.nombre}</h3>
    <p>${element.precio}</p>
    <p>${element.stock}</p>
    `;
    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () => 
        carrito.push(
            {
                nombre : element.nombre,
                precio : element.precio,
                stock : element.stock
            }))
    console.log(carrito)
});

const tablaResumenC = document.getElementById("tabla")
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () =>{
    const tablaResumen = document.createElement("div")
    tablaResumen.innerHTML = `
    <h3>Carrito</h3>
    `
    tablaResumenC.append(tablaResumen);
    const tablaButton = document.createElement("h1")
    tablaButton.innerText = "x";
    tablaResumen.append(tablaButton);

    carrito.forEach((element)=>{
        let carritoContent = document.createElement("div")
        carritoContent.innerHTML = `
        <h3>${element.nombre}</h3>
        <p>${element.precio}</p>
        <p>${element.stock}</p>
        `
        tablaResumenC.append(carritoContent)
    }
    )

    const total = carrito.reduce((ac, el) => ac + el.precio, 0);
    const totalCompra = document.createElement("div")
    totalCompra.innerHTML = `
    Total a pagar: ${total}
    `
    tablaResumenC.append(totalCompra)


    const stockRestante1 = carrito.reduce((ac, el) => ac - el.stock, 20);
    const stockCompra = document.createElement("div")
    stockCompra.innerHTML = `
    Stock que queda: ${stockRestante1}
    `
    tablaResumenC.append(stockCompra)

})




// let listaNombres = lista.map(producto => producto.nombre)



function filtrar(){
    const input = document.getElementById('filtrarP').value
    let palabraClave =input.trim().toLowerCase()
    let resultado = lista.filter((producto)=> producto.nombre.toLowerCase().includes(palabraClave))
    if (resultado.length > 0){
       alert("h")
    }else{
        alert("no se encontró ninguna coincidencia con: "+ palabraClave)
    }
}


// let stockRestante1a =[]
// let stockRestante1 = resta(producto1.stock, libroUno)
// let stockRestante2a = []
// let stockRestante2 = resta(producto2.stock, libroDos)
// let stockRestante3a = []
// let stockRestante3 = resta(producto3.stock, libroTres)

// let precioUnoFinal = []
// let precioDosFinal = []
// let precioTresFinal = []
// let suma1 = 0 
// let suma2 = 0
// let suma3 = 0





         