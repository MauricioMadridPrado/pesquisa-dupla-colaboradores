import { colaboradores } from "./listaColaboradores.js";
import { menuPesquisa } from "./criaListaDeNomes.js";
import { criaListaColaboradores } from "./criaLista.js";
import { colaboradoresContainer } from "./criaLista.js";
import { criaListaCpf } from "./listaCpf.js";

export function filtraLista() {
  menuPesquisa.addEventListener("change", (event) => {

    colaboradoresContainer.innerHTML = 
    `
    `
    const pesquisa = event.target.value;
    const listaFiltrada = colaboradores.filter(
      (colaborador) => colaborador.nome == pesquisa
    );

    criaListaColaboradores(listaFiltrada);
    criaListaCpf(listaFiltrada)
  });
}
