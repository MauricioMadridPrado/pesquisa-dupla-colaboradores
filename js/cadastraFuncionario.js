import { initModal } from "./initModal.js";
import { listaDeColaboradores } from "./listaColaboradores.js";
import { criaListaColaboradores } from "./criaLista.js";
import {criaListaDeNomes} from "./criaListaDeNomes.js"
const modal = document.querySelector('[data-modal="container"]')
export function cadastraFuncionario() {
  initModal(modal);

  const formulario = document.querySelector('[data-modal="formulario"]')
  formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let nome = document.getElementById("nome");
    let cpf = document.getElementById("cpf");
    let telefone = document.getElementById("telefone");
    let email = document.getElementById("email");
    const novoColaborador = {
      nome: nome.value,
      cpf: cpf.value,
      telefone: telefone.value,
      email: email.value,
    };

    listaDeColaboradores.push(novoColaborador);
    criaListaColaboradores(listaDeColaboradores);
    criaListaDeNomes(listaDeColaboradores)
    nome.value = "";
    cpf.value = "";
    telefone.value = "";
    email.value = "";
    modal.classList.toggle('ativa')
  });
}
