    const numeroSenha = document.querySelector ('.parametro-senha__texto')
    const campoSenha = document.querySelector ('#campo-senha')

    const forcaSenha = document.querySelector(".forca")
    forcaSenha.classList.add('media')

    campoSenha.value = ('janisch')

    let letraMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letrasMinusculas ='abcdefghijklmnopqrstuwxyz'
    let numeros = '123456789'
    let simbolos = '*&%$#@!'

    tamanhoSenha = 8
    numeroSenha.textContent = tamanhoSenha;

    const checkbox = document.querySelectorAll('.checkbox input')

    for(let i = 0; i < checkbox.length; i++){
        checkbox[i].onclick = geraSenha;
    }

    const botoes =  document.querySelectorAll ('.parametro-senha__botao')

    botoes[0].onclick = diminuir;

    function diminuir() {
        if(tamanhoSenha > 0){
        tamanhoSenha--;
        geraSenha()
        numeroSenha.textContent = tamanhoSenha;
        }
    }

     botoes[1].onclick = aumentar;
    
    function aumentar() {
        if(tamanhoSenha < 20){
        tamanhoSenha++;
        geraSenha()
        numeroSenha.textContent = tamanhoSenha;
        }
    }

    geraSenha()

function geraSenha(){
   
    let alfabeto = ''
   
    if(checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if(checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if(checkbox[2].checked){
        alfabeto = alfabeto + numeros
    }
    if(checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }
}

     let senha = ''{
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + alfabeto[numeroAleatorio]
    }
    campoSenha.value = senha;
    classificarSenha()
}

    geraSenha()

    function geraSenha(){
      let senha = ''
      for(let i = 0; i < tamanhoSenha; i++){
       let numeroAleatorio = Math.random() * 26;
       numeroAleatorio = Math.floor(numeroAleatorio)
       senha = senha + letraMaiusculas[numeroAleatorio]
      }
      campoSenha.value = senha;
      classificarSenha()
    }

    function classificarSenha(){

        forcaSenha.classList.remove('forte' , 'media' , 'fraca')
     
        if(tamanhoSenha > 11){
            forcaSenha.classList.add('forte')
      }else if(tamanhoSenha < 7){
            forcaSenha.classList.add('fraca')
      }else{
         forcaSenha.classList.add('media')
      }

    }