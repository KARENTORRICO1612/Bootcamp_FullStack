

// nos permite importatr o reutilizas clases ya existente en la nueva clase

console.log('herencia en JS');


class Universo {
    constructor(){
        this.galaxias = 100;
        this.blackholes = 10;
    }

    sateliteMonitor(){
        return `observando el universo infinito y las ${this.galaxias} galaxias`
    }
}




class Planeta extends Universo {
    constructor(nombre, distancia, vida){
        super();  // importante para inicializar la clase Universo
        this.nombre = nombre;
        this.distancia = distancia;
        this.vida = vida;
    }

   rotacion(velocidad){
        return `el planeta ${this.nombre} rota a ${velocidad} y cerca del planeta se detecta ${this.blackholes} blackHoles`
   }
    
}



const planetaMarte = new Planeta('marte', '10 aos', true);


console.log(planetaMarte.nombre);
console.log(planetaMarte.distancia);


console.log(planetaMarte.galaxias);
console.log(planetaMarte.blackholes);


console.log(planetaMarte.rotacion('100 km/m'));

