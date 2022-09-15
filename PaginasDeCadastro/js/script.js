
//botão cadastrar
const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=> cadastrar())





// verificação do campo numero 

const $numero = document.getElementById("numeroQuarto")

$numero.addEventListener('blur',()=>{
  
  const inputUsuario = $numero.value


  

  
  if(inputUsuario.length <= 1 ){
    $numero.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-numero").style.display ='flex'

  }
  //retorna ao normal
  else{
    $numero.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-nome").style.display ='none'
  }

  

})




// verificação do campo andar

const $andar = document.getElementById("andar")

$andar.addEventListener('blur',()=>{
  
  const inputUsuario = $andar.value


  

  
  if(inputUsuario.length < 6){
    $andar.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-andar").style.display ='flex'
  }
  //retorna ao normal
  else{
    $andar.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled="none"
    document.querySelector("#erro-andar").style.display ='none'
  }

  

})



// verificação do campo numero de camas

const $camas = document.getElementById("camas")

$camas.addEventListener('blur',()=>{
  
  const inputUsuario =parseInt($camas.value)


  

  
  if(inputUsuario.toString().length < 11){
    $camas.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-camas").style.display ='flex'
    
  }
  //retorna ao normal
  else{
    $camas.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-camas").style.display ="none"
  }

  

})



