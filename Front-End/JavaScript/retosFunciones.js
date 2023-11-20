/*Crea un función que reciba dos arreglos del mismo tamaño y regrese un arreglo con sus sumas
EJ:
arr1 = [1, 2, 3, 4]
arr2 = [1, 2, 3, 4]
return [2, 4, 6, 8]
*/

function sumaarreglos(arr1,arr2){
var newarray = [];
    if(arr1.length == arr2.length){
        for(let i=0; i<arr1.length; i++){
            newarray[i] = arr1[i]+arr2[i];
            }
        }
    else{
        console.log("arreglos no son del mismo tamaño");
        }
    return newarray;
}

var resultado1 = sumaarreglos([1, 2, 3, 4],[1, 2, 3, 4]);
console.log(resultado1)
var resultado2 = sumaarreglos([1,2,3],[1,2,3]);
console.log(resultado2)
/*
Crea una función que reciba un número y regrese un arreglo con los números de fibonacci hasta esa posición
EJ:
num = 6
return = [0, 1, 1, 2, 3, 5]
*/

console.log("---------------------------------------");

function fibo(n) {

    var arrincial = [0, 1];
    for(let i=2; i < n; i++){
        arrincial.push(arrincial[i-2]+arrincial[i-1]);
    }
    return arrincial;
}
var result = fibo(6);
console.log(result);

// Serie de fibonacci:
// 0, 1, 1, 2, 3, 5, 8...
