var x = 0;
while(x<10){  //ENQUANTO
    document.write("<br> O valor do x é: " + x);
    x++; //incrementando x

}

for(a=0; a<5; a++){ //início; condição; acréscimo //PARA
    document.write("<br> O valor do a é: " + a);
}

/*É possível também criar uma variável e utilizar dentro do for, por exemplo:
var valor = 30;

for (a=0; a< valor; a++){
    doument.write("<br> O valor do a é: " + a);
}
*/

function pedir(){
    var valor = prompt ("Digite um valor de 1 a 4"); //pedindo para o usuário digitar

    switch(Number(valor)){ //Convertendo o que o usuário vai digitar em número, pq ele entende que é uma string
        case 1: 
            alert("Você escolheu suco");
        break;

        case 2: 
            alert("Você escolheu água gelada");
        break;

        case 3: 
            alert("Você escolheu sorvete");
        break;

        case 4: 
            alert("Você escolheu chamar o garçom");
        break;

        default:
            alert("Escolha entre 1 a 4");
        break;
    }
}

/* Manipulando datas
var data = new Date (); //Vai vir no formato completo da data na hora
data.getHours(); //Vai retornar a hora
data.getUTCMinutes(); //Vai retornar minutos
data.getSeconds(); //Vai retornar secundos

var datanova =new Date("March 10, 2023"); //Criando uma data específica

Date.parse(datanova); //Vai retornar os milissegundos
new Date("coloca o resultado que dá nessa expressão de cima dos milissegundo que vai retornar a data 10 de março de 2023"); 

datanova.getDate(); //Vai retornar o dia
datanova.getUTCMonth(); //Vai retornar o mês
//0 - janeiro, 1 - fevereiro, 2 - março... começa com o 0 os meses

datanova.getDay(); //Vai retornar o dia da semana 
//0 - Domingo, 1 - Segunda, ... 6 - sábado

datanova.getFullYear(); //Vai retornar o ano (2023)

datanova.getDate()+"/"+(datanova.getUTCMonth()+1)+"/"+datanova.getFullYear(); //precisa somar +1 no mês porque ele começa com o 0, desse jeito vai trazer a formatação de data que conhecemos

datanova.setDate(); //Para aumentar algum dia
datanova.setDate(datanova.setDate()+5); //vai retornar os milissegundos, está somando mais 5 dias na data

datanova.setHours(datanova.setHours()+10); //vai acrescentar 10h 

datanova.getDay();
var dias = ['Domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'] //criando um arrey (lista) com os dias da semana
dias[datanova.getDay()]; //Vai retornar com o dia da semana da posição do arrey

*/