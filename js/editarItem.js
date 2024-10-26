import { mudarNomeCompras } from "./operaListas.js";
import { mudarNomeComprados } from "./operaListas.js";
import { manipulaDataTransacao } from "./manipulaDataTransacao.js";

export const editarItem = (itemDaLista) => {
    const itemTextoAtualizado = itemDaLista.querySelector("#item-titulo");
    const antigoItem = itemTextoAtualizado.textContent;
    let novoItem = prompt(`Digite novo nome do item: [${antigoItem}]`);
    if (novoItem !== null && novoItem.trim() !== "") {
        itemTextoAtualizado.textContent = novoItem;
        const estavaComprado = itemDaLista.querySelector(".checkbox-input");
 
        const novaDataHora = manipulaDataTransacao();
        const itemData = itemDaLista.querySelector(".data-hora-texto");
        itemData.innerText = novaDataHora;

        if(estavaComprado.checked) {
            itemDaLista.querySelector(".checkbox-input").checked = true;
            itemDaLista.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
            mudarNomeComprados(antigoItem, novoItem, novaDataHora);
        } else {
            mudarNomeCompras(antigoItem, novoItem, novaDataHora);
        }
    }   
}