
const arregloDatos = [];

function validar(){
    
    console.log('Bienvenido. Completa los siguientes campos');

    const nombre =  document.getElementById('item_nombre').value;
    const dni =  document.getElementById('item_dni').value;
    const dateLiz = document.getElementById('item_fecha').value;
    console.log(dateLiz);
    //let date = $("#item_fecha").val();

    if(dni==="4444" && dateLiz==='2023-03-09'){
        const detalleDatos = {
            name: nombre,
            dni: dni,
            date: dateLiz
        }
        window.alert('Validación exitosa');
    
    }else{
        window.alert('Error al validar');
    }   
    
        // limpiando el formulario
        document.getElementById('item_nombre').value = '';
        document.getElementById('item_dni').value = '';
       // document.getElementById('item_date').value = '';
    
        listaDatos();

   }


function listaDatos(){

    let totalElementos = ''; 
    arregloDatos.forEach((item, index) => {
        
        let elemento = `<div class="card col-3" style="width: 18rem;">
        <img src="${item.name}" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">${item.dni}</h5>
          <p class="card-text">${item.date}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> `

      totalElementos += elemento;

    })
}