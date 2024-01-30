function esVocal(letra){
    const vocales = ['a','e','i','o','u','A','E','I','O','U'];
    for (var i=0; i<10; i++){
        if (letra == vocales[i]){
            return true;
        };
    };
};

function soloVocales(texto){
    let resultado = '';
    for (const l of texto) {
        if (esVocal(l)){
            resultado += l;
        };
    }
    return resultado;
};

const miTexto = "Esto es una prueba";
console.log(soloVocales(miTexto));