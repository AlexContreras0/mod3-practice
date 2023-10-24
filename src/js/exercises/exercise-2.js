/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
*/

numero = 11;

if(numero%2==0){
        
    showContent(2, (`Number ${numero} is even`));

}else{

    showContent(2, (`Number ${numero} is odd`));
    
}