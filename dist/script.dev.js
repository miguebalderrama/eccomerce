"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cantProductos = 0;
var carrito = 0;

var Producto =
/*#__PURE__*/
function () {
  function Producto(id, descripcion, precio, image, sale) {
    _classCallCheck(this, Producto);

    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
    this.image = image;
    this.sale = sale;
  }

  _createClass(Producto, [{
    key: "get_id",
    value: function get_id() {
      return this.id;
    }
  }, {
    key: "get_descripcion",
    value: function get_descripcion() {
      return this.descripcion;
    }
  }, {
    key: "get_precio",
    value: function get_precio() {
      return this.precio;
    }
  }, {
    key: "set_id",
    value: function set_id(nuevoId) {
      this.id = nuevoId;
    }
  }, {
    key: "set_descripcion",
    value: function set_descripcion(nuevaDescripcion) {
      this.descripcion = nuevaDescripcion;
    }
  }, {
    key: "set_precio",
    value: function set_precio(nuevoPrecio) {
      this.precio = nuevoPrecio;
    }
  }]);

  return Producto;
}();

var productos = new Array();
productos.push(new Producto("bicicleta", "Bicicleta rodado 26 Urbana", 14000, "./img/web1.jpg", 0));
productos.push(new Producto("notebook", "Notebook Lenovo S145 Intel I5", 98550, "./img/web3.jpg", 0));
productos.push(new Producto("kayak", "Kayak Rocker Mirage 2 A 3 Pers.", 74244, "./img/kayak.jpg", 0));
productos.push(new Producto("rasp", "Raspberry Pi 4 Model B 2gb Element14", 7799, "./img/web4.jpg", 0));
productos.push(new Producto("whisky", "Whisky Johnnie Walker Black Label 750ml ", 9500, "./img/whisky.jpg", 0));
productos.push(new Producto("sillongamer", "Sillón Pro Gamer Momentum ", 19320, "./img/sillagamer.jpg", 0));
productos.push(new Producto("saxo", "Saxo Alto Custom Dorado Parquer + Estuche", 85259, "./img/saxo.jpg", 0));
var record = localStorage.getItem('datos');
console.log("Qie hay en mi record??" + record);
carrito = JSON.parse(record);

if (carrito == null) {
  carrito = new Array();
  cantProductos = 0;
} else {
  cantProductos = carrito.length; ///esto deberia ser una funcion

  console.log("Qie hay en mi carrito??" + carrito);
  var list = document.getElementById("carrito"); // Get the <ul> element with id="myList"

  var eliminar = document.getElementById("childSpan");
  list.removeChild(eliminar); // Remove <ul>'s first child node (index 0)

  var p = document.createElement("span");
  p.setAttribute("id", "childSpan");
  p.textContent = cantProductos;
  document.getElementById("carrito").appendChild(p);
}

var eventos = document.getElementsByClassName("button2"); // guardo en le eventos(array) los botones de agregar al carrito

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var iterator = _step.value;
    iterator.addEventListener("click", function (event) {
      cantProductos++;

      switch (iterator.id) {
        case "bike":
          console.log("Compramos una bicicleta");
          var bicicleta = productos.find(function (product) {
            return product.id === "bicicleta";
          });

          if (bicicleta.sale === 0) {
            bicicleta.sale++;
            carrito.push(bicicleta);
          } else {
            bicicleta.sale++;
          }

          break;

        case "notebook":
          console.log("Compramos la notebook");
          var notebook = productos.find(function (product) {
            return product.id === "notebook";
          });

          if (notebook.sale === 0) {
            notebook.sale++;
            carrito.push(notebook);
          } else {
            notebook.sale++;
          } //


          break;

        case "kayak":
          console.log("Compramos el kayak");
          var kayak = productos.find(function (product) {
            return product.id === "kayak";
          });

          if (kayak.sale === 0) {
            kayak.sale++;
            carrito.push(kayak);
          } else {
            kayak.sale++;
          }

          break;

        case "rasp":
          console.log("Compramos el raspberry 4");
          var rasp = productos.find(function (product) {
            return product.id === "rasp";
          });

          if (rasp.sale === 0) {
            rasp.sale++;
            carrito.push(rasp);
          } else {
            rasp.sale++;
          }

          break;

        case "saxo":
          console.log("Compramos un saxo");
          var sax = productos.find(function (product) {
            return product.id === "saxo";
          });

          if (sax.sale === 0) {
            sax.sale++;
            carrito.push(sax);
          } else {
            sax.sale++;
          }

          break;

        case "whisky":
          console.log("Compramos un whisky");
          var whisk = productos.find(function (product) {
            return product.id === "whisky";
          });

          if (whisk.sale === 0) {
            whisk.sale++;
            carrito.push(whisk);
          } else {
            whisk.sale++;
          }

          break;

        case "sillongamer":
          console.log("Compramos el raspberry 5");
          var sillagamer = productos.find(function (product) {
            return product.id === "sillongamer";
          });

          if (sillagamer.sale === 0) {
            sillagamer.sale++;
            carrito.push(sillagamer);
          } else {
            sillagamer.sale++;
          }

          break;

        default:
          console.log("Sorry, nose");
      }

      var list = document.getElementById("carrito"); // Get the <ul> element with id="myList"

      var eliminar = document.getElementById("childSpan");
      list.removeChild(eliminar); // Remove <ul>'s first child node (index 0)

      var p = document.createElement("span");
      p.setAttribute("id", "childSpan");
      p.textContent = cantProductos;
      document.getElementById("carrito").appendChild(p);
    });
  };

  for (var _iterator = eventos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

document.getElementById("compra").addEventListener("click", function (event) {
  localStorage.setItem("datos", JSON.stringify(carrito));
  console.log("compramos");
});
document.getElementById("vaciar").addEventListener("click", function (event) {
  localStorage.removeItem("datos");
  console.log("vaciamos el carrito");
});