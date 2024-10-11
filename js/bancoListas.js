
let produtos;
let produtosComprados;

export function carregaDoStorage() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];
}

function armazenaNoStorage() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}

export function trocaParaListaDeComprados (item) {
    //debugger
    carregaDoStorage();
    const produtosAux = [];
    let i = 0;

    produtos.forEach((elemento) => {
        if(elemento != item) {
            produtosAux[i] = elemento;
            i++;
        }
    });
    produtos = [...produtosAux];
    produtosComprados.push(item); 
    armazenaNoStorage();

}

export function trocaParaListaDeCompras (item) {
    carregaDoStorage();
    const produtosAux = [];
    let i = 0;

    produtosComprados.forEach((elemento) => {
        if(elemento != item) {
            produtosAux[i] = elemento;
            i++;
        }
    });
    produtosComprados = [...produtosAux];
    produtos.push(item); 
    armazenaNoStorage();
}

export function excluiDaListaDeCompras(item) {
    carregaDoStorage();
    const produtosAux = [];
    let i = 0;

    produtos.forEach((elemento) => {
        if(elemento != item) {
            produtosAux[i] = elemento;
            i++;
        }
    });
    produtos = [...produtosAux];
    localStorage.setItem('produtos', JSON.stringify(produtos));

}

export function excluiDaListaDosComprados(item) {
    carregaDoStorage();
    const produtosAux = [];
    let i = 0;

    produtosComprados.forEach((elemento) => {
        if(elemento != item) {
            produtosAux[i] = elemento;
            i++;
        }
    });
    produtosComprados = [...produtosAux];
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));

}

export function mudarNomeCompras(antigoItem, novoItem) {
    carregaDoStorage();
//debugger;
    produtos.forEach((elemento, ind) => {
        if(elemento == antigoItem) {
            produtos[ind] = novoItem;
        }
    });
    localStorage.setItem('produtos', JSON.stringify(produtos));

}

export function mudarNomeComprados(antigoItem, novoItem) {
    carregaDoStorage();
debugger;
    produtosComprados.forEach((elemento, ind) => {
        if(elemento == antigoItem) {
            produtosComprados[ind] = novoItem;
        } 
    });
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));

}