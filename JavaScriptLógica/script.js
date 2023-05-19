function concat() {
    let nome = document.getElementById("pNome").value;
    let sobre = document.getElementById("pSobre").value;
    if (nome || sobre ==null) {
        alert("Preencha os campos vazios")
    }
    alert(nome+""+sobre);
}