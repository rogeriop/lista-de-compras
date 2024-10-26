
import { adicionarItem } from "./js/adicionarItem.js";
import { carregaListaNoFormularioDeCompras, carregaListaNoFormularioDeComprados, ordenaListaCompras, ordenaListaComprados, excluiListaCompras, excluiListaComprados } from "./js/operaListas.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const botaoOrdenaListaCompras = document.getElementById("botao__ordena-listaCompras");
botaoOrdenaListaCompras.addEventListener("click", ordenaListaCompras);

const botaoOrdenaListaComprados = document.getElementById("botao__ordena-listaComprados");
botaoOrdenaListaComprados.addEventListener("click", ordenaListaComprados);

const botaoExcluiListaCompras = document.getElementById("botao__exclui-listaCompras");
botaoExcluiListaCompras.addEventListener("click", excluiListaCompras);

const botaoExcluiListaComprados = document.getElementById("botao__exclui-listaComprados");
botaoExcluiListaComprados.addEventListener("click", excluiListaComprados);

carregaListaNoFormularioDeCompras();
carregaListaNoFormularioDeComprados();

