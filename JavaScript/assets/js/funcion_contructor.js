

// una funcion constructora es una funcion especial que se utiliza para crear obketos
// con un conjunto de propiedades y metodos

console.log('modulo function contructor');

// esto es una funcion contructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.caminar = function (){
        return `caminar ${this.nombre}`
    }

    this.aprenderCodigo = function (languaje){
        return `aprendiendo el lenguaje de pro. ${languaje} con ${this.nombre}`
    }

}



const erick = new Persona('erick', 'lopez', 'erick@gmail.com');

console.log(erick.nombre);
console.log(erick.email);
console.log(erick.caminar());
console.log(erick.aprenderCodigo('javascript'));


const jose = new Persona('jose', 'munoz', 'jose@gmail.com');

console.log(jose.nombre);
console.log(jose.email);
console.log(jose.caminar());
console.log(jose.aprenderCodigo('react js'));




