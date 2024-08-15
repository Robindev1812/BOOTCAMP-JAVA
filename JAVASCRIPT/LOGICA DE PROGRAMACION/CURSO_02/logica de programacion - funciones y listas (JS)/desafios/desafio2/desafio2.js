// Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld(){
  console.log("¡Hola, mundo!")
}
helloWorld()


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function helloNombre(nombre){
  let mensaje = `¡Hola, ${nombre}!`
  console.log(mensaje)
}
helloNombre()


// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(){
  return numero * 2
}
console.log(duplicarNumero())


// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3){
  let promedio = (numero1 + numero2 + numero3) / 3
  return promedio
}
console.log(promedio())


// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(numero1, numero2){
  if (numero1 > numero2) {
    return `El número mayor es: ${numero1}`
  }else{
    return `El número mayor es: ${numero2}`
  }
}

console.log(numeroMayor())


// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function potencia2(numero){
  let potencia = numero * numero
  return potencia
}
console.log(potencia2())