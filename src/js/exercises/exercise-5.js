/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/

function repetitions(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const letter = input.charAt(i);
        const repeatedLetter = letter.toUpperCase() + letter.toLowerCase().repeat(i);
        result += repeatedLetter;
    }
    return result;
}

const inputString = "Code";
const resultString = repetitions(inputString);
console.log(resultString);

showContent(5, (`${resultString}`));