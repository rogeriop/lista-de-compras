
let produtos;
let produtosComprados;
let ind;

function achaIndice(argumento, lista) {
    ind = lista.findIndex((objetoProduto) => {
        return objetoProduto.descricao == argumento});
}

function excluiItem(argumento, lista) {
    achaIndice(argumento, lista);
    return lista.splice(ind, 1);
}

function carregaDoStorage() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];
}

function ordenaLista(array, propriedade) {
    return array.sort(function(a, b) {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if(a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    })
}

export function gravaNoStorage(identifica) {
    //debugger;
    if(identifica=="produtos" || identifica=="produtos&produtosComprados") {
        const produtosOrdenados = ordenaLista(produtos, 'descricao');
        localStorage.setItem('produtos', JSON.stringify(produtosOrdenados));
    }
    if(identifica=="produtosComprados" || identifica=="produtos&produtosComprados") {
        const produtosCompradosOrdenados = ordenaLista(produtosComprados, 'descricao');
        localStorage.setItem('produtosComprados', JSON.stringify(produtosCompradosOrdenados));
    }
}

export function trocaParaListaDeComprados (objetoProduto) {
    carregaDoStorage();
    excluiItem(objetoProduto.descricao, produtos);
    produtosComprados.push(objetoProduto); 
    gravaNoStorage("produtos&produtosComprados");
}

export function trocaParaListaDeCompras (objetoProduto) {
    carregaDoStorage();
    excluiItem(objetoProduto.descricao, produtosComprados);
    produtos.push(objetoProduto); 
    gravaNoStorage("produtos&produtosComprados");
}

export function excluiDaListaDeCompras(descricaoItem) {
    carregaDoStorage();
    excluiItem(descricaoItem, produtos);
    gravaNoStorage("produtos");
}

export function excluiDaListaDosComprados(descricaoItem) {
    carregaDoStorage();
    excluiItem(descricaoItem, produtosComprados);
    gravaNoStorage("produtosComprados");
}

export function mudarNomeCompras(antigoItem, novoItem, novaDataHora) {
    carregaDoStorage();
    achaIndice(antigoItem, produtos);
    produtos[ind].descricao = novoItem;
    produtos[ind].dataTransacao = novaDataHora;
    gravaNoStorage("produtos");
}

export function mudarNomeComprados(antigoItem, novoItem, novaDataHora) {
    carregaDoStorage();
    achaIndice(antigoItem, produtosComprados);
    produtosComprados[ind].descricao = novoItem;
    produtosComprados[ind].dataTransacao = novaDataHora;
    gravaNoStorage("produtosComprados");
}
