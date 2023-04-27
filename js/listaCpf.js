import { criaListaColaboradores } from "./criaLista.js";


const containerPesquisa = document.getElementById("pesquisa__cpf");


export function criaListaCpf(listaFiltrada) {
  const localPesquisaCpf = document.getElementById("menu__pesquisa__cpf");
  localPesquisaCpf.innerHTML = ` `;

  listaFiltrada.forEach((item) => {
    localPesquisaCpf.innerHTML += 
      `
        <option class="cpf">${item.cpf}</option>
      `;
  });

  localPesquisaCpf.addEventListener("change", () => {
    const listaFiltradaPorCpf = listaFiltrada.filter(
      (colaborador) => colaborador.cpf == localPesquisaCpf.value
    );
    console.log(listaFiltradaPorCpf)
    criaListaColaboradores(listaFiltradaPorCpf);
  });
}
