//function um() {
//    for (var i=0; i<100; i++){
//         n = parseFloat(prompt("Digite o numero de 0 a 10"))
//         if(n <= 10 >0 ){
//             break
//         }
//    }
//    
//    nota = 11;
//    while (nota < 0 || nota > 10 || isNaN(nota)){
//        nota = parseFloat(prompt("Digite a nota"));
//    }
//    alert("nota")
//    
//    do{
//        nota = parseFloat(prompt("Digite a nota"));
//    }    while (nota < 0 || nota > 10)
//
//}





//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao 
//nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

//function dois() {
//    
//    do {
//        nome = prompt("Digite o nome de usuario");
//        senha = prompt("Digite a senha de usuario");
//        if(nome == senha){
//            alert("Nome e senha tem que ser diferente");
//        }
//    }while (nome == senha);
//    alert("Logado com Sucesso")
//}


//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

//function tres() {
//    nome = "";
//    idade = 0;
//    salario = 0;
//    sexo = ""
//    estado_civil = "";
//
//    while (nome.length<=3) {
//        nome = prompt("Nome: (com mais de 3 letras)");
//    }
//    while (idade <1 || idade >150) {
//        idade = parseInt(prompt("Idade entre 1 e 150"));
//    }
//    while (salario<=0){
//        salario = parseFloat(prompt("Salario maior que zero"));
//    }
//    while (sexo != 'f' && sexo != 'm'){
//        sexo = prompt("Sexo: [m/f]");
//    }
//    while (estado_civil !== 's' && estado_civil !== 'c' && estado_civil !== 'v' && estado_civil !== 'd' ){
//        estado_civil = prompt("Estado Civil: 's', 'c', 'v', 'd'");
//    }
//    
//}

//function quatro() {
//    populacaoA = 8000;
//    txA = 0.3;
//    populacaoB = 20000;
//    txB = 0.015;
//    
//    
//    for(i=0; i>10000; i++){
//        populacaoA += populacaoA * txA;
//        populacaoB += populacaoB * txB;
//        
//        if(populacaoA >= populacaoB){
//            alert("Quantidade de anos e " + i);
//            break;
//        }
//    }
//}

//function cinco() {
//    populacaoA = parseInt(prompt("Informe a populacao de A"));
//    txA = parseFloat(prompt("Informe a taxa de A"));
//    populacaoB = parseInt(prompt("Informe a populacao de B"));
//    txB = parseFloat(prompt("Informe a taxa de B"));
//    
//    txA *= 100;
//    txB *= 100;
//    
//    for(i=0; i>10000; i++){
//        populacaoA += populacaoA * txA;
//        populacaoB += populacaoB * txB;
//        
//        if(populacaoA >= populacaoB){
//            alert("Quantidade de anos e " + i);
//            break;
//        }
//    }
//}


//function seis() {
//    
//}
//
//function sete() {
//    maior;
//    for (var i = 0; i < 5; i++) {
//        numero = parseFloat(prompt("Digite um numero"));
//        if (numero > maior || i == 0) {
//            maior = numero;
//
//        }
//    }
//}

//function oito() {
//    soma= 0
//    media = 0
//    for(i=0; i<5; i++){
//        numero = parseFloat(prompt("Digite um numero"));
//        soma += numero
//        
//        media += numero / 5
//    }alert("A soma dos numero é: " + soma + "\n\A media é: " + media.toFixed(2));
//}

//function nove() {
//    
//    for(numero = 0; numero <50; numero++){
//        document.write(i + "<br>");
//        
//        impar = numero % 2
//        if(impar){
//            alert(numero);
//            
//        }
//    }
//}

//function dez() {
//    n1 = parseFloat(prompt("Numero 1"));
//    n2 = parseFloat(prompt("Numero 2"));
//    aux = 0
//    soma = 0
//    if (n1 > n2) {
//        aux = n1
//        n1 = n2
//        n2 = aux
//    };
//    
//    for (i=n1; i<=n2; i++){
//        document.write(i + "<br>");
//        soma += i;
//    }
//    document.write(soma);
//    
//}


function doze() {
    //obtêm o numero escolhido pelo usuário
    numero = document.getElementById("numero").value;

    //obtêm a div onde será adicionado a tabuada
    resultado = document.getElementById("resultado");

    //vaiavel que receberá os dados da tabuada
    tabuada = "";

    for (i = 0; i <= 10; i++) {

        tabuada = tabuada + numero + " x " + i + " = " + i * numero + "<br>";
    }
    //inerHTML apresenta o documento no html
    document.getElementById("resultado").innerHTML = tabuada;
}