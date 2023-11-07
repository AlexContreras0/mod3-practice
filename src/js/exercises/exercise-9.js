/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

const randomNums = [];
for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 101);
  randomNums.push(randomNum);
}

const minNum = Math.min(...randomNums);
const maxNum = Math.max(...randomNums);

showContent(9, `Random numbers are ${randomNums} // min number is ${minNum} // max number is ${maxNum}`);