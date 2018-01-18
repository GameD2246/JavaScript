//function eleicao() {
//    escolha = parseInt(prompt("Escolha o seu candidado de 1 a 4, nulo outro valor"));
//    switch(escolha){
//        case 1:
//            alert("Candidato 1");
//            break;
//        case 2:
//            alert("Candidato 2");
//            break;
//        case 3:
//            alert("Candidato 3");
//            break;
//        case 4:
//            alert("Candidato 4");
//            break;
//        default:
//            alert("Nulo");
//    }
//}
//
//function onze() {
//    //apresentando os numeros
//    n1 = parseFloat(prompt("Digite o 1º numero inteiro"));
//    n2 = parseFloat(prompt("Digite o 2º numero inteiro"));
//    nREAL = parseFloat(prompt("Digite o numero Real"));
//    
//    //fazendo o primeiro calculo
//    r1 = n1 * 2 * (n2 / 2);
//    
//    alert("o produto do dobro do primeiro com metade do segundo é: " + r1);
//    
//    //fazendo o segundo calculo
//    r2 = n1 * 3 + nREAL;
//    
//    alert("a soma do triplo do primeiro com o terceiro é: " + r2);
//    
//    //fazendo o terceiro calculo
//    r3 = nREAL ** 3;
//    
//    alert("o terceiro elevado ao cubo" + r3);
//    
//}
//function doze(){
//    altura = parseFloat(prompt("Sua altura é:"))
//    
//    r1 = (72.7 * altura) - 58
//    
//    alert("Seu peso ideal é: " + r1)
//}
function treze(){
    sexo = prompt("Digite seu sexo (1) para Masculino (2) para Feminino?")
    
    if (sexo = 1){
        altura = parseFloat(prompt("Sua altura é:"));
            Am = (72.7 * altura) - 58;
            alert("Seu peso masculino ideal é: " + Am.toFixed(2) + "Kg");
    } else if (sexo = 2) {
        alturaf = parseFloat(prompt("Sua altura é:"));
            Af = (62.1 * alturaf) - 44.7;
            alert("Seu peso feminino ideal é: " + Af.toFixed(2) + "Kg");
}

    
//    switch (sexo){
//        case 1:
//            altura = parseFloat(prompt("Sua altura é:"));
//            Am = (72.7 * altura) - 58;
//            alert("Seu peso ideal masculino é:" + Am);
//            break;
//        case 2 :
//            alturaf = parseFloat(prompt("Sua altura é:"));
//            Af = (62.1 * alturaf) - 44.7;
//            alert("Seu peso ideal feminino é:" + Af);
//            break;
//    }
}
