import { criaListaColaboradores } from "./criaLista.js";


const containerPesquisa = document.getElementById("pesquisa__cpf");
containerPesquisa.innerHTML += 
  `
      <label>Pesquisa por cpf</label>
      <select id="menu__pesquisa__cpf" class="pesquisa__nomes">
      </select>
  `
  ;

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
