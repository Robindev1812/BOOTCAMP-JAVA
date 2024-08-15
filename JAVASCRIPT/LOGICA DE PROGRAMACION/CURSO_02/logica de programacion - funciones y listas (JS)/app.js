//Optimizando la funcionalidad para agregar texto a una etiqueta html

// let title = document.querySelector("h1")
// title.innerHTML = "Juego del número secreto"

// let parrafo = document.querySelector(".texto__parrafo")
// parrafo.innerHTML = "Escoge un número del 1 al 9"

//Código optimizado:

let numeroSecreto = generarNumeroSecreto()
console.log(numeroSecreto)


function asignarTextoElementoHtml(elemento, texto){
  let elementoHTML = document.querySelector(elemento)
  elementoHTML.innerHTML = texto
}

asignarTextoElementoHtml("h1", "Juego del número secreto ")
asignarTextoElementoHtml("p","Escoge un número del 1 al 100")



function verificarIntento(){
  numeroSecreto
  let numeroUsuario = parseInt(document.getElementById("input-id").value)
  //console.log(numeroUsuario)
  if (numeroSecreto == numeroUsuario) {
    console.log("true")
    return true
  }else {
    console.log('false')
    return false
  }
 
}

function generarNumeroSecreto(){
  let numeroSecreto = Math.floor(Math.random()*10)+1
  return numeroSecreto
}


