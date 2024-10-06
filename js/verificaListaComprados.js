const mensagemListaComprados = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    if (lista.childElementCount === 0) {
        mensagemListaComprados.style.display = "block";
    } else {
        mensagemListaComprados.style.display = "none";
    }
}