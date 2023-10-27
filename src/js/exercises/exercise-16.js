/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/


function centuryOfTheYear(year) {
    const century = Math.ceil(year / 100);
    return century;
}

const year = 2023;
const century = centuryOfTheYear(year);

showContent(16, `${year} belongs to ${century}`);