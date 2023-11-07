/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

let txt = "texto de práctica para el ejercicio 3";
const vowel = "aeiouáéíóú";
let count = 0;

for (let i = 0; i < txt.length; i++) {
    if (vowel.includes(txt.charAt(i))) {
        count++;
    }
}

showContent(3, `Number of vowels is ${count}`);