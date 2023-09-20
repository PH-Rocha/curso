var a = function (num){
    return function (multiplicador){
        return num * multiplicador;
    }
}

var quatroVezes = a(4);
var seisVezes = a(6);

console.log(quatroVezes);
console.log(seisVezes(4))