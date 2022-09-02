const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


function fetchData(urlAPI, callback){
  let xhttp = new XMLHttpRequest();

  // abre la conexión con la API
  xhttp.open('GET', urlAPI, true);
  xhttp.onreadystatechange = function(event){
    // 0-no inicializaco
    // 1-loading
    // 2-ya se ejecutó send
    // 3-trabajando con la solicitud
    // 4-ya se terminó la llamada
    if(xhttp.readyState === 4){
      //erores que manda el servidor
      //200- la solicitud es correcta
      if(xhttp.status === 200){

        //manda al callback ningún error y la data transformada
        callback(null, JSON.parse(xhttp.responseText));
      }else{
        //si resulta un error
        const error = new Error('Error + urlAPI');
        //retorna al callback el error y sin información
        return callback(error, null);
      }
    }
  }

  xhttp.send();
}

//esto se llama un callback hell
//anidado de peticiones 
fetchData(`${API}/products`, function(error1, data1){
  if(error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${data2.category.id}`, function(error3, data3){
      if(error3) return console.error(error3);

      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    })
  })
});



/*Para ejecutar el script desde la terminal modificamos el
json package del proyecto por el nombre del achivo y su comando */