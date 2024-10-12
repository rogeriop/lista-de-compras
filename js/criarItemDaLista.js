import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { trocaParaListaDeComprados } from "./bancoListas.js";
import { trocaParaListaDeCompras } from "./bancoListas.js";


const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

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
        //debugger;
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        if(checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
            trocaParaListaDeComprados(item);
        } else {
            checkboxCustomizado.classList.remove("checked"); 
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
            trocaParaListaDeCompras(item);
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
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"} )}`;
    itemDaLista.classList.add("item-lista-texto");
    
    
    itemDaLista.appendChild(containerItemLista);
    //containerItemLista.appendChild(itemData);
    
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    
    itemDaLista.appendChild(itemData);
    return itemDaLista;
}
