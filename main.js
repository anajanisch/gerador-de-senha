    const numeroSenha = document.querySelector ('.parametro-senha__texto')
    const campoSenha = document.querySelector ('#campo-senha')

    campoSenha.value = ('janisch')

    let letraMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letrasMinusculas ='abcdefghijklmnopqrstuwxyz'
    let numeros = '123456789'
    let simbolos = '*&%$#@!'

    tamanhoSenha = 8
    numeroSenha.textContent = tamanhoSenha;

    const botoes =  document.querySelectorAll ('.parametro-senha__botao')

    botoes[0].onclick = diminuir;

    function diminuir() {
        tamanhoSenha--;
        geraSenha()
        numeroSenha.textContent = tamanhoSenha;
    }

     botoes[1].onclick = aumentar;
    
    function aumentar() {
        tamanhoSenha++;
        
        numeroSenha.textContent = tamanhoSenha;
    }
    
    geraSenha()

    function geraSenha(){
      let senha = ''
      for(let i + 0; i < tamanhoSenha; i++){
       let numeroAleatorio = Math>random() * 26;
       numeroAleatorio = Math.floor(numeroAleatorio)
       senha = senha + letraMaiusculas[numeroAleatorio]
      }
      campoSenha.value = senha;
    }
