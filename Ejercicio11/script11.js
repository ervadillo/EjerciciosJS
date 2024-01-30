const frase = prompt("Introduzca una frase");
const fraseMay = frase.toUpperCase();
const fraseMin = frase.toLowerCase();

if (frase == fraseMay){
    alert("la frase está en mayúsculas");
} else if (frase == fraseMin){
    alert("la frase está en minúsculas");
} else {
    alert("la frase está en mayúsculas y minúsculas");
};