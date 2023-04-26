export const menuPesquisa = document.getElementById("menu__pesquisa");
export function criaListaDeNomes(colaboradores) {

  const nomeColaboradores = [];

  colaboradores.forEach(colaborador =>{

  const existe = nomeColaboradores.find((nome) => nome == colaborador.nome);

  !existe ? nomeColaboradores.push(colaborador.nome) : null;

})

const nomesColaboradoresOrdenados = (nomeColaboradores.sort());

  menuPesquisa.innerHTML = ` `
  nomesColaboradoresOrdenados.forEach((colaborador) => {
    menuPesquisa.innerHTML += `
    <option class="nome">${colaborador}</option>
    `;
  });
}
