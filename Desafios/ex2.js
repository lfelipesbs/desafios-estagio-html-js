//forEach
const arrayNumeros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNumeros1.forEach(function(num, index){
    if(num % 2 !== 0){
        arrayNumeros1.splice(index, 1);
    }
});

console.log(arrayNumeros1);

//filter
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFiltrado = arrayNumeros2.filter(function(num){
    return num % 2 === 0;
});

console.log(arrayFiltrado);