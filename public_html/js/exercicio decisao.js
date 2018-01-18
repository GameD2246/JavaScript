function sete() {
    
    aux = 0
    if (a > b){
        aux = a;
        a = b;
        b = aux;
    }
    if (b > c) {
        aux = b;
        b = c;
        c = aux;
    }
    if (a > b) {
        aux = a;
        a = b;
        b = aux;
    }
    alert(a + "->" + b + "->" + c);
}