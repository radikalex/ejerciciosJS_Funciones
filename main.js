// 1. Funciones

// 1
function clasificacionPorNota( nota ) {

    if(typeof nota !== "number")
        return


    // El switch no usa break porque usa return y es innecesario
    switch(nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return ("Insuficiente");
        case 5:
        case 6:
            return ("Suficiente");
        case 7:
        case 8:
            return ("Notable");
        case 9:
        case 10:
            return ("Sobresaliente");
        
        default:
            console.log("El número introducido no esta en el rango 0-10")
    }
}
// let nota = + prompt("Introduce la nota")
// console.log(clasificacionPorNota(nota));
console.log(clasificacionPorNota(9));

// 2
function resta(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number')
        return console.log("Alguno de los valores introducidos no es un número");
    return (a - b);
}
console.log(resta(2, 5));

// 3
function duplicaNumero(numero) {
    if(typeof numero !== 'number')
        return console.log("Debo ser ejecutada con un número");
    return (2*numero)
}
console.log(duplicaNumero(7));

// 4
function caracterInicial(cadena) {
    if(typeof cadena !== 'string')
        return console.log("Debo ser ejecutada con un string");
    else if(cadena === "")
        return console.log("Debo ser ejecutada con un string no vacío");
    return cadena[0];
}
console.log(caracterInicial("Prueba"));

// 5
function ultimoCaracter(cadena) {
    if(typeof cadena !== 'string')
        return console.log("Debo ser ejecutada con un string");
    else if(cadena === "")
        return console.log("Debo ser ejecutada con un string no vacío");
    return cadena[cadena.length - 1];
}
console.log(ultimoCaracter("Prueba"));

// 6
function cuentaCaracteres(cadena) {
    if(typeof cadena !== 'string')
        return console.log("Debo ser ejecutada con un string");
    return cadena.length;
}
console.log(cuentaCaracteres("Prueba"));

// 7
// Esta función no tiene en cuenta acentos, comas, puntos, etc.
function esPalindromo(cadena) {
    if(typeof cadena !== 'string' || cadena === "")
        return console.log("no es un formato correcto");
    const cadenaSinEspacios = cadena.toLowerCase().split(" ").join("");
    let i = 0;
    let j = cadenaSinEspacios.length - 1;

    while( i <= j) {
        if(cadenaSinEspacios[i] !== cadenaSinEspacios[j])
            return ("No es una palabra o frase palíndroma");
        i++;
        j--;
    }
    return ("Es una palabra o frase palíndroma");
}
console.log(esPalindromo("Yo hago yoga hoy"));

// 8
function getPrecioMostrar(numero) {
    if( typeof numero !== 'number')
        return console.log("no es un formato correcto")
    return (`${numero.toFixed(2)} €`);
}
console.log(getPrecioMostrar(2.25457))

// 9
function division(numero1, numero2) {
    if( typeof numero1 !== 'number' && typeof numero1 !== 'number')
        return console.log("Alguno de los valores introducidos no es número")
    return (numero1 / numero2);
}
console.log(division(7, 2));

// 10
function numerosMayoresQue5 (array) {
    return array.filter(numero => numero > 5);
}
console.log(numerosMayoresQue5([3, 6, 8, 2]))

// 11
function esNumeroPrimo(numero){
    if(numero < 1)
        return console.log("El numero introducido no puede ser 0 o negativo")
    for(let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return console.log("El numero " + numero + " no es primo");
        }
    }
    return console.log("El numero " + numero + " es primo");
}
// const numero = +prompt("Introduce un número para comprobar si es primo");
// esNumeroPrimo(numero);
esNumeroPrimo(13);


// Extras

// 1
function obtenerImpares(array) {
    return array.filter(numero => numero % 2 ); // si es 0 es false y no se guardan los pares
}
console.log(obtenerImpares([23, 11, 6, 78, 103]));

// 2
function sumarArray(array) {
    let resultado = 0;
    for(const element of array)
        resultado += element;
    return resultado;
}
console.log(sumarArray([1, 2, 3]))

// 3
function multiplicarArray(array) {
    let resultado = 1;
    for(const element of array) 
        resultado *= element;
    return resultado;
}
console.log(multiplicarArray([2, 3, 4]))

// 4 
function checkPassword() {
    const password = "javascript";
    let intentos = 3;

    while(intentos !== 0) {
        const passwordPrompt = prompt("Introduce la contraseña");
        if(passwordPrompt === password)
            return alert("Enhorabuena")
        else {
            intentos--;
            if( intentos === 0)
                alert("Te has quedado sin intentos. :(")
            else
                alert("Esa no es la contraseña, prueba de nuevo. Intentos restantes: " + intentos);
        }
    }
    
    
}
// Descomentar para ver funcionalidad
// checkPassword();