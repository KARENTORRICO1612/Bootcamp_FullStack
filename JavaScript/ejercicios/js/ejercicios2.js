
console.log('ejercicios2');


// almacenamos los elementos
const StoreProductos = [];



function listarProductos(){

    // const elementosHTML =  StoreProductos.map((item, index) => (
        
    //     `<div class="card" style="width: 18rem;">
    //     <img src="${item.image}" class="card-img-top" alt="..."/>
    //     <div class="card-body">
    //       <h5 class="card-title">${item.item}</h5>
    //       <p class="card-text">${item.description}</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div> `

    // ))
    // // console.log(elementosHTML);
    // document.getElementById('lista_productos').innerHTML = elementosHTML;


    let totalElemntos = ''; 
    StoreProductos.forEach((item, index) => {
        
        let elemento = `<div class="card col-3" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">${item.item}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> `

      totalElemntos += elemento;

    })


    document.getElementById('lista_productos').innerHTML = totalElemntos;


}


function agregar_producto(){
    
    console.log('agregar producto');

    const title =  document.getElementById('item_title').value;
    const image =  document.getElementById('item_image').value;
    const description = document.getElementById('item_description').value;

    const detalleItem = {
        item: title,
        image: image,
        description: description
    }

    StoreProductos.push(detalleItem);


    // limpiando el formulario
    document.getElementById('item_title').value = '';
    document.getElementById('item_image').value = '';
    document.getElementById('item_description').value = '';

    // actualizar lista de productos

    listarProductos();

}


function clearProducts(){

    StoreProductos.splice(0, StoreProductos.length);
    document.getElementById('lista_productos').innerHTML = '';

}


