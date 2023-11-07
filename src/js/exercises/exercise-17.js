/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/


function isograma(phrase) {
    phrase = phrase.toLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        for (let j = i + 1; j < phrase.length; j++) {
            if (phrase[i] === phrase[j]) {
                return `${phrase} no es isograma`;
            }
        }
    }

    return `${phrase} es un isograma`;
}

const phrase = "hola mundo";

showContent(17, isograma(phrase));