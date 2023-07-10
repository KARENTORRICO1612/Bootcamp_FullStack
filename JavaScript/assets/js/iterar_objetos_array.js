

console.log('formas de iterar sobre objetos');



const autos = ['tesla', 'toyota', 'nissan', 'audi'];


// for (let index = 0; index < autos.length; index++) {
//     const element = autos[index];
//     console.log(element);
// }

// function autosJob(){

//     for (let index = 0; index < autos.length; index++) {
//         const element = autos[index];
//         console.log(element);
//         return 'salida';
//     }

// }


// console.log(autosJob())


// utilizando el metodo map

// console.log('iterando con el metodo .map()');

// const salidaAutos =  autos.map( function (item, index) {
//     console.log(item, index);
//     return `${item.toUpperCase()}`;
// } )


// console.log(salidaAutos);

// la diferencia entre el .map() y el for loop es que
// que el metodo .map() espera retornar datos, en cambio for loop
//  no esperar datos solamente operaciones o intrucciones en JS.




// otro forma para iterar con for off
// const lenguaje = ['python', 'javascript', 'c++'];

// for (let item of lenguaje){
//     console.log(item);
//     // console.log(lenguaje.indexOf(item));
// }



const proyectos = ['tienda online', 'erp', 'elearning'];


proyectos.forEach(function (item, index) {
    if (item == 'tienda online'){
        return `elemento: ${item} posicion: ${index}`;
    }
    console.log(item, index);
})