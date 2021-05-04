var guardado = localStorage.getItem('datos');// traigo mi carrito de compras del localstorage

var array = JSON.parse(guardado);
var total = 0;
for (const iterator of array) {
    var total = (iterator.precio*iterator.sale)+total;
    var art = document.createElement("article");
    art.setAttribute("id",iterator.id)
    art.setAttribute("style","display:flex")
    art.setAttribute("style","flex-direction:row")
    document.getElementById("main").appendChild(art);
    
    var nod = document.createElement("img");
    nod.setAttribute("src",iterator.image)
    nod.setAttribute("style","width:140px")    
    document.getElementById(iterator.id).appendChild(nod);
    
    var nodo = document.createElement("p"); 
    nodo.setAttribute("style","font-size:14px")
    nodo.setAttribute("style","font-weight:normal")
    nodo.innerHTML = iterator.descripcion;
    document.getElementById(iterator.id).appendChild(nodo);

    var venta = document.createElement("p"); 
    venta.innerHTML = "Cant. "+iterator.sale+" ";
    document.getElementById(iterator.id).appendChild(venta);

    var price = document.createElement("p"); 
    price.innerHTML = "$"+iterator.precio+" c/u";
    document.getElementById(iterator.id).appendChild(price);
    
}
    var valortotal = document.createElement("h2"); 
    valortotal.innerHTML = "Total $"+total;
    document.getElementById("preciotot").appendChild(valortotal);