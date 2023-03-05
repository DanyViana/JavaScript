//var lista = []; //Lista vazia ou podemos passar os parâmetros:
var lista = ['Dany', 'ADS', 'Mallory', 67];

//Ao chamar a lista ele irá retornar os 4 elementos, lembrando que a lista começa no elemento 0
//E para chamar algum dos elementos:
lista[1]; //Vai retornar ADS
lista.length; //Vai retornar o tamanho da lista 
lista.indexOf('Mallory') //Vai retornar a posição do item da lista, nesse caso é 2
lista.indexOf('João') //Vai retornar -1 pois não consta na lista 
lista[1]= "ADS - Estácio" //vai alterar o item da posição 1
lista.push('Curso') //Vai adicionar na lista 
lista.shift() //Vai remover o primeiro item do array 
lista.pop() //Vai remover o último item da lista 
lista.join(';') //Os itens da lista serão retornados de forma separada por ;, vira uma string


