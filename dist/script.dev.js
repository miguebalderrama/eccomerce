"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Producto =
/*#__PURE__*/
function () {
  function Producto(id, descripcion, precio, image) {
    _classCallCheck(this, Producto);

    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
    this.image = image;
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
productos.push(new Producto("bicicleta", "Bicicleta rodado 26 Urbana", 14000, "./img/web1.jpg"));
productos.push(new Producto("notebook", "Notebook Lenovo S145 Intel I5", 95000, "./img/web3.jpg"));
productos.push(new Producto("kayak", "Kayak Rocker Mirage 2 A 3 Pers.", 74244, "./img/kayak.jpg"));
productos.push(new Producto("rasp", "Raspberry Pi 4 Model B 2gb Element14", 7799, "./img/web4.jpg"));
productos.push(new Producto("rasp2", "Raspberry Pi 5 Model B 2gb Element14", 9500, "./img/web4.jpg"));
var carrito = new Array();
var eventos = document.getElementsByClassName("button2");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var iterator = _step.value;
    iterator.addEventListener("click", function (event) {
      switch (iterator.id) {
        case "bike":
          console.log("Compramos una bicicleta");
          var bicicleta = productos.find(function (product) {
            return product.id === 'bicicleta';
          });
          carrito.push(bicicleta);
          var p = document.createElement("span");
          p.textContent = carrito.length;
          document.getElementById("carrito").appendChild(p);
          break;

        case "notebook":
          console.log("Compramos la notebook");
          var notebook = productos.find(function (product) {
            return product.id === 'notebook';
          });
          carrito.push(notebook);
          var pa = document.createElement("pa");
          pa.textContent = "Adquirio una " + notebook.descripcion + " al precio de $" + notebook.precio;
          document.getElementById("carrito").appendChild(pa); //

          break;

        case "kayak":
          console.log("Compramos el kayak");
          var kayak = productos.find(function (product) {
            return product.id === 'kayak';
          });
          carrito.push(kayak);
          break;

        case "rasp":
          console.log("Compramos el raspberry 4");
          var rasp = productos.find(function (product) {
            return product.id === 'rasp';
          });
          carrito.push(rasp);
          break;

        case "rasp2":
          console.log("Compramos el raspberry 5");
          var rasp2 = productos.find(function (product) {
            return product.id === 'rasp2';
          });
          carrito.push(rasp2);
          break;

        default:
          console.log("Sorry, nose");
      }
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
  localStorage.setItem('datos', JSON.stringify(carrito));
  console.log("compramos");
});