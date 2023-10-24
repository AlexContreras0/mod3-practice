/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

let text = "texto de práctica para el ejercicio 3";
const vowels = "aeiouáéíóú";
let result = 0;

for(let i=0; i<text.length; i++) {
    if (vowels.includes(text.charAt(i))) {
        result++;
    }  
}

showContent(3, (`Number of vowels is ${result}`));