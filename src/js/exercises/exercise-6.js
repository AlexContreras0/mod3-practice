/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  randomNumbers.push(randomNumber);
}

const minNumber = Math.min(...randomNumbers);
const maxNumber = Math.max(...randomNumbers);

showContent(6, (`Random numbers are ${randomNumbers}, min number is ${minNumber} and max number is ${maxNumber}`));