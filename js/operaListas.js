// Novas Inserções
import { verificarListaVazia } from "./verificarListaVazia.js";
import { criarItemDaLista } from "./criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaDeComprados = document.getElementById("lista-comprados");

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

function removeLis(lis) {
    lis.forEach(li => {
        li.remove();
    })
}

export function ordenaListaCompras() {
    //debugger;
    const produtosOrdenados = ordenaLista(produtos, 'descricao');
    produtos = [...produtosOrdenados];
    gravaNoStorage("produtos");
    const lis = listaDeCompras.querySelectorAll("li");
    removeLis(lis);    
    carregaListaNoFormularioDeCompras();
}

export function ordenaListaComprados() {
    //debugger;
    const produtosOrdenados = ordenaLista(produtosComprados, 'descricao');
    produtosComprados = [...produtosOrdenados];
    gravaNoStorage("produtosComprados");
    const lis = listaDeComprados.querySelectorAll("li");
    removeLis(lis);    
    carregaListaNoFormularioDeComprados();
}

export function colocaItemNaLista(objetoProduto) {
    const itemDaLista = criarItemDaLista(objetoProduto.descricao)
    const itemData = itemDaLista.querySelector(".data-hora-texto");
    itemData.innerText = objetoProduto.dataTransacao;
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}

export function excluiListaCompras() {
    let confirmacao = confirm(`Tem certeza que deseja excluir a Lista de Compras toda?`);
    if (confirmacao) {
        produtos = [];
        gravaNoStorage("produtos");
        const lis = listaDeCompras.querySelectorAll("li");
        removeLis(lis);    
        carregaListaNoFormularioDeCompras();
    }
}

export function excluiListaComprados() {
    let confirmacao = confirm(`Tem certeza que deseja excluir a Lista de Comprados toda?`);
    if (confirmacao) {
        produtosComprados = [];
        gravaNoStorage("produtosComprados");
        const lis = listaDeComprados.querySelectorAll("li");
        removeLis(lis);    
        carregaListaNoFormularioDeComprados();
    }
}

export function carregaListaNoFormularioDeCompras() {
    carregaDoStorage();
    produtos.forEach(objetoProduto => {
        colocaItemNaLista(objetoProduto);
     });
}

export function carregaListaNoFormularioDeComprados() {
    carregaDoStorage();
    produtosComprados.forEach(objetoProduto => {
       const itemDaLista = criarItemDaLista(objetoProduto.descricao);
       itemDaLista.querySelector(".checkbox-input").checked = true;
       itemDaLista.querySelector(".checkbox-customizado").classList.add("checked");
       const itemTextoAtualizado = itemDaLista.querySelector("#item-titulo");
       const itemData = itemDaLista.querySelector(".data-hora-texto");
       itemData.innerText = objetoProduto.dataTransacao;
       itemTextoAtualizado.style.textDecoration = "line-through";
       listaDeComprados.appendChild(itemDaLista);
   })
}


export function ordenaLista(array, propriedade) {
    return array.sort(function(a, b) {
        const aNormalizado = a[propriedade].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const bNormalizado = b[propriedade].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (aNormalizado < bNormalizado) {
            return -1;
        }
        if(aNormalizado > bNormalizado) {
            return 1;
        }
        return 0;
    })
}

export function gravaNoStorage(identifica) {
    if(identifica=="produtos" || identifica=="produtos&produtosComprados")
        localStorage.setItem('produtos', JSON.stringify(produtos));
    if(identifica=="produtosComprados" || identifica=="produtos&produtosComprados")
        localStorage.setItem('produtosComprados', JSON.stringify(produtosComprados));
}

export function persisteProduto(objetoProduto, destinoArray, destinoStorage) {
    if(destinoArray=="produtos") produtos.push(objetoProduto);
    if(destinoArray=="produtosComprados") produtosComprados.push(objetoProduto);
    gravaNoStorage(destinoStorage);
}

export function trocaParaListaDeComprados (objetoProduto) {
    carregaDoStorage();
    excluiItem(objetoProduto.descricao, produtos);
    persisteProduto(objetoProduto, "produtosComprados","produtos&produtosComprados");
}

export function trocaParaListaDeCompras (objetoProduto) {
    carregaDoStorage();
    excluiItem(objetoProduto.descricao, produtosComprados);
    persisteProduto(objetoProduto, "produtos","produtos&produtosComprados");
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
