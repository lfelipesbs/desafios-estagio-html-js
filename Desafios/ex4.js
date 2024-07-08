function retornaMesPorExtenso(dataAtual){
    const mes = dataAtual.getMonth();
    const meses = ['Janeiro', 'Fevereiro', 'Marco', 
        'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return meses[mes];
}
const dataAtual = new Date();

console.log(retornaMesPorExtenso(dataAtual));