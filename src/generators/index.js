//ejemplo de un generator
function* gen(){
    yield 1;
    yield 2;
    yield 3;

}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


// otro ejemplo de implementación

function* iter(array){
    for(var item of array){
        yield item;
    }
}

let array = ['angel', 'uriel', 'jorge', 'eduardo'];
const it = iter(array);

console.log(it.next().value);
it.next().value; //omito un valor
console.log(it.next().value);
console.log(it.next().value);
//si se terminan los elementos retorna undefined
console.log(it.next().value);