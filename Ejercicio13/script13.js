const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const pares = number.filter(function(numero){
    var resto = numero % 2;
    return resto == 0;
});

const impares = number.filter(function(numero){
    var resto = numero % 2;
    return resto != 0;
});

console.log(pares);
console.log(impares);