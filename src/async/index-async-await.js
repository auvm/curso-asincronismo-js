//ejemplo de funciones asíncronas 

//creamos una función anónima que retiene una
//promesa, hardcodeada a resolve con un timer de 2 segundos
//para resolver imprimiendo 'async!!'
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(()=> resolve('async!!'), 2000) :
                 reject(new Error('Erorr!!'));
    });
}

//creamos la función async() que es una función
//anónima. 
const anotherFn = async() => {
    //aquí se almacena el return de la función fnAsync()
    const something = await fnAsync();
    //lo siguiente se ejecuta de manera sincŕonica con 
    //el código de la función
    console.log(something);
    console.log('Hello, world.');
}


//aquí inicia el hilo principal
console.log('Before');
//la función async y await están a la espera de la ejecución
//completa del código, por lo que se salta para seguir ejecutando 
//lo demás
anotherFn();
//continúa la ejecución principal
console.log('After');

//...dependiendo del tiempo consumido en la función async y await
//el resultado puede verse hasta después.
