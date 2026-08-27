    const numeroSenha = document.querySelector ('.parametro-senha__texto')
    const campoSenha = document.querySelector ('#campo-senha')

    campoSenha.value = ('janisch')

    let letraMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let letrasMinusculas ='abcdefghijklmnopqrstuwxyz'

    tamanhoSenha = 8
    numeroSenha.textContent = tamanhoSenha;

    const botoes =  document.querySelectorAll ('.parametro-senha__botao')

    botoes[0].onclick = diminuir;

    function diminuir() {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
    }

     botoes[1].onclick = aumentar;
    
    function aumentar() {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
    }
    
