const numeros = [1,2,3,4,5,6,7,8,9];

function sumaPares(numeros){
    let suma = 0;
    for (const numero in numeros){
        let num = Number(numero);
        if ((num % 2) == 0){
            suma += num;
        }
    }
    return suma;
}

const totalPares = sumaPares(numeros);
console.log(totalPares);
