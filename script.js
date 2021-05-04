class Producto {
  constructor(id, descripcion, precio, image, sale) {
    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
    this.image = image;
    this.sale = sale;
  }

  get_id() {
    return this.id;
  }
  get_descripcion() {
    return this.descripcion;
  }
  get_precio() {
    return this.precio;
  }
  set_id(nuevoId) {
    this.id = nuevoId;
  }
  set_descripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }
  set_precio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }
}

let productos = new Array();
productos.push(
  new Producto(
    "bicicleta",
    "Bicicleta rodado 26 Urbana",
    14000,
    "./img/web1.jpg",
    0
  )
);
productos.push(
  new Producto(
    "notebook",
    "Notebook Lenovo S145 Intel I5",
    98550,
    "./img/web3.jpg",
    0
  )
);
productos.push(
  new Producto(
    "kayak",
    "Kayak Rocker Mirage 2 A 3 Pers.",
    74244,
    "./img/kayak.jpg",
    0
  )
);
productos.push(
  new Producto(
    "rasp",
    "Raspberry Pi 4 Model B 2gb Element14",
    7799,
    "./img/web4.jpg",
    0
  )
);
productos.push(
  new Producto(
    "whisky",
    "Whisky Johnnie Walker Black Label 750ml ",
    9500,
    "./img/whisky.jpg",
    0
  )
);
productos.push(
  new Producto(
    "sillongamer",
    "Sillón Pro Gamer Momentum ",
    19320,
    "./img/sillagamer.jpg",
    0
  )
);
productos.push(
  new Producto(
    "saxo",
    "Saxo Alto Custom Dorado Parquer + Estuche",
    85259,
    "./img/saxo.jpg",
    0
  )
);
let carrito = new Array();
var cantProductos = 0;

let eventos = document.getElementsByClassName("button2");// guardo en le eventos(array) los botones de agregar al carrito
for (const iterator of eventos) {
  iterator.addEventListener("click", (event) => {
    cantProductos++; 
    switch (iterator.id) {
      case "bike":
        console.log("Compramos una bicicleta");
        let bicicleta = productos.find((product) => product.id === "bicicleta");
        if (bicicleta.sale === 0) {
          bicicleta.sale++;
          carrito.push(bicicleta);
        } else {
          bicicleta.sale++;
        }

        break;
      case "notebook":
        console.log("Compramos la notebook");
        let notebook = productos.find((product) => product.id === "notebook");

        if (notebook.sale === 0) {
          notebook.sale++;
          carrito.push(notebook);
        } else {
          notebook.sale++;
        }

        //
        break;
      case "kayak":
        console.log("Compramos el kayak");
        let kayak = productos.find((product) => product.id === "kayak");
        if (kayak.sale === 0) {
          kayak.sale++;
          carrito.push(kayak);
        } else {
          kayak.sale++;
        }

        break;
      case "rasp":
        console.log("Compramos el raspberry 4");
        let rasp = productos.find((product) => product.id === "rasp");
        if (rasp.sale === 0) {
          rasp.sale++;
          carrito.push(rasp);
        } else {
          rasp.sale++;
        }
        break;
      case "saxo":
        console.log("Compramos un saxo");
        let sax = productos.find((product) => product.id === "saxo");
        if (sax.sale === 0) {
          sax.sale++;
          carrito.push(sax);
        } else {
          sax.sale++;
        }
        break;
      case "whisky":
        console.log("Compramos un whisky");
        let whisk = productos.find((product) => product.id === "whisky");
        if (whisk.sale === 0) {
          whisk.sale++;
          carrito.push(whisk);
        } else {
          whisk.sale++;
        }

        break;
      case "sillongamer":
        console.log("Compramos el raspberry 5");
        let sillagamer = productos.find(
          (product) => product.id === "sillongamer"
        );
        if (sillagamer.sale === 0) {
          sillagamer.sale++;
          carrito.push(sillagamer);
        } else {
          sillagamer.sale++;
        }
        break;
      default:
        console.log(`Sorry, nose`);
    }
    var list = document.getElementById("carrito"); // Get the <ul> element with id="myList"
    var eliminar = document.getElementById("childSpan");
    list.removeChild(eliminar); // Remove <ul>'s first child node (index 0)
    const p = document.createElement("span");
    p.setAttribute("id", "childSpan");
    p.textContent = cantProductos;
    document.getElementById("carrito").appendChild(p);
  });
}

document.getElementById("compra").addEventListener("click", (event) => {
  localStorage.setItem("datos", JSON.stringify(carrito));
  console.log("compramos");
});
