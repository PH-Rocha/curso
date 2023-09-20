var dinheiro = 150, preco = 121.8, troco = dinheiro - preco;

var cem = 0, cinquenta = 0, vinte = 0, dez = 0, cinco = 0, dois = 0 , um = 0;

while(troco > 1){
    if(troco > 100){
        troco -= 100;
        cem++;
    }else if(troco > 50){
        troco -= 50;
        cinquenta++;        
    }else if(troco > 20){
        troco -= 20;
        vinte++;
    }else if(troco > 10){
        troco -= 10;
        dez++;
    }else if(troco > 5){
        troco -= 5;
        cinco++;
    }else if(troco > 2){
        troco -= 2;
        dois++;
    }else if(troco > 1){
        troco -= 1;
        um++;
    }
}