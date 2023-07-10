

console.log('operador ternario en JS');
// evalua si una expresion es true o false
// y permite en cada caso ejecutar codigo o intrucciones en JS.


let resutadoExamen;


let puntajeHTML = 1;
let puntajeCSS = 1;
let puntajeJS = 15;



// puntajeJS + puntajeHTML + puntajeCSS >= 50 ?  document.write('felicitacion aprovaste!!') : alert('sigue practicando, tu puedes!')

// resutadoExamen = puntajeJS + puntajeHTML + puntajeCSS >= 50 ?  'felicitacion aprovaste!!' : 'sigue practicando, tu puedes!'

// console.log(resutadoExamen);

resutadoExamen = puntajeHTML > 10 || puntajeJS > 10 ? alert('genial, eres Frontend DEveloper') : alert('sigue aprendiendo JS');