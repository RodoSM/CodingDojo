// Sigma -  Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.

var sum = 0
for(let i = 1; i <= 100 ; i++) {
    sum +=i
}  
console.log("suma de valores del 1 al 100 es: "+sum);

//Sigma pares e impares - Escribe código que sume los valores pares del 1 al 100 en una variable suma_pares y valores impares en una variable suma_impares. Intenta hacer UN solo bucle. % -> mod. 5%2

var suma_pares = 0
var suma_impares = 0

for (let i = 0; i<=100; i++) {
    if(i % 2 === 0) {
        suma_pares +=i;
    } else {
        suma_impares +=i;
    }
}


console.log("suma valores pares del 1 al 100 es:"+suma_pares);
console.log("suma valores impares del 1 al 100 es:"+suma_impares);

var suma_pares1 = 0
var suma_impares1 = 0

for (let i = 0; i<=100; i++) {
    if(i % 2 === 0) {
        suma_pares1 +=i;
    } if(i %2 !== 0 )  {
        suma_impares1 +=i;
    }
}

console.log("suma valores pares del 1 al 100 es:"+suma_pares1);
console.log("suma valores impares del 1 al 100 es:"+suma_impares1);

var x = 0;
for(var i=1; i<5; i++) {
    x += i;
}
console.log(x);

var x = "0";
for(var i=1; i<5; i++) {
    x += i;
}
console.log(x);