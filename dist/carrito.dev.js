"use strict";

var guardado = localStorage.getItem('datos');
var array = JSON.parse(guardado);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var iterator = _step.value;
    var art = document.createElement("article");
    art.setAttribute("id", iterator.id);
    art.setAttribute("style", "display:flex");
    art.setAttribute("style", "flex-direction:row");
    document.getElementById("main").appendChild(art);
    var nod = document.createElement("img");
    nod.setAttribute("src", iterator.image);
    nod.setAttribute("style", "width:140px");
    document.getElementById(iterator.id).appendChild(nod);
    var nodo = document.createElement("p");
    nodo.setAttribute("style", "font-size:14px");
    nodo.setAttribute("style", "font-weight:normal");
    nodo.innerHTML = iterator.descripcion;
    document.getElementById(iterator.id).appendChild(nodo);
    var price = document.createElement("p");
    price.innerHTML = "$" + iterator.precio;
    document.getElementById(iterator.id).appendChild(price);
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