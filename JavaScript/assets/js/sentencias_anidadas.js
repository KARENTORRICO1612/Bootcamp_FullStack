

console.log('sentencias anidadas');

let valorDado = window.prompt('Cual es tu numero?');
valorDado = Number(valorDado);
// valorDado = parseInt(valorDado);

// console.log(typeof valorDado);
// console.log(valorDado);

if (valorDado === 6 ){
    alert('Jumanjy, ganaste el juego, eres libre!');
    document.write('<img src="https://t3.ftcdn.net/jpg/04/32/89/06/360_F_432890609_TqaNgh4QC2F3jlYfCpsACg5nb36TgfGz.jpg" />')
} else if (valorDado === 3) {
    alert('Jumanjy, aparecen monos en tu cocina');
    document.write('<img src="https://i.ytimg.com/vi/bHovK8GmOHw/maxresdefault.jpg" />')
} else if (valorDado === 1){
    alert('Jumany, aparece en tu Leon en tu sala');
    document.write('<img src="https://t3.ftcdn.net/jpg/04/32/89/06/360_F_432890609_TqaNgh4QC2F3jlYfCpsACg5nb36TgfGz.jpg" />')
} else if (valorDado === 2){
    alert('JUmany, aparece avispas en tu dormitio');
    document.write('<img src="https://t3.ftcdn.net/jpg/04/32/89/06/360_F_432890609_TqaNgh4QC2F3jlYfCpsACg5nb36TgfGz.jpg" />')
} else {
    alert('Jumany, Tomy regresa al mundo real');
    document.write('<img src="https://as01.epimg.net/epik/imagenes/2017/12/22/portada/1513939618_886291_1513939814_noticia_normal_recorte1.jpg" />')
}