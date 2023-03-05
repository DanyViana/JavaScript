var area = document.getElementById("area") //Acessando o documento e pegando um elemento pelo ID - no caso area

function entrar(){
    //alert("Clicouuuu!")

    var nome = prompt ("Digite o seu nome"); //Pedir o nome e salvar numa variável 

    //Verificando caso o usuário deixe em branco ou cancele:
    if(nome === '' || nome === null){ //Se não for digitado nome ou for cancelado
        alert("Ops, algo deu errado!")
        area.innerHTML = "Clique no botão para acessar..."
    } else{
        area.innerHTML = "Bem vindo(a) " + nome +"! "; //Acessando a area e mostrando no html

        //Para criar mais um elemento, mais um botão
        let botaoSair = document.createElement("button"); //Acessando o documento e criando um elemento do tipo botão
        botaoSair.innerText = "Sair da conta"; //dentro da tag
        
        botaoSair.onclick = sair; //Quando clicar no botão sair da conta ele vai chamar a função de sair.

        //Aplicando ele dentro do h2
        area.appendChild(botaoSair); //Acessando a area h2, colocando mais um elemento chamado botaoSair, coloca no h2 através do javascrip
    }
}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu!"
}

function mediaAluno(nota1, nota2){ //São os parâmetros da função
    var media = (nota1 + nota2)/2;

    if(media >= 7){
        console.log("Aluno aprovado com a média: " + media + ".")
    } else if(media < 7){
        console.log("Aluno reprovado com a média: " + media + ".")
    }
} //Como não estamos chamando essa função em lugar nenhum, vá no navegador, com o botão direito clique em inspecionar e abra o console, lá digite mediaAluno e insira os parâmetros na função, por exemplo: mediaAluno(7,8), ao dar enter ele irá retornar ao resultado conforme o if. 

function aluno(nome, curso){
    var mensagem = "Seja bem vindo(a) " + nome + " ao curso de " + curso + ".";
    console.log(mensagem);

}