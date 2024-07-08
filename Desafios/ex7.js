function filtraArray(array){
    for(var i=0; i<array.length; i++){
        let atual = array[i];
        for(var j=i+1; j<array.length; j++){
            if(atual === array[j]){
                array.splice(j, 1);
                j--;
            }
        }
    }
}

function criaNovo(array1, array2, array3){
    const newArray =  [...array1, ...array2, ...array3]
    filtraArray(newArray);
    return newArray;
}

const array1 = [0, 1, 2, 3, 4, 5, 6, 70, 8, 9];
const array2 = [0, 100, 200, 300, 4, 500, 6, 70, 88, 9];
const array3 = [0, 1, 2, 88, 9, 88, 5, 8, 0, 200, 100];

const arrays = criaNovo(array1, array2, array3);

console.log(arrays);