/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

let texto = "Anilina atar a la latina";

function lowerCase(text) {
    return text.toLowerCase();
}

function spaces(texto) {
    return texto.replaceAll(" ", "");
}

texto = lowerCase(texto);
texto = spaces(texto);

let textInv = text.split("").reverse().join("");

function isPalindrome(text) {

    if (text === textInv) {
        return `${text} is a palindrome`;
    } else {
        return `${text} is not a palindrome`;
    }

}

showContent(7, isPalindrome(texto));