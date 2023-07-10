


console.log('manejo de errores con try catch');
//  try contine el bloque de codigo prueba
// y catch mouestra el error y ejecuta el bloque de codigo

APIPAGOS = 'https://api.stripe.com/pagos';
APIAPGOS2 = 'https://api.CULQUI.com/pagos';


function realizarPago(api){
    console.log('creando pago')
    throw 'Servidor Timeout 120s';
    // console.log('pago confirmado', APIPAGOS);
}

function realizarPagoAlternativo(api){
    console.log('creando pago')
    console.log('pago confirmado', APIPAGOS);
}


try {
    // pagarCard();
    realizarPago(APIPAGOS);
    // console.log('hola dentro del try', usuario);

} catch(e) {
    console.log('error detectado, utilozando alternativa de pagos Cualqi');
    console.log(e);
    realizarPagoAlternativo(APIAPGOS2);
} finally {
    console.log('finalizando pago, redireccionado al login');
}


// console.log('hola dentro del try', usuario);
