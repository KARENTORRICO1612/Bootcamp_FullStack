


console.log('Aprendiendo Funciones en JS');

// Funciones en JS
// Es un conjunto de intruccciones que realiza una tarea especifica
// tambien para cada procedimiento puede recibir datos y devolver o retornar
// un salida de datos


function saludar(name){
    console.log('hola Dojopy!', name);
    document.getElementById('data').innerHTML = `<p>  Hola ${name.toUpperCase()} desde la funcion!</p>`
    return name.toUpperCase() ;
}


// ejecutar la funcion
// saludar();

// const salida = saludar('henry');

// console.log('resultado de:', salida);


function juegoPuntos(puntos, nombre, nivel){

    // if (!nombre || !nivel){
    //     console.log('se requieres esots datos, ingresar');
    //     return
    // }

    if (Number(puntos) >= 6 && nivel >= 3){
        alert(`ganaste el juego! ${nombre} `);
        return 'GameOK';
    } else {
        alert('sigue jugando');
    }

    return 'Sigue practivando';

}




const puntosUser = window.prompt('que ingrese el puntaje:');


let nombre = 'juan';
let nivel = 3;
// juegoPuntos(puntosUser, 'pedro', 3);
const dataJuego =  juegoPuntos(puntosUser, nombre, nivel);

console.log(dataJuego);