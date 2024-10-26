
import { manipulaDataTransacao } from "./manipulaDataTransacao.js";
import { colocaItemNaLista } from "./operaListas.js";
import { persisteProduto } from "./operaListas.js";

const item = document.getElementById("input-item");

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

    persisteProduto(objetoProduto, "produtos", "produtos");
    colocaItemNaLista(objetoProduto);
    item.value = "";
}

