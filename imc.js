

var peso;
var altura;
var imc;
var resultado;


function calcular(event) {

    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    altura = parseFloat(document.getElementById("altura").value.replace(",","."));

    /*console.log(peso);
    console.log(alutra);*/

    imc = peso / altura ** 2;

    console.log(imc);

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> cuidado você está muito abaixo do peso!";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> você está abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> você está no peso ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> você está com sobrepeso!";
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> cuidado você está com obesidade grau I !";
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> cuidado você está com obesidade grau II !";
    } else if (imc >= 40) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> cuidado você está com obesidade grau III !";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";


}
