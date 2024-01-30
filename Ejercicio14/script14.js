const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const meses7 = meses
    .filter(mes => mes.length > 7)
    .map(mes => mes.toUpperCase());
let cuantos = meses7.length;

console.log(meses7);
console.log("los meses con mas de 7 letras son " + cuantos);