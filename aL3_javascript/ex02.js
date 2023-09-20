var a = 1, b = 0, c = 0, contador = 1, numero = 55, pertence = false;

while(c <= numero){

    c = a + b;
    b = b;
    b = c;
    if(c === numero) pertence = true;
}

var resposta = pertence ? "o número pertence ao fibonnacci" : "o número não pertence ao fibonnacci";

console.log(resposta);