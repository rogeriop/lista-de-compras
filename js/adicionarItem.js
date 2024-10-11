import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { criarItemDaListaDeComprados } from "./criarItemDaLista.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaDeComprados = document.getElementById("lista-comprados");

let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
let produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];


produtos.forEach(produto => {
    salvaItem(produto);
 });

produtosComprados.forEach(produto => {
    const itemDaLista = criarItemDaListaDeComprados(produto);
    listaDeComprados.appendChild(itemDaLista);
//    verificarListaVazia(listaDeCompras);
})
 

function salvaItem(descricao) {
    const itemDaLista = criarItemDaLista(descricao)
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}

export function adicionarItem(evento) {
    evento.preventDefault();
    //debugger;
    if(item.value === "") {
        alert("Por favor, insira um item");
        return;
    }
    
    let produto = item.value;
    
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    
    salvaItem(item.value);

    item.value = "";

}

