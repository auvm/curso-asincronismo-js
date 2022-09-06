import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


//hacemos una función para publicar información
function postData(urlAPI, data){
    //mandamos otros parametros para que vea que no es 
    //una función GET, sino un POST
    const response = fetch(urlAPI, {
        //Esta es la estructura para definir la confi-
        //guración del método
        method: 'POST',
        mode: 'cors', //valor de credecinales por defecto
        credentials: 'same-origin',
        headers: { //lo define como un archivo json
            'Content-Type': 'application/json'
        },
        //defino el cuerpo del mensaje de objeto a texto 
        body: JSON.stringify(data)
    });
    //retorno el mensaje enviado.
    return response;
}



//creamos el producto bajo la estructura que establece 
//la API
const newProduct = {
    "title": "MADF",
    "price": 999.10,
    "description": "No description",
    "categoryId": 5,
    "images": ["https://images.pexels.com/photos/12322519/pexels-photo-12322519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
};

//ejecutamos el llamado a la función, traducimos
//el retorno a un objeto json e imprimimos la data
postData(`${API}/products/`, newProduct)
    .then(response => response.json())
    .then(data => console.log(data));
