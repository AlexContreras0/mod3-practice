/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/


function isograma(text) {
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            if (text[i] === text[j]) {
                return `${text} no es isograma`;
            }
        }
    }

    return `${text} es un isograma`;
}

const text = "hola mundo";
const result = isograma(text);

showContent(17, result);