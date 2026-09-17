    const numeroSenha = document.querySelector ('.parametro-senha__texto')
    const campoSenha = document.querySelector ('#campo-senha')

    const forcaSenha = document.querySelector("forca")
    forcaSenha.classList.add('media')

    campoSenha.value = ('janisch')

    let letraMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letrasMinusculas ='abcdefghijklmnopqrstuwxyz'
    let numeros = '123456789'
    let simbolos = '*&%$#@!'

    tamanhoSenha = 8
    numeroSenha.textContent = tamanhoSenha;

    const checkbox = document.querySelectorAll('.checkbox')

    for(let i = 0; i < checkbox.length; i++){
        checkbox[i].onclik = geraSenha;
    }

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
        geraSenha()
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
      classificarSenha()
    }

    function classificarSenha(){
     
        if(tamanhoSenha > 11){
            forcaSenha.classList.add('forte')
      }

    }