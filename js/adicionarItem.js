import { criarItemDaLista } from "./criarItemDaLista.js";
import { manipulaDataTransacao } from "./manipulaDataTransacao.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaDeComprados = document.getElementById("lista-comprados");

let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
let produtosComprados = JSON.parse(localStorage.getItem('produtosComprados')) || [];

produtos.forEach(objetoProduto => {
    salvaItem(objetoProduto);
 });

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

function salvaItem(objetoProduto) {
    const itemDaLista = criarItemDaLista(objetoProduto.descricao)
    const itemData = itemDaLista.querySelector(".data-hora-texto");
    itemData.innerText = objetoProduto.dataTransacao;
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}

export function adicionarItem(evento) {
    evento.preventDefault();
    if(item.value === "") {
        alert("Por favor, insira um item");
        return;
    }
    const objetoProduto = {
        descricao: item.value,
        dataTransacao: manipulaDataTransacao()
    }
    
    produtos.push(objetoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    salvaItem(objetoProduto);
    item.value = "";
}

