const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numero;
let resto;
numero = parseInt(prompt("Introduzca su número de DNI"));
if (numero < 0 || numero > 99999999){
    alert("El número introducido no es válido");
} else {
    resto = numero % 23;
    alert("La letra que corresponde a su DNI es " + letras[resto]);
};