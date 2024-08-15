//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularMasaCorporal(altura, peso){
  let indiceMasaCorporal = peso / (altura **2)
  console.log(indiceMasaCorporal)
}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// function factorial(n) {
//   return (n != 1) ? n * factorial(n-1) : 1
// }

// console.log(factorial(4))

function factorial2(n) {
  let resultado = 1
  for (let i = 1; i <= n; i++){
      resultado *= i
  }
  return resultado
}

console.log(factorial2(4))


//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAreales(dolar){
  let unReal= 4.80
  let calculo = dolar * unReal
  let resultado = `${dolar} ${(dolar == 1) ? 'dolar' : 'dolares'} equivale a ${calculo} ${(dolar == 1) ? 'real' : 'reales'}`
  return resultado
}

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaPerimetroRectangular(altura, anchura){
  let area = anchura * altura
  let perimetro = (anchura * 2) + (altura * 2)

  alert(`El perimetro es ${perimetro} y el area es ${area}m2`)

}
areaPerimetroRectangular(5,10)


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaPerimetroCircular(radio){
  let pi = 3.14
  let area = pi * (radio ** 2)
  let perimetro = 2(pi * radio)

  console.log(`El perimetro es ${perimetro} y el area es ${area}m2`)

}
areaPerimetroRectangular(5,10)

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.{}
function tablaDeMultiplicar(numero){
  for (let i = i; i <= 10; i++){
    let calculo = numero * i
    let mensaje = `${numero} * ${i} = ${calculo}`
    console.log(mensaje)
  }
}