function somar(valor1, valor2) {
    return valor1 + valor2;
}

function exemplo1() {
    var a = document.getElementById('valor1').value;
    var b = document.getElementById('valor2').value;
    var o = document.getElementById('operacao').value;
    if (a == "" || b == "" || isNaN(a) || isNaN(b)) {
        alert("Algo de errado não está certo");
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    o = parseInt(o);
    var result = 0;
    switch (o) {
        case 1:
            result = somar(a, b);
            break;
        case 2:
            result = a - b;
            break;
        case 3:
            result = a * b;
            break;
        case 4:
            result = a / b;
            break;
    }
    document.getElementById('bloco').style.display = "block";
    document.getElementById('resultado').value = result;
}

function mudarCor() {
    var cor = Math.round(Math.random() * 4);
    var cores = new Array("red", "blue", "pink", "yellow", "green");
    document.getElementById('corpo').style.backgroundColor  = cores[cor];
}
