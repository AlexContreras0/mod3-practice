/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/


function lowerCase(text) {
    return text.toLowerCase();
}

function spaces(text) {
    return text.replaceAll(" ", "");
}

function characterPositionsInAlphabet(text) {
    text = spaces(lowerCase(text));
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const positions = [];

    for (let i = 0; i < text.length; i++) {
        const chart = text[i];
        const position = alphabet.indexOf(chart) + 1;
        positions.push(position);
    }

    return positions;
}

const inputText = "text for the exercise";

showContent(8, characterPositionsInAlphabet(inputText));