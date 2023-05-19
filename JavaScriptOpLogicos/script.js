
/* function nParImpar() {
    let Result= parseInt(numero)%2;

    if (Result==0) {
        alert(Result+" Este aqui é par")
    }
    else{
        alert(Result+" Esse é impar")
    }
} */
function Operar() {
    let numero1 = parseInt(document.getElementById("n1Digitado").value); //getElementById, serve para ir no html e pergar o elemento que tem o id
    let numero3 = document.getElementById("Select").value;
    let numero2 = parseInt(document.getElementById("n2Digitado").value); 
    let Resultado;
    
    switch (numero3) {

        case "+": 
        Resultado= numero1+numero2
            break;
        case "-":
            Resultado= numero1-numero2
            break;
        case "*":
            Resultado= numero1*numero2
            break;
        case "/":
            if(numero2!=0){
                Resultado= numero1/numero2
            }
            else{
                alert("Não pode Divisão por ZERO")
            }
            break
        default:
            alert("Selecione n° válidos")
            break;
    }
   alert(Resultado)
   
    
}
