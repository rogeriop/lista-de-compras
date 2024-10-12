import { mudarNomeCompras } from "./bancoListas.js";
import { mudarNomeComprados } from "./bancoListas.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        const antigoItem = itemTextoAtualizado.textContent;
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".checkbox-input");
 
        if(estavaComprado.checked) {
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
            mudarNomeComprados(antigoItem, novoItem);
        } else {
            mudarNomeCompras(antigoItem, novoItem);
        }
    }   
}