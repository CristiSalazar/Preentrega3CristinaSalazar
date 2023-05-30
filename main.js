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

const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () =>{
    console.log("probando")
})



// let listaNombres = lista.map(producto => producto.nombre)



function filtrar(){
    const input = document.getElementById('filtrarP').value
    let palabraClave =input.trim().toLowerCase()
    let resultado = lista.filter((producto)=> producto.nombre.toLowerCase().includes(palabraClave))
    // if (resultado.length > 0){
    //    alert("hola")
    // }else{
    //     alert("no se encontró ninguna coincidencia con: "+ palabraClave)
    // }
    if (resultado.length > 0) {
        const container = document.createElement('div');
        container.classList.add('card-container');
  
    
        resultado.forEach((producto) => {
          const card = document.createElement('div');
          card.classList.add('card');
    
          const nombre = document.createElement('h2');
          nombre.textContent = producto.nombre;
          card.appendChild(nombre);
    
          const precio = document.createElement('p');
          precio.textContent = `Precio: ${producto.precio}`;
          card.appendChild(precio);
    
          const stock = document.createElement('p');
          stock.textContent = `Stock: ${producto.stock}`;
          card.appendChild(stock);
          
  
  
  
  
          const fotoProducto = document.createElement('img');
          stock.textContent = `imagen: ${producto.img}`;
          card.appendChild(img);
  
  
          container.appendChild(card);
        });
    
        body.appendChild(container);
      } else {
        alert('No se encontraron coincidencias');
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

//  while(continuar===true){
//      tipoDeLibro = prompt("Seleccione el libro que desea comprar: " + listaNombres.join(", ") + ".").toLowerCase() 
//      while(tipoDeLibro==="" || tipoDeLibro !== "alma contra alma" && tipoDeLibro !== "el quijote" && tipoDeLibro !== "las aventuras de mila"){
//          tipoDeLibro = prompt("Lo sentimos, debe escoger un nombre válido: Alma contra alma, El Quijote, Las aventuras de Mila")
//      }

//      switch(tipoDeLibro){
//          case producto1.nombre:
//             libroUno= parseInt(prompt("El costo de " + producto1.nombre + " es de " + producto1.precio + " y nos quedan " + stockRestante1 + " en stock, ¿Cuántos desea comprar?"))
//                 if(libroUno >= 1){
//                     precioUno = multiplicacion(libroUno, 15000)
//                     precioUnoFinal.push(precioUno)
//                     suma1 = precioUnoFinal.reduce((a, b) => a + b, 0)
//                     compra.push(producto1.nombre)
//                     stockRestante1 = resta(stockRestante1, libroUno)
//                     stockRestante1a.push(stockRestante1)
//                 }else{
//                     precioUno = 0
//                     alert("No ingresamos su compra, gracias por su tiempo") 
//                 }
//          break
//          case producto2.nombre:
//              libroDos = parseInt(prompt("El costo de " + producto2.nombre + " es de " + producto2.precio + " y nos quedan " + stockRestante2 + " en stock, ¿Cuántos desea comprar?"))
//              if(libroDos >= 1){
//                  precioDos = multiplicacion(libroDos, 10000)
//                  precioDosFinal.push(precioDos)
//                  suma2 = precioDosFinal.reduce((a, b) => a + b, 0)
//                  compra.push(producto2.nombre)
//                  stockRestante2 = resta(stockRestante2, libroDos)
//                  stockRestante2a.push(stockRestante2)
//              }else{
//                  precioDos=0
//                  alert("No ingresamos su compra, gracias por su tiempo")
//              }
//          break
//          case producto3.nombre:
//              libroTres = parseInt(prompt("El costo de " + producto3.nombre + " es de " + producto3.precio + " y nos quedan " + stockRestante3 + " en stock, ¿Cuántos desea comprar?"))
//              if(libroTres >=1){
//                  precioTres = multiplicacion(libroTres, 7000)
//                  precioTresFinal.push(precioTres)
//                  suma3 = precioTresFinal.reduce((a, b) => a + b, 0)
//                  compra.push(producto3.nombre)
//                  stockRestante3 = resta(stockRestante3, libroTres)
//                  stockRestante3a.push(stockRestante3)
//              }else{
//              precioTres = 0
//              alert("No ingresamos su compra, gracias por su tiempo")
//              }
//          break
//      }
//      if (libroUno >=1 || libroDos >= 1 || libroTres >= 1 ){
//          continuar = confirm("Su compra ha sido ingresada, desea agregar otro libro")
//      }
//  }

// let sumar = function (a,b,c){
//    return (a + b + c)
// }

// alert("Su compra consiste en el(los) libro(s): " + compra.join(", ") + " , con un costo total de compra de: " + sumar(suma1, suma2, suma3) + " pesos. Muchas gracias por su compra.")

