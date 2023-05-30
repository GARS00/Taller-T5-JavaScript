// VARIABLES //

var numero1 = 23
var numero2 = 30
var numero3 = 11
var resultadoMultiplicacion = numero1 * numero2
var flag = false
var textoResultado = "El resultado de "+numero1+" multiplicado por "+numero2+" es: "+resultadoMultiplicacion
var textoPar 
var textoBucle 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayPares
var texto1 = "Hola, esto es un "
var texto2 = "texto de prueba "
var texto3 = 'concatenado.'
var nombres = ["Guillermo", "Jose", "Pedro", "Juan", "Carlos", "Mario", "Maria", "Alejandro", "Daniel", "Irene"]
let textoMinusculas = "ESTO ES UN TEXTO TRANSFORMADO A MINÚSCULAS"
let textoMayusculas = "esto es un texto transformado a mayúsculas"

// FUNCIONES //

function imprimirMensaje() {
    let mensaje = `Hola, ${nombres[0]}.`
    console.log(mensaje)
    document.write(mensaje)
}

document.write("<br>")
suma(numero1, numero2)
document.write("<br>")

function suma(numero1,numero2) {
    let resultadoSuma = numero1 + numero2
    document.write("El resultado de la suma entre "+numero1+" y "+numero2+" es: "+resultadoSuma)
    console.log("El resultado de la suma entre "+numero1+" y "+numero2+" es: "+resultadoSuma)
}

function comprobarPares() {
    if(resultadoMultiplicacion % 2 === 0) {
        textoPar = "El resultado es Par"
    } else {
        textoPar = "El resultado es Impar"
    }
    return textoPar;
}

// OBJETOS //

let coche = {
    brand: 'Ford',
    model: 'Fiesta',
    year: '2020',
    doors: 5,
    horsepower : {
        firstModel : 120,
        secondModel : 200
    }

}

function numeroPuertas() {
    let puertas = coche.doors
    let mensajePuertas = "El coche tiene "+puertas+" puertas."
    console.log(mensajePuertas)
    document.write(mensajePuertas)
}

function imprimirMarca() {
    let marcaCoche = coche.brand
    let mensajeMarca = "La marca del coche es "+marcaCoche
    console.log(mensajeMarca);
    document.write(mensajeMarca) 
}

function atributoAnidado() {
    let caballos = coche.horsepower.secondModel
    mensajeAnidado = "El modelo del coche tiene "+caballos+" caballos de potencia."
    document.write(mensajeAnidado)
    console.log(mensajeAnidado) 
}
// ARRAYS //

function printNumbers(){
    for(let i = 0; i<array.length; i++) {
        document.write(array[i])
        document.write("<br>")
    }
    return textoBucle
}

array.push(11)
console.log(array)

arrayPares = array.filter(array => array % 2 === 0)
console.log("Array sin numeros Impares: "+arrayPares)

function getMaxOfArray() {
    let max = Math.max.apply(null, array)
    document.write("El número mayor del array es: "+max)
    console.log("El número mayor del array es: "+max)
}

getMaxOfArray()
document.write("<br>")

function getMinOfArray() {
    let min = Math.min.apply(null, array)
    let mensajeMenor = "El número menor del array es: "+min
    document.write(mensajeMenor)
    console.log(mensajeMenor) 
}

function transformarMinusculas() {
    textoMinusculas = textoMinusculas.toLowerCase()
    document.write(textoMinusculas)
    console.log(textoMinusculas)
}

function transformarMayusculas() {
    textoMayusculas = textoMayusculas.toUpperCase()
    document.write(textoMayusculas)
    console.log(textoMayusculas);
}

function imprimirNombres() {
    for (let i = 0; i < array.length-1; i++) {
        console.log(nombres[i])
        document.write(nombres[i])
        document.write("<br>")
    }
}

function imprimirCantiadNumeros() {
    let cantidadNumeros = array.length
    let mensajeCantidad = "El array de números tiene "+ cantidadNumeros +" elementos."
    console.log(mensajeCantidad)
    document.write(mensajeCantidad)
    document.write("<br>")
}

// IMPRIMIR EN CONSOLA //

comprobarPares(numero1)
printNumbers(array)
imprimirCantiadNumeros()


getMinOfArray()
document.write("<br>")
document.write(textoResultado)
console.log(textoResultado)
document.write("<br>")
document.write(textoPar)
document.write("<br>")
document.write(texto1+texto2+texto3)
document.write("<br>")
document.write("Array sin numeros Impares: "+arrayPares+".")
document.write("<br>")
imprimirMensaje()

document.write("<br>")
transformarMinusculas()
document.write("<br>")
transformarMayusculas()
document.write("<br>")
numeroPuertas()
document.write("<br>")
imprimirMarca()
document.write("<br>")
atributoAnidado()
document.write("<br>")
imprimirNombres()





