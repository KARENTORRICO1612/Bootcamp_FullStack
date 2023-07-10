var tarea;
var res;
tarea = window.prompt('Ingresa la primera tarea');
res=document.write('<p>'+tarea+'</p>');
console.log(res);
document.getElementById('res').innerHTML = `<h3> ${tarea}</h3>`;

tiempo1 = window.prompt('Ingresa tiempo estimado');
res3=document.write('<p>'+tiempo1+'</p>');
console.log(res3);
document.getElementById('res3').innerHTML = `<h3> ${tiempo1}</h3>`;

tarea2 = window.prompt('Ingresa la segunda tarea');
res2=document.write('<p>'+tarea2+'</p>');
console.log(res2);
document.getElementById('res2').innerHTML = `<h3> ${tarea2}</h3>`;

tiempo2 = window.prompt('Ingresa tiempo estimado');
res4=document.write('<p>'+tiempo2+'</p>');
console.log(res4);
document.getElementById('res4').innerHTML = `<h3> ${tiempo2}</h3>`;