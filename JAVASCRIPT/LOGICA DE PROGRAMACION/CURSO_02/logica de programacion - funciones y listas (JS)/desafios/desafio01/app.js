let title = document.querySelector("h1")
title.innerHTML = "Hora del Desafío"

function mostrarMensaje(){
  console.log("El botón fue clicado")
}

function preguntarCiudad(){
  ciudad= prompt("Dime una ciudad de Brasil")
  alert(`Estuve en ${ciudad} y me acordé de ti`)
}

function mostrarAlert(){
  alert("Yo amo JS")
}

function mostrarSuma(){
  let numero1 = parseInt(prompt("Ingresa el primer numero a sumar: "))
  let numero2 = parseInt(prompt("Ingresa el segundo numero a sumar: "))

  alert(`La suma es: ${numero1 + numero2}`)
}
