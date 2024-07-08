function formatarData(data, pattern){
    const ano = data.getFullYear();
    const mes = data.getMonth() >= 9 ? data.getMonth()+1 : `0${data.getMonth()+1}`;
    const dia = data.getDate() >= 10 ? data.getDate() : `0${data.getDate()}`;

    if(pattern === 'DD') return `${dia}`;
    if(pattern === 'DD/MM') return `${dia}/${mes}`;
    if(pattern === 'DD/MM/YYYY') return `${dia}/${mes}/${ano}`;
    else return `Pattern esta errado`;
}

const dataFormatadaD = formatarData(new Date(), 'DD');
const dataFormatadaDM = formatarData(new Date(), 'DD/MM');
const dataFormatadaDMY = formatarData(new Date(), 'DD/MM/YYYY');

console.log(dataFormatadaD);
console.log(dataFormatadaDM);
console.log(dataFormatadaDMY);
