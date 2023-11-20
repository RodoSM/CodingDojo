// Utilizando lo que hemos aprendido sobre bucles y condicionales, resuelve este clásico desafío de codificación (ha sido uno de los favoritos en las entrevistas durante años).

// Escribe un código que pase por cada número del 1 al 100 y:
// Para cada número que sea múltiplo de 3 , imprima  "Fizz"
// Para cada número que sea múltiplo de 5 , imprima  "Buzz"
// Para los números que son múltiplos de 3 y 5, imprima  "FizzBuzz"
// Todos los demás números deberían imprimirse de forma normal


for(let i = 1; i <= 100 ; i++) {
    
    if( i%3 === 0 && i%5 ===0  ){
        console.log("FizzBuzz");
    }else
    if(i%3 == 0){
        console.log("Fizz");
    }else
    if(i%5 == 0){
        console.log("Buzz");
    }else
        console.log(i);
}
