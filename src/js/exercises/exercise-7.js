/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

let text = "Anilina atar a la latina";

function lowerCase(text) {
    return text.toLowerCase();
}

function spaces(text) {
    return text.replaceAll(" ","");
}

text = lowerCase(text);
text = spaces(text);

let textInv = text.split("").reverse().join("");

function isPalindrome(text, textInv) {

    if(text === textInv) {
        return `${text} is a palindrome`
    }else{
        return `${text} is not a palindrome`
    }

}

let result = isPalindrome(text, textInv);

showContent(7, result);