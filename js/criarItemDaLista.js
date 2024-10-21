import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { trocaParaListaDeComprados } from "./bancoListas.js";
import { trocaParaListaDeCompras } from "./bancoListas.js";
import { manipulaDataTransacao } from "./manipulaDataTransacao.js";


const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;
let flag = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    
    const checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("checkbox-input");
    checkBoxInput.id = "checkbox-" + contador++;
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkBoxInput.id);
    
    checkboxLabel.addEventListener("click", function(evento) {
        ++flag;
        if(flag==2) {
            flag=0;
            const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
            const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
            const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

            const itemData = itemDaLista.querySelector(".data-hora-texto");
            itemData.innerText = manipulaDataTransacao();

            const objetoProduto = {
                descricao: item,
                dataTransacao: itemData.innerText
            }
            if(checkboxInput.checked) {
                checkboxCustomizado.classList.add("checked");
                itemTitulo.style.textDecoration = "line-through";
                listaComprados.appendChild(itemDaLista);
                trocaParaListaDeComprados(objetoProduto);
            } else {
                checkboxCustomizado.classList.remove("checked"); 
                itemTitulo.style.textDecoration = "none";
                listaDeCompras.appendChild(itemDaLista);
                trocaParaListaDeCompras(objetoProduto);
            }
        }
    })
    
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkBoxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);
    
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);
    
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener('click', function() {
        excluirItem(itemDaLista);
    })
    
    botaoRemover.appendChild(imagemRemover);
    
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    })
    
    botaoEditar.appendChild(imagemEditar);
    
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);
    
    const itemData = document.createElement("p");
    itemData.classList.add("data-hora-texto");
    itemData.innerText = manipulaDataTransacao();
    itemDaLista.classList.add("item-lista-texto");
    
    
    itemDaLista.appendChild(containerItemLista);
    //containerItemLista.appendChild(itemData);
    
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    
    itemDaLista.appendChild(itemData);
    return itemDaLista;
}
