class cuadrado {
    constructor(lado){
        this.lado = lado;
    }
    perimetro(){
        let per = 4 * this.lado;
        console.log("perímetro es " + per);
    };
    area(){
        let sup = this.lado * this.lado;
        console.log("área es " + sup);
    };   
};

const peque = new cuadrado(2);
console.log(peque);
peque.perimetro();
peque.area();

const medio = new cuadrado(5);
console.log(medio);
medio.perimetro();
medio.area();

const grande = new cuadrado(10);
console.log(grande);
grande.perimetro();
grande.area();

