function um() {
//    for (i=0; i<numero.length; i++){
//        alert(numero[i])
//    }
    numero = new Array(1, 2, 3, 4, 5);
    i=0;
    while (i<numero.length) {
        alert(numero[i]);
        i+=1;
    }
}


function dois() {
    numero = new Array(1, 2, 3, 4, 5);
    i=0;
    while (i<numero.length) {
        document.write(numero.reverse(i) + "<br>");
        i+=1;
    }
}


