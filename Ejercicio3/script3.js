const data = ["hola", 2, 5, "adios"];
const mayor = data[1] > data[2];
const menor = data[1] < data[2];
console.log(data[1] + " > " + data[2] + " es " + mayor);
console.log(data[2] + " > " + data[1] + " es " + menor);

const suma = data[1] + data[2];
const resta = data[1] - data[2];
const producto = data[1] * data[2];
const division = data[1] / data[2];
const resto = data[1] % data[2];
console.log(data[1] + " + " + data[2] + " = " + suma);
console.log(data[1] + " - " + data[2] + " = " + resta);
console.log(data[1] + " * " + data[2] + " = " + producto);
console.log(data[1] + " / " + data[2] + " = " + division);
console.log(data[1] + " % " + data[2] + " = " + resto);