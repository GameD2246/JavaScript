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
//        Exercicio 1
//            var alo = alert("Alo Mundo");
//       
//       
//        Exercicio 2
//            Digitando o Numero
//            var n1 = prompt("Informe o Numero")
//            
//            Informando o Numero
//            var n= alert("Seu Numero é " + n1)
//            
//
//        
//        Exercicio 3 Somando Valores
//            Digitando o Numero
//            var n1 = parseFloat(prompt("Informe o Numero 1"));
//            var n2 = parseFloat(prompt("Informe o Numero 2"));
//            var valor = (n1 + n2);
//            Informando o Numero
//            alert("Seu Numero é " + valor );
//            
//
//        
// Exercicio 4 Média ponderada
//            informando as notas
//            var n1 = parseFloat(prompt("Infome a nota 1"));
//            var n2 = parseFloat(prompt("Infome a nota 2"));
//            var n3 = parseFloat(prompt("Infome a nota 3"));
//            var n4 = parseFloat(prompt("Infome a nota 4"));
//            
//            //calculando a média
//            var m = (n1*1 + n2*2 + n3*3 + n4*4) / 10;
//            
//            //Exibindo a média
//            alert("Sua Média é " + m.toFixed(2));
//
//        
// Exercicio 5 Convertendo metros em centimetros
//            var m = parseFloat(prompt("Metros"));
//            con = m*100;
//            alert("Centimetros" + con);
//            
//
//       
// Exercicio 6 calculando raio
//           pi = 3.14
//           r = parseFloat(prompt("Informe a área"));
//           cal = pi * (r * r5);
//           alert("Sua área é "+cal + "m²");
//
//       
// Exercicio 7 Area do quadrado ao ²
//           altura = parseFloat(prompt("Informe a Altura"));
//           largura = parseFloat(prompt("Informe a Largura"));
//           area = altura * largura;
//           alert("Sua Área " + area*2);
//
//       
// Exercicio 8 
//           d = parseFloat(prompt("Informe quanto você ganha por hora"));
//           h = parseFloat(prompt("Informe a quantidade de horas"));
//           r = d * h;
//           alert("Seu salario é: " + r);
//
// Exercicio 9
//          //informe graus
//          
//          var f = parseFloat(prompt("Informe o valor Farenheit"));
//          vf = (f - 32);
//          c = (5 * vf / 9);
//          alert("Seu valor em Cº é: " + c.toFixed(2));
//          
//
//        
// Exercicio 9
//            var c = parseFloat(prompt("Digite o valor de Cº"))
//            
//            var v = c * 1.8 
//            var f = v + 32
//            
//            alert("O valor é: " + f.toFixed(2)) -->
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
//
//    
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
//}
//
//function quatorze() {
//    pPescados = parseFloat(prompt("Quantidade de peixes pescados"))
//    
//    if(pPescados > 50){
//        pExcedido = pPescados - 50;
//        multa = pExcedido * 4.00;
//        alert("Você excedeu: " + pExcedido + " de Numero permitido de peixes " + "Sua Multa é: " + multa );
//    } else {
//        alert("Você não excedeu nenhum peixe")
//    }
//}
