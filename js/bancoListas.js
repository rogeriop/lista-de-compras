
let produtos;
let produtosComprados;

export function carregaDoStorage() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];
}

export function trocaParaListaDeComprados (item) {
    carregaDoStorage();
    const produtosAux = produtos.filter ((produto) => {
        return produto != item;
    })
    produtosComprados.push(item); 
    localStorage.setItem('produtos', JSON.stringify(produtosAux));
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}

export function trocaParaListaDeCompras (item) {
    carregaDoStorage();
    const produtosAux = produtosComprados.filter((produto) => {
        return produto != item;
    })
    produtos.push(item); 
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('produtosComprados', JSON.stringify(produtosAux));
}

export function excluiDaListaDeCompras(item) {
    carregaDoStorage();
    const produtosAux = produtos.filter((produto) => {
        return produto != item;
    });
    localStorage.setItem('produtos', JSON.stringify(produtosAux));
}

export function excluiDaListaDosComprados(item) {
    carregaDoStorage();
    const produtosAux = produtosComprados.filter((produto) => {
        return produto != item;
    });
    localStorage.setItem('produtosComprados', JSON.stringify(produtosAux));
}

export function mudarNomeCompras(antigoItem, novoItem) {
    carregaDoStorage();
    produtos.forEach((elemento, ind) => {
        if(elemento == antigoItem) {
            produtos[ind] = novoItem;
        }
    });
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

export function mudarNomeComprados(antigoItem, novoItem) {
    carregaDoStorage();
    produtosComprados.forEach((elemento, ind) => {
        if(elemento == antigoItem) {
            produtosComprados[ind] = novoItem;
        } 
    });
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}