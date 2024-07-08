function getData(data, id){
    const ano = data.getFullYear();
    const mes = data.getMonth() >= 9 ? data.getMonth()+1 : `0${data.getMonth()+1}`;
    const dia = data.getDate() >= 10 ? data.getDate() : `0${data.getDate()}`;
    const hora = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;
    const min = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`;

    return id === 3 ? `${dia}/${mes}/${ano}` : `${dia}/${mes}/${ano} ${hora}:${min}`;
}

const data = new Date();

console.log(getData(data, 3));
console.log(getData(data, 5));