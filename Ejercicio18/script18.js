document.getElementById('guardar').addEventListener("click", alertGuardar);
document.getElementById('nombre').addEventListener("focus", colorFoco, true);
document.getElementById('nombre').addEventListener("blur", colorNoFoco, true);
document.getElementById('texto').addEventListener("keypress", cambiaColor, true);

function alertGuardar(){
    alert("Ha hecho click en Guardar");
};

function colorFoco() {
  document.getElementById("nombre").style.backgroundColor = "lightblue";
};
function colorNoFoco() {
  document.getElementById("nombre").style.backgroundColor = "";
};

function cambiaColor(e) {
    const vocales = ['a','e','i','o','u','A','E','I','O','U'];
    const texto = e.key;
    if (vocales.indexOf(texto) > -1){
        document.getElementById('texto').style.color = "red";
    } else {
        document.getElementById('texto').style.color = "blue";
    };
};
