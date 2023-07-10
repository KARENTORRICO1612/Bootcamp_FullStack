

// Cookies y LocalStorage

console.log('Cookies');

// Manejando las cookies

document.cookie = 'userID=1';
document.cookie = 'seesion_user=abcvd';


// console.log(document.cookie);

const fechaExpi = new Date();

// console.log(fechaExpi);
fechaExpi.setDate(fechaExpi.getDate() + 60 );

// console.log(fechaExpi);

document.cookie = `pixel_marketing=01029102; expires=${fechaExpi.toUTCString()}`

// document.cookie = 'pixel_marketing=';

// if (document.cookie.includes('pixel_marketing')){
//     console.log('existe la cookie de mk');
    
//     document.cookie.split(';').forEach((elemento) => {
//         if (elemento.includes('pixel_marketing')){
//             console.log(elemento.split('=')[1]);
//         }
//     })
    
// }






// manejando LocalStorage

console.log('manejando LocalStorage')


const usuarioPreferencisa = {
    'prodictosFav': ['iphone', 'sillon'],
    'temaWeb': 'dark',
    'navegacionMenu': 'vertical'
}

const usuarioPais = {
    'pais': 'Colombia',
    'city': 'medeillim'
}

// esta intrucccion nos permite convertir un objeto en JS en objeto JSON
// JSON.stringify()

localStorage.setItem('carrito_productos', JSON.stringify(usuarioPreferencisa));
localStorage.setItem('usuario_pais', JSON.stringify(usuarioPais) );


// para acceder a la info de localstorage usamos la intrucccion getItem()

const InfoUsuario =  localStorage.getItem('carrito_productos');
console.log(InfoUsuario);

// para convertir un objeto string json a un objeto javascript
const InfoUsuarioParse = JSON.parse(InfoUsuario);

console.log(InfoUsuarioParse);
console.log(InfoUsuarioParse.temaWeb);
console.log(InfoUsuarioParse.prodictosFav);



document.getElementById('data').innerHTML = `<h1>  ${InfoUsuarioParse.temaWeb} </h1>`;


// localStorage.removeItem('usuario_pais');


if (localStorage.getItem('usuario_pais')){
    alert(`usuario nos visita del pais ... ${localStorage.getItem('usuario_pais')}` )
} else {
    alert('usuario  sin indentificar anonymous ...')
}







