function boasVindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite o seu nome", "Digite aqui");
    sobrenome = prompt("Digite o seu sobrenome", "Digite aqui");

    alert("Olá " + nome + "" + sobrenome);
}

function some() {
    let valor1, valor2, resultado;

    valor1 = prompt("Digite aqui, o valor inicial:");
    valor2 = prompt("Diite aqui, o valor posterior:");

    resultado = parseInt(valor1) + parseInt(valor2); //Parse int Significa converter em inteiro;Subtrat ParseFLOAT 
    alert(resultado);
}

function subtraia() {
    let valor1, valor2, resultado;

    valor1 = prompt("Digite aqui, o valor inicial:");
    valor2 = prompt("Diite aqui, o valor posterior:");

    resultado = parseInt(valor1) - parseInt(valor2); //Parse int Significa converter em inteiro; ParseFLOAT 
    alert(resultado);
}

function divida() {
    let valor1, resultado;
    let valor2 =0;

    valor1 = prompt("Digite aqui, o valor inicial:");
    valor2 = prompt("Diite aqui, o valor posterior:");
    while (valor2==0) {
        valor2= prompt("Digite outro numero:");
     }
/*     
    if (valor2 == 0) {
        alert("Não é possível calcular!")
    }
    else { */
        resultado = parseInt(valor1) / parseInt(valor2); //Parse int Significa converter em inteiro; ParseFLOAT 
        alert(resultado);
    }


function multiplique() {
    let valor1, valor2, resultado;

    valor1 = prompt("Digite aqui, o valor inicial:");
    valor2 = prompt("Diite aqui, o valor posterior:");

    resultado = parseInt(valor1) * parseInt(valor2); //Parse int Significa converter em inteiro; ParseFLOAT 
    alert(resultado);
}
