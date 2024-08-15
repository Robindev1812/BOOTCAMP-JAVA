//Optimizando la funcionalidad para agregar texto a una etiqueta html

// let title = document.querySelector("h1")
// title.innerHTML = "Juego del número secreto"

// let parrafo = document.querySelector(".texto__parrafo")
// parrafo.innerHTML = "Escoge un número del 1 al 9"

//Código optimizado:

let numeroSecreto = 0
console.log(numeroSecreto)
let intentos = 1


function asignarTextoElementoHtml(elemento, texto){
  let elementoHTML = document.querySelector(elemento)
  elementoHTML.innerHTML = texto
}


function verificarIntento(){
  numeroSecreto
  let numeroUsuario = parseInt(document.getElementById("input-id").value)
  //console.log(numeroUsuario)
  if (numeroSecreto == numeroUsuario) {
    document.getElementById("reiniciar").removeAttribute("disabled")
    asignarTextoElementoHtml("p", `Acertastes en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`)
  }else {
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElementoHtml("p", "Fallaste, el número secreto es mayor")
    }else {
      asignarTextoElementoHtml("p", "Fallaste, el número secreto es menor")
    }
    intentos++
    limpiarInput()
  }
 
}

function generarNumeroSecreto(){
  let numeroSecreto = Math.floor(Math.random()*10)+1
  return numeroSecreto
}

function limpiarInput(){
  document.getElementById("input-id").value = ""
}

function reiniciarJuego(){
  limpiarInput()
  condicionesIniciales()
}


function condicionesIniciales(){
  numeroSecreto = generarNumeroSecreto()

  asignarTextoElementoHtml("h1", "Juego del número secreto ")
  asignarTextoElementoHtml("p","Escoge un número del 1 al 10")

  document.getElementById("reiniciar").setAttribute("disabled","true")

  intentos = 1
}

condicionesIniciales()