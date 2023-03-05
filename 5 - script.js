var peso;
var altura;
var IMC;
var resultado;
//só inicializando as variáveis

function calcular(event){
    event.preventDefault(); //Isso é para os dados não sumirem quando você colocar pra calcular

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    IMC = peso / (altura*altura);

    if(IMC<17){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Cuidado, você está muito abaixo do peso!'
    } //toFixed(2) duas casas deciamais após a vírgula
    else if(IMC>17 && IMC<=18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Você está abaixo do peso!'
    }
    else if(IMC>=18.5 && IMC<=24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Parabéns, você está no peso ideal!'
    }
    else if(IMC>=25 && IMC<=29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Você está acima do peso!'
    }
    else if(IMC>=30){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Cuidado, alerta de obesidade!'
    }

    /* Outro jeito de fazer seria: 
    resultado = document.getElementById("resultado"); //colocando logo em cima e não precisa colocar em cada if
    if(IMC<17){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Cuidado, você está muito abaixo do peso!'
    } //toFixed(2) duas casas deciamais após a vírgula
    else if(IMC>17 && IMC<=18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Você está abaixo do peso!'
    }
    else if(IMC>=18.5 && IMC<=24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Parabéns, você está no peso ideal!'
    }
    else if(IMC>=25 && IMC<=29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Você está acima do peso!'
    }
    else if(IMC>=30){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + IMC.toFixed(2) + '<br/>Cuidado, alerta de obesidade!'
    } */

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = ''; //passando para uma string vazia
    

}