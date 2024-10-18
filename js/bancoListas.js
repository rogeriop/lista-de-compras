
let produtos;
let produtosComprados;

export function carregaDoStorage() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];
}

export function trocaParaListaDeComprados (objetoProduto) {
    carregaDoStorage();
    //debugger;
    const produtosAux = produtos.filter ((produto) => {
        return produto.descricao != objetoProduto.descricao;
    })

    produtosComprados.push(objetoProduto); 
    localStorage.setItem('produtos', JSON.stringify(produtosAux));
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}

export function trocaParaListaDeCompras (objetoProduto) {
    carregaDoStorage();
    const produtosAux = produtosComprados.filter((produto) => {
        return produto.descricao != objetoProduto.descricao;
    })

    produtos.push(objetoProduto); 
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('produtosComprados', JSON.stringify(produtosAux));
}

export function excluiDaListaDeCompras(descricaoItem) {
    carregaDoStorage();
    debugger;
    const produtosAux = produtos.filter((produto) => {
        return produto.descricao != descricaoItem;
    });
    localStorage.setItem('produtos', JSON.stringify(produtosAux));
}

export function excluiDaListaDosComprados(descricaoItem) {
    carregaDoStorage();
    const produtosAux = produtosComprados.filter((produto) => {
        return produto.descricao != descricaoItem;
    });
    localStorage.setItem('produtosComprados', JSON.stringify(produtosAux));
}

export function mudarNomeCompras(antigoItem, novoItem, novaDataHora) {
    carregaDoStorage();
    produtos.forEach((objetoProduto, ind) => {
        if(objetoProduto.descricao == antigoItem) {
            produtos[ind].descricao = novoItem;
            produtos[ind].dataTransacao = novaDataHora;
        }
    });
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

export function mudarNomeComprados(antigoItem, novoItem, novaDataHora) {
    carregaDoStorage();
    produtosComprados.forEach((objetoProduto, ind) => {
        if(objetoProduto.descricao == antigoItem) {
            produtosComprados[ind].descricao = novoItem;
            produtosComprados[ind].dataTransacao = novaDataHora;
        } 
    });
    localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}