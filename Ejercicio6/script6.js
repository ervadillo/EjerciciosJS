const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma = 0;
for (i=0; i<9; i++){
    suma += notas[i];
};
alert("Suma de las notas con bucle for " + suma);
suma = 0;
for (const nota of notas){
    suma += nota;
};
alert("Suma de las notas con bucle for...of " + suma);