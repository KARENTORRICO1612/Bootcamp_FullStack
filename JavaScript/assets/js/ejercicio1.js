

let ejercicioTitulo = '<h1> Preguntas y Respuestas de JS  </h1>'

console.log(ejercicioTitulo);


document.write(ejercicioTitulo);


let capitalPeru, capitalColombia, capitalArgentina;

capitalPeru = window.prompt('Cual es la capital de Peru?');

console.log(capitalPeru);
// document.write('<p>' + capitalPeru + '</p>');
// document.write(`<h3> ${capitalPeru}  </h3>`);

document.getElementById('capital').innerHTML = `<h3> ${capitalPeru}  </h3>`;


// capitalColombia = window.prompt('Cual es la capital de colombia?');

// document.write(`<h3> ${capitalColombia}  </h3>`);


// capitalArgentina = window.prompt('Cual es la capital de argentina?')

// document.write(`<h3> ${capitalArgentina}  </h3>`);
