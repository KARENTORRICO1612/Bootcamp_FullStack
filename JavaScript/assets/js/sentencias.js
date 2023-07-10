


console.log('Sentencias en JavaScript!');

const usuario = 'Pedro';

// /Setencia de control if (simple)

// if (usuario === 'Pedro'){
//     console.log('el nombre es correcto');
// }

// /Setencia de control if else (compuesta)

if (usuario === 'Pedro' && usuario.length >= 5 ){
    console.log('el usuario si existe!');

    if (usuario.startsWith('Ped')){
        console.log('si inicia con ped.');
    } else {
        console.log('no inicia con Ped');
    }

} else {
    console.log('El usuario no existe');
}



const email = window.prompt('Cual es tu Email?');


// if (email.includes('@')){
//     alert('correo valido');
// } else {
//     alert('por favor, ingresa nuevamente tu Email');
// }

if (email.indexOf('@') >= 0 ){
    alert('correo valido');
} else {
    alert('por favor, ingresa nuevamente tu Email');
}