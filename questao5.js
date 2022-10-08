/*Modifique a questão anterior para ler a 
temperatura em Fahrenheit 
a partir de um parâmetro da linha de comando.
*/
let valor = process.argv[2] ;

let celsius = (5/9)*(valor - 32);

console.log(valor);
console.log(celsius);

