function htmlDinamico(itensTotais, itemPorPagina){
    const qtdPaginas = Math.ceil(itensTotais / itemPorPagina);
    const page = document.querySelector('.paginas');

    const arrayPag = [];

    for(var i=0; i < qtdPaginas; i++){
        if(i !== qtdPaginas-1){
            arrayPag.push({pagina: `Pagina ${i+1}`, itemUm: `Cliente ${((i+1)*2)-1}`, itemDois: `Cliente ${(i+1)*2}`});
        }else{
            arrayPag.push({pagina: `Pagina ${i+1}`, itemUm: `Cliente ${((i+1)*2)-1}`});
        }
    }

    document.addEventListener('click', e => {
        if(e.target.classList.contains('btn')){
            const ol = document.createElement('ol');
            const liPag = document.createElement('li');
            const liCli1 = document.createElement('li');
            const liCli2 = document.createElement('li');
            const ul = document.createElement('ul');

            while(page.firstChild){
                page.removeChild(page.firstChild);
            }

            page.appendChild(ol);

            liPag.textContent = arrayPag[Number(e.target.innerText)-1].pagina;

            ol.appendChild(liPag);

            liPag.appendChild(ul);
            
            if(e.target.innerText == qtdPaginas){
                liCli1.textContent = arrayPag[Number(e.target.innerText)-1].itemUm;
                ul.appendChild(liCli1);
            }else{
                liCli1.textContent = arrayPag[Number(e.target.innerText)-1].itemUm;
                ul.appendChild(liCli1);
                liCli2.textContent += arrayPag[Number(e.target.innerText)-1].itemDois;
                ul.appendChild(liCli2);
            }
        }
    });
}

htmlDinamico(15,2);