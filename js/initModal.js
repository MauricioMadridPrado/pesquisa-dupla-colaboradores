export function initModal(modal){
    const botaoCadastro = document.querySelector('[data-cadastro="botao"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    
    
    botaoCadastro.addEventListener('click' , toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    
    function toggleModal(){
        modal.classList.toggle('ativa')
    }
    }
    