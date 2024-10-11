import { verificarListaVazia } from "./verificarListaVazia.js";
//import { verificarListaComprados } from "./verificaListaComprados.js";
import { excluiDaListaDeCompras } from "./bancoListas.js";
import { excluiDaListaDosComprados } from "./bancoListas.js";


const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    const descricaoItem = elemento.querySelector("#item-titulo").innerText;
    console.log(descricaoItem);
    const checkboxInput = elemento.querySelector(".checkbox-input");
    console.log(checkboxInput);
    console.log(checkboxInput.checked);

    if (confirmacao) {
        elemento.remove();
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