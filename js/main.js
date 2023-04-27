import { criaListaColaboradores } from "./criaLista.js";
import { listaDeColaboradores } from "./listaColaboradores.js";
import { filtraLista } from "./filtraListaNome.js";
import { criaListaDeNomes } from "./criaListaDeNomes.js";
import { cadastraFuncionario } from "./cadastraFuncionario.js"
criaListaColaboradores(listaDeColaboradores)
criaListaDeNomes(listaDeColaboradores)
filtraLista()
cadastraFuncionario()

