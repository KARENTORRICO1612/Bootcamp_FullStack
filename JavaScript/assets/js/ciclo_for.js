
console.log('ciclo for en JS');

// Nos ayuda a iterar sobre una lista, array u objeto de elementos ya definidos


const moviesFavoritas = ['Gato con botas El Deseo', 'Titanic', 'Batman', 'MarioBros']

const moviesFavoritasJob = [];


for (let contador = 0;  contador < moviesFavoritas.length ;  contador++ ) {

    const elemento = moviesFavoritas[contador];


    if (elemento.includes('Mario')){
        break
    }

    // console.log(`Pelicula: ${elemento.toUpperCase()} Recaudo: 10M`);
    moviesFavoritasJob.push(`Pelicula: ${elemento.toUpperCase()} Recaudo: 10M`)
}


console.log(moviesFavoritasJob);





