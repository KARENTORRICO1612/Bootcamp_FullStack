

console.log('Estructura Switch');

let semaforo = window.prompt('Cual es la luz del semaforo?');

// posibles valores verde, rojo, naranja


switch (semaforo) {

    case 'verde':
        console.log('puedes cruzar la via');
        break;
    case 'rojo':
        console.log('espera que pasen los autos');
        break;
    case 'naranja':
        console.log('espera un momento, que se detengan');
        break;
}



