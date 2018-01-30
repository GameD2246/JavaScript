//function exercicio1(numero) {
//    var resposta = "";
//    for (i = 1; i<=numero; i++) {
//        for(j = 1; j<=i; j++){
//            resposta = resposta + i + " ";
//        }
//        resposta = resposta + "<br>";
//    }
//    return resposta
//}
//document.write(exercicio1(10))

//function exercicio2(numero) {
//    var resposta = "";
//    for (i = 1; i<=numero; i++) {
//        for(j = 1; j<=i; j++){
//            resposta += j + " ";
//        }
//        resposta = resposta + "<br>";
//    }
//    return resposta
//}
//document.write(exercicio2(3))

//function exercicio3(numero1, numero2, numero3){
//    return numero1 + numero2 + numero3
//    
//}
//document.write(exercicio2(1, 2, 3))

//function exercicio4 (letra){
//    if (letra > 0) {
//        return "P"
//    } else if (letra < 0) {
//        return "N"
//    } else {
//        return "Zero"
//    }
//}
//
//document.write(exercicio3(2))

//function somaImposto(taxaimposto, custo){
//    return (0.01*taxaimposto)*custo + custo
//    
//}
//document.write(somaImposto(5, 2000))


function exercicio6(h, m){
    situacao = "";
    if(hora > 12 && hora < 24){
        hora = hora - 12;
        situacao = "PM";
    } else {
        situacao = "AM"
    }
    return hora + ":" + minuto+situacao;
    
}

function saida(){
    
}