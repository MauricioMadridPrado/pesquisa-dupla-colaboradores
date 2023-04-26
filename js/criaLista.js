export const colaboradoresContainer = document.getElementById("colaboradores");

export function criaListaColaboradores(colaboradores) {
  colaboradoresContainer.innerHTML = ` `
  colaboradores.forEach((colaborador) => {
    colaboradoresContainer.innerHTML += `
        <div class="colaborador" data-colaborador="${colaborador.nome}">
            <ul class="colaborador__dados">
                <li class="colaborador__dados__item">Nome:${colaborador.nome}</li>
                <li class="colaborador__dados__item">Cpf: ${colaborador.cpf}</li>
                <li class="colaborador__dados__item">Telefone: ${colaborador.telefone}</li>
                <li class="colaborador__dados__item">Email:${colaborador.email}</li>
            </ul>
        </div>  
    `;

  });

}
