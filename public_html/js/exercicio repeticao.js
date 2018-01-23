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


function seis() {
    
}

function sete() {
    n1 = parseInt(prompt("Informe um numero"));
    n2 = parseInt(prompt("Informe um numero"));
    n3 = parseInt(prompt("Informe um numero"));
    n4 = parseInt(prompt("Informe um numero"));
    n5 = parseInt(prompt("Informe um numero"));
    if (n1 > n2 || n1 > n3 || n1 > n4 || n1 > n5) {
        alert(n1 + " é o maior numero");
    }else if (n2 > n1 || n2 > n3 || n2 > n4 || n2 > n5){
        alert(n2 + " é o maior numero")}; 
    else if (n3 > n1 || n3 > n2 || n3 > n4 || n3 > n5 ||) {
        alert(n2 + " é o maior numero"); 
    }
    switch (n) {
        case value:
            
            break;
            
        default:
            
            break;
    }

        

}