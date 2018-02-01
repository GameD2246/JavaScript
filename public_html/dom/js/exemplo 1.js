function calcular(oper) {
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;
    if (oper == "somar") {
        res = parseInt(valor1) + parseInt(valor2);
    } else {
        if (oper == "subtrair") {
            res = valor1 - valor2;
        } else {
            if (oper == "multiplicar") {
                res = valor1 * valor2;
            } else {
                res = valor1 / valor2
            }
        }
    }
    document.calcform.res.value = res;
    
 
}


function exemplo1() {
    a = document.getElementById('valor1').value;
    b = document.getElementById('valor2').value;
    if (a == "" || b == "" || isNaN(a) || isNaN(b)) {
        alert("Algo de errado não esta certo");
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    result = calcular(a, b);
    document.getElementById('res').value = result;

    if (result < 7) {
        document.getElementById('res').style.color = "red";

    } else if (result >= 7) {
        document.getElementById('res').style.color = "blue";

    }


}