/*Escreva um script que leia 3 valores como parâmetros 
da linha de comando e escreva na tela o maior deles.

Dica: Use parseInt(...) para converter as strings 
lidas nos parâmetros em números inteiros.
*/

let a = process.argv[2] ;
let b = process.argv[3] ;
let c = process.argv[4] ;

if (parseInt(a) > parseInt(b) && parseInt(a)> parseInt(c)) {

    console.log('A e o maior numero:' + a);
    
}else if (parseInt(b) > parseInt(a) && parseInt(b)> parseInt(c)) {
    console.log('B e o maior numero:' + b);
} else {
    console.log('C e o maior numero:' + c);
}

