//function um() {
//    for (var i=0; i<100; i++){
//         n = parseFloat(prompt("Digite o numero de 0 a 10"))
//         if(n <= 10 >0 ){
//             break
//         }
//    }
//}
//

//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao 
//nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

//function dois() {
//    nome = prompt("Digite o nome de usuario");
//    senha = parseFloat(prompt("Digite a senha de usuario"));
//    while (nome == senha) {
//        alert("Digite senha diferente ao nome de usuario");
//        nome = prompt("Digite o nome de usuario");
//        senha = parseFloat(prompt("Digite a senha de usuario"));
//    }
//    alert("Logado com Sucesso")
//}


//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';

function tres() {
    nome = "";
    idade = 0;
    salario = 0;
    sexo = ""
    estado_civil = "";

//    while (nome.length<=2) {
//        nome = prompt("Nome: (com mais de 3 letras)");
//    }
//    while (idade <1 || idade >150) {
//        idade = parseInt(prompt("Idade entre 1 e 150"));
//    }
//    while (salario<=0){
//        salario = parseFloat(prompt("Salario maior que zero"));
//    }
    while (sexo < 'f' & sexo < 'm'){
        sexo = prompt("Sexo: [m/f]");
    }
    
}

//function quatro() {
//    
//}
//
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
//
//
//
//function cinco() {
//    
//    
//}





