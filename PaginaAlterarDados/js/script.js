function Caracter_invalido(){
  var texto = document.getElementById("teste")
  var teste = texto.value;
  var string_array = [teste.split("")];
  var chars_invalidos = [",","=","/","(",")","*","'"];
  console.log(chars_invalidos)
  console.log(string_array)
  for(var i = 0; i < string_array.length; i++){
      for(var c = 0; c < chars_invalidos.length; c++){
        if (chars_invalidos[c] == string_array[i]){
          window.alert("Erro")
          i++
          c++
          console.log("1")
        }else if(string_array[i] != chars_invalidos[i]){
          console.log("0")
          i++
          c++
          console.log(string_array[i])
      }
    }
  }
}

function habilitarTelefone() {
    document.getElementById("numeroQuarto").disabled = false;
}
function habilitarNome() {
  document.getElementById("camas").disabled = false;
}
f

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




//verificação do campo numero de camas

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





