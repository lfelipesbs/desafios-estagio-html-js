const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
const novoArray = arrayNumeros.map(elemento => Number(elemento));

for(var i=1; i < novoArray.length; i++){
    if(novoArray[i] % 2 !== 0){
        novoArray.splice(i,0,novoArray[i]+0.5);
        i++;
    }
}

console.log(arrayNumeros);
console.log(novoArray);