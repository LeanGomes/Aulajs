/*Escreva um script que gere uma tabela de temperaturas,
em que a primeira coluna mostre temperaturas em Fahrenheit,
e a segunda, as equivalentes em Celsius.
Devem ser exibidas todas as temperaturas
Fahrenheit entre -50F e 50F, com incrementos de 5F.
*/

for (let i = -50; i <= 50; i++) {
   
    console.log(i ,(5/9)*(i - 32));
    //console.log(5/9)*(i - 32);
    
    i+=5;
    
}