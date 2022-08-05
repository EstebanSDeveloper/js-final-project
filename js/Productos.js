const productos = [
 {
    id: 100,
    nombre: "Skull Hipster Ring",
    img: "../imagenes/our_collection/Anillos.jpg",
    precio: 80,
    categoria: "Rings",
 },

 {
    id: 101,
    nombre: "Dragon tail",
    img: "../imagenes/our_collection/Cadenas.jpg",
    precio: 110,
    categoria: "Chains",
 },

 {
    id: 102,
    nombre: "Leather black",
    img: "../imagenes/our_collection/Pulseras-2.jpg",
    precio: 180,
    categoria: "Bracelets",
 },

 {
    id: 103,
    nombre: "Metal fence",
    img: "../imagenes/our_collection/Aretes.jpg",
    precio: 70,
    categoria: "Earrings",
 },

 {
    id: 104,
    nombre: "Blades of olympus",
    img: "../imagenes/our_collection/Llaveros.jpg",
    precio: 80,
    categoria: "Keychains",
 },

 {
    id: 105,
    nombre: "Crow Ring",
    img: "../imagenes/our_collection/crow_ring.jpg",
    precio: 90,
    categoria: "Rings",
 },

 {
    id: 106,
    nombre: "Red Skin Indian",
    img: "../imagenes/our_collection/indian.jpg",
    precio: 70,
    categoria: "Rings",
 },

 {
    id: 107,
    nombre: "Skulls",
    img: "../imagenes/our_collection/skulls.jpg",
    precio: 80,
    categoria: "Rings",
 },

 {
    id: 108,
    nombre: "Shen Long",
    img: "../imagenes/our_collection/Shen Long_.jpg",
    precio: 200,
    categoria: "Bracelets",
 },
 

]

// ALMACENAR LA INFORMACION EN LOCAL STORAGE

let aux = localStorage.getItem('productosEnCarro')
let productosEnCarro;

if (!aux) {
   productosEnCarro = [];
}else{
   productosEnCarro = JSON.parse(aux);
   pintarProductosEnCarro();
}


// FUNCION METER AL CARRO QUE ESTA ANCLADA AL ONCLICK DEL BOTON DE ABAJO

function meterAlCarro(objetoProducto) {
   productosEnCarro.push(objetoProducto);
   localStorage.setItem('productosEnCarro', JSON.stringify(productosEnCarro));
   pintarProductosEnCarro();  
}

//FUNCION BORRAR DEL CARRO

function borrarDelCarro(id) {
   productosEnCarro.splice(id, 1);
   localStorage.setItem('productosEnCarro', JSON.stringify(productosEnCarro));
   pintarProductosEnCarro();  
}

// FUNCION PARA CREAR PRODUCTOS

function pintarListadoDeProductos (){
   let aux = '';
   for (let i = 0; i < productos.length; i++) {
       // este aux = aux + es un acumulador, como let aux comienza vacia alli le agrego lo primero y le va a gregando lo siguiente y asi etc
       aux =
       aux +
    `<div class="col store-product ${productos[i].categoria}">
            <div class="card h-100">
            <img src="${productos[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                      <h5 class="card-title">${productos[i].nombre}</h5>
                      <p class="card-text">$ ${productos[i].precio}</p>
                      <p class="card-text"> <class="${productos[i].categoria}"> Category: ${productos[i].categoria}</p>
                      <p class="card-text"> Product ID: ${productos[i].id} </p>
                      <button onclick="meterAlCarro({ID: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}}), clickAdd()" class="card-button">Add to car <p hidden>${productos[i].id}</p></button>
                </div>
            </div>
    </div>
    `

   }

   //Con esta linea es que imprimo en el html la funcion que acabo de crear
   document.getElementById("tienda").innerHTML = aux;
}
pintarListadoDeProductos()


//FUNCION PINTAR PRODUCTOS EN EL CARRO

function pintarProductosEnCarro(){
   let aux = '';
   for (let i = 0; i < productosEnCarro.length; i++) {
       // este aux = aux + es un acumulador, como let aux comienza vacia alli le agrego lo primero y le va a gregando lo siguiente y asi etc
       aux = aux + `
   <div class="col store-product ${productosEnCarro[i].categoria}">
           <div class="card h-100">
           <img src="${productosEnCarro[i].img}" class="card-img-top" alt="...">
               <div class="card-body">
                     <h5 class="card-title">${productosEnCarro[i].nombre}</h5>
                     <p class="card-text">$ ${productosEnCarro[i].precio}</p>
                     <p class="card-text"> <class="${productosEnCarro[i].categoria}"> Category: ${productosEnCarro[i].categoria}</p>
                     <p class="card-text"> Product ID: ${productosEnCarro[i].id} </p>
                     <button onclick="borrarDelCarro(${i})" class="card-button toast-position">Delete Product<p hidden>${productosEnCarro[i].id}</p></button>
               </div>
           </div>
   </div>
   `
   //Con esta linea es que imprimo en el html la funcion que acabo de crear
   //document.getElementById('carrito').innerHTML = aux;
   document.getElementById("div-carrito").innerHTML = aux;
};
}

// FILTRADO DE PRODUCTOS

let btns = document.querySelectorAll('.btn');
let storeProducts = document.querySelectorAll('.store-product');


for (i = 0; i < btns.length; i++) {

   btns[i].addEventListener("click", (e) =>{
      e.preventDefault();

      const filter = e.target.dataset.filter;
      //console.log(filter)

      storeProducts.forEach((product)=> {
         if (filter === 'botonAll'){
            product.style.display = 'block';
         }else {
            if (product.classList.contains(filter)){
               product.style.display = 'block';
            } else {
               product.style.display = 'none';
            }
         }
      }); 
   });
};

// FIN FILTRADO DE PRODUCTOS








// TOASTIFY

function clickAdd() {
   Toastify({
      text: "Added to Car !",
      duration: 3000,
      gravity: 'bottom',
      position: 'right',
      style: {
          background: '#e9e2c4',
          color: '#000000',
          border: '10px',     
         },
      // para poner una clase de css
      className: 'card-button',
      

  }).showToast();
}

