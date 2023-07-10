


console.log('integrando librerias de terceros');

// axios es un paquete para generar peticiones http con multiples metodos,
// GET, POST, PUT, DELETE, OPTIONS
// axios.get('https://jsonplaceholder.typicode.com/users').then( (response) => {

//     console.log(response.data);

//     const usuarios = response.data.map( (item) => (
//         `<h3> nombre es: ${item.name} y el ceuluar: ${item.phone} </h3>`
//     ))

//     document.getElementById('data').innerHTML = usuarios;


// }).catch( (e) => {
//     alert('intenet mas tarde');
// } )






// fetch en paquete nativo de JS para realizar peticiones http
// fetch('https://jsonplaceholder.typicode.com/users').then(
//     (response) => {
//         return response.json()
//     }
// ).then( (data) => {
//     console.log(data)
// }).catch( (e) => {
//     alert('error!')
// })




// const fechaActual =  new Date();

// console.log(fechaActual);

// console.log(moment(fechaActual).format('DD/MM/YYYY'));





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();