
// una clase es un tipo de objeto especial que se utiliza para definir un tipo de datos
//propiedades y metodos.
// tambien nos permite otras clases, sus metodos y propiedades

console.log('aprendiendo objetos y clases en JS');


class Coche {
    constructor(modelo, color, price){
        let marca = 'autoM';
        this.modelo = modelo;
        this.color = color;
        this._price = price;
    }

    
    acelerar(){
        return `acelear auto modelo ${this.modelo} de color ${this.color}`
    }

    frenar(velocidad){
        if (velocidad > 100){
            return `es hora de frenar!! el auto ${this.modelo}`
        } else {
            return `el auto ${this.modelo} sigue en marcha.`
        }
    }

}

let modelo = 'toyota';
let color = 'rojo';
let price = 77;

const autoToyota = new Coche(modelo, color, price);
console.log(autoToyota);


console.log(autoToyota.modelo);
console.log(autoToyota.color);
console.log(autoToyota._price);
console.log(autoToyota.marca);


console.log(autoToyota.acelerar());

console.log(autoToyota.frenar(90));



const autoTesla = new Coche('tesla x', 'verde', 123);
console.log(autoTesla.modelo);
console.log(autoTesla.color);
console.log(autoTesla.acelerar());
console.log(autoTesla.frenar(90));

