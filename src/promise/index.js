//construcción de una promesa
// recibe una función anónima con dos estados
// resolve y reject
const promise = new Promise(function(resolve, reject){
    resolve('hey!')
});


//ejemplo, palabras y lógica de las promesas
let cows = 0;

const countCowns = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve("Enough cows");
    }else{
        reject("No enough cows");
    }

});

countCowns.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});