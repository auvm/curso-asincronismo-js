import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//la función es async
async function fetchData(urlAPI){
    //la ejecución espera por la obtención de la data
    const response = await fetch(urlAPI);
    //la ejecución espera por la transformación 
    //de la data
    const data = await response.json();
    //retorna
    return data;
}

//por debajo fetch usa promesas

const anotherFuntion = async(urlAPI) => {
    //en try va toda la lógica del código
    try{
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);
        
        //console.log(products);
        console.log(product);
        console.log(category);


    }catch (error){
        //el catch cualquier reject/error obtenido en 
        //la lógica
        console.error(error);

    }
};

//invoco a la función
anotherFuntion(API);
console.log("Bye ;)");