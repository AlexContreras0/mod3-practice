/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/

function textToHashtag(string) {
    const words = string.split(' ');

    const hashtags = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return `#${hashtags}`;
}

const originalText = "Bootcamp en CodeSpace";

showContent(18, textToHashtag(originalText));