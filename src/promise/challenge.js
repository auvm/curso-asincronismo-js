//llamar API, mostrar productos, mostrar producto específico 
// y mostrar categoría del producto específico


// install nmp i node-fetch

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';


//función que recibe urlAPI y retorna el llamado de fetch en formato de promesa
//y poder hacer diferentes llamados

function fetchData(urlAPI){
    return fetch(urlAPI);
}

//lamado a todos los productos
// fetchData(`${API}/products`)
//     //para saber qué hay en la respuesta
//     //transforma el llamado a un objeto json
//     .then(response => response.json())
//     //ahora lo muestra (todos los productos)
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=>{
//         console.log("Hola. Esto fue el llamado a todos los productos.");
//     })
//     .catch(error => console.error(error));


//primer llamado a todos los productos
// fetchData(`${API}/products`)
//     //los combierte en json
//     .then(response => response.json())
//     //los imprime
//     .then(products =>{
//         console.log(products)
        
//         //retorna el siguiente llamado
//         return fetchData(`${API}/products/${products[0].id}`)
    
//     })
//     .then(response => response.json())
//     .then(product =>{
//         console.log(`producto: ${product.title}`);
        
//         return fetchData(`${API}/categories/${product.category.id}`)
//     })
//     .then(response => response.json())
//     .then(category =>{
//         console.log(`categoría:  ${category.name}`);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log('Finally done.'));


//primer llamado a todos los productos
fetchData(`${API}/products`)
    //los combierte en json
    .then(response => response.json())
    //los imprime
    .then(products =>{
        //console.log(products)
        
        //retorna el siguiente llamado
        return fetchData(`${API}/products/${products[0].id}`)
    
    })
    .then(response => response.json())
    .then(product =>{
        console.log(`producto: ${product.title}`);
        console.log(`descripción: ${product.description}`);
        
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(`categoría:  ${category.name}`);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally done.'));
