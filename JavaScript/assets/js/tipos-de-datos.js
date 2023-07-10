
console.log('Tipos de datos en JavaScript');



// Tipo de dato String

// utilizamos var es una palabra reservada de JS para definir variables
// siempre que encuentre dentro de comillas simples o dobles
// es un tipo de dato String
var usuario =  "Pedro";

console.log(usuario);

// typeof para verificar el tipo de dato de una variable
console.log(typeof usuario);


// Tipo de dato Numerico

var edad = 20;

console.log(edad);

console.log(typeof edad);



// tipo de dato booleano true o false (1 o 0)
var isUserMemberPremium = true;
var isProductStock = false;

console.log(isUserMemberPremium);

console.log(typeof isUserMemberPremium);

console.log(isProductStock);



// Tipo de dato Objeto

var auto = {
    color: 'red', 
    modelo: 'GT',
    precio: 999,
    aceleracio: '100 metros/m'
}

console.log(auto);
console.log(typeof auto)


// 
// Reasignar datos

usuario = 'jimena';
// usuario = {
//     primerNombre: 'jimensa',
//     edad: 20,
//     emai: 'jimena@gmail.com'
// };

console.log(usuario);

//  Asignar o actualizar las propiedades del objeto
console.log(auto.modelo);
console.log(auto.precio);
auto.color = 'green';

console.log(auto);


// 2 formas para agregar propiedades al objeto
auto.marca = 'Toyota';
auto['precioEspecial'] = 123;

// console.log(auto);



var cantidadUsuarios;

// Tipo de dato Undefined
// console.log(cantidadUsuarios);
// cantidadUsuarios = 10;
// console.log(typeof cantidadUsuarios);
// console.log(cantidadUsuarios);

// Tipo de dato Null

var ProductoDescription = null;

// console.log(ProductoDescription);
// console.log(typeof ProductoDescription);
// ProductoDescription = 'polo color verde';
// console.log(ProductoDescription);



// Tipo de dato functions
function correr(){
    console.log('hola esto es una funcion');



    
}

console.log(correr);
console.log(typeof correr);


var listaPendientes = [
    'propgramar web',
    'aprender piano',
    'ir al supermercado',
    true
]

console.log(listaPendientes);

console.log(typeof listaPendientes);

console.log(listaPendientes.length);

console.log(listaPendientes[0])
console.log(listaPendientes[1])