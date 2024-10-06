import { verificarListaVazia } from "./verificarListaVazia.js";
//import { verificarListaComprados } from "./verificaListaComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    if (confirmacao) {
        elemento.remove();
    }

    verificarListaVazia(listaDeCompras);
    //verificaListaComprados(listaComprados);
}

export { excluirItem };