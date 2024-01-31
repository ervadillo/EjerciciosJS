const enlaces = document.getElementsByTagName('a');
const numEnlaces = enlaces.length;
const penultimoEnlace = enlaces[numEnlaces - 2];
const hrefPenultimoEnlace = penultimoEnlace.href;
const parrafos = document.getElementsByTagName('p');
const tercerParrafo = parrafos[2];
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
const numEnlacesTercerParrafo = enlacesTercerParrafo.length;

const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = "Número de enlaces de la página: " + numEnlaces + ".<br\> Dirección a la que enlanza el penúltimo enlace: " + hrefPenultimoEnlace + ".<br\> Número de enlaces del tercer párrafo: " + numEnlacesTercerParrafo + ".";
document.body.appendChild(nuevoParrafo);