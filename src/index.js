//  ejemplo de un callback 
// un callback es una función que 
// llama a otra función

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(3,5,sum));


// -------- otro ejemplo

// setTimeout ya es un callback
// ejecuta un bloque de código que le pasemos
// después de un tiempo determinado en ms
setTimeout(function(){
    console.log("Hello, world!");
}, 5000);




// ------------ otro ejemplo

function greeting(name){
    console.log(`Hola ${name}!`);
}

//pasar un argumento a una función definida
//en un setTimeout
setTimeout(greeting, 2000, "auvm");


