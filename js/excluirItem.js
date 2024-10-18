import { verificarListaVazia } from "./verificarListaVazia.js";
//import { verificarListaComprados } from "./verificaListaComprados.js";
import { excluiDaListaDeCompras } from "./bancoListas.js";
import { excluiDaListaDosComprados } from "./bancoListas.js";


const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (itemDaLista) => {
    //debugger;
    const descricaoItem = itemDaLista.querySelector("#item-titulo").innerText;
    const checkboxInput = itemDaLista.querySelector(".checkbox-input");
    
    let confirmacao = confirm(`Tem certeza que deseja excluir ${descricaoItem}?`);
    if (confirmacao) {
        itemDaLista.remove();
        if (checkboxInput.checked) {
            excluiDaListaDosComprados(descricaoItem);
        } else {
            excluiDaListaDeCompras(descricaoItem);
        }

    }

    verificarListaVazia(listaDeCompras);
    //verificaListaComprados(listaComprados);
}

export { excluirItem };