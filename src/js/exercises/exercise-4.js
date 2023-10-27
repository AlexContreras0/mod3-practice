/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

let text = `Hi, I am learning Javscript`;
const vowels = "aeiouáéíóúAEIOU";

for(let i=0; i<vowels.length; i++) {
    const vowel = vowels.charAt(i);
    if (text.includes(vowel)) {
        text = text.replaceAll(vowel, "");
    }
}

showContent(4, text);
