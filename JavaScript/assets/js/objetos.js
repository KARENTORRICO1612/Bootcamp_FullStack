

console.log('Objetos en JS');


// propiedad compuesta por key:valor
const auto = {
    color: 'rojo',
    marca: 'hyundy',
    precio: 999
}

// console.log(auto);

// console.log(auto.color);
// console.log(auto['color']);

// auto['motor'] = 'dragon x2203';

// console.log(auto);

// auto.precio = 10;

// console.log(auto);

// delete auto['motor'];
// delete auto.color;



const persona = new Object();
console.log(persona);
persona.nombre = 'erick';
persona.edad = 23;




const superHero = {
    poder: 'velocidadRayo',
    colorTraje: 'verde',
    alias: 'hombreX',
    lanzarRayos: function (cantidad, villanos) {


        for (let index = 0; index < villanos.length; index++) {
            const element = villanos[index];
            // console.log(`derrotando al villano: ${element}`);

            if (element == 'DragonOscuro'){
                return `derrotando al villano: ${element}`
            }
        }

        // console.log('lanzar rayos ', cantidad);
        // console.log('mi poder es:', this.poder);
        // console.log('mi traje es:', this.colorTraje);
        return `mi poder es: ${this.poder}`
    }
}



console.log(superHero);

const villanos = [
    'pepeMan',
    'DragonOscuro22',
    'SerpienteMan'
]


const superHeroData = superHero.lanzarRayos(10, villanos);


console.log(superHeroData);