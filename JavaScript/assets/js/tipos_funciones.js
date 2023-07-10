

console.log('tipos de Funciones en JS');



// declarar funciones del tipo  expression en variables o constantes
const acelerarAuto =  function (velocidad, modelo) {
    // console.log(`la velocidad es: ${velocidad} y modelo: ${modelo}`);
    return `Salida: la velocidad es: ${velocidad} y modelo: ${modelo}`;
}


// const salidaAuto =  acelerarAuto('100 km/h', 'nissan');

// console.log(salidaAuto);



// declarar funciones del tipo flecha

const programarWeb = (project, stack) => {
    // console.log('mi primera funciona flecha');
    // console.log(`trabajo en el proyecto ${project} con el stack ${stack} `);
    return `trabajo en el proyecto ${project} con el stack ${stack} `
}


// const data = programarWeb('tienda PizzhaHut', 'react con python');

// console.log(data);


const validarDNI = (dni) => {
    if (dni == 12345){
        alert('identidad verificada');
    } else {
        alert('identidad no verif.')
    }
}


const dni  = window.prompt('INgresa tu N. DNI:');

validarDNI(dni);