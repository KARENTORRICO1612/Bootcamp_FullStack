

console.log('events listener en JS');



const butom = document.getElementById('enviar');
const cajaNombre = document.getElementById('nombre');


butom.addEventListener('click', () => {
    console.log('se detecto el evento de click');
})


butom.addEventListener('mouseover', () => {
    console.log('se detecto el evento de mouseover');
})



butom.addEventListener('mouseout', () => {
    console.log('se detecto el evento de mouseout');
})





// cajaNombre.addEventListener('change', (e) => {
//     console.log(`se detecto el evento change o cambio ${e.target.value}`);
// })


cajaNombre.addEventListener('keypress', (e) => {
    console.log(`se detecto el evento change o cambio ${e.target.value}`);
})




window.addEventListener('resize', (e) => {
    console.log(`se detecto resize ${window.innerHeight}`);
})
