var edad = 14;
var mensaje= "";

if (edad > 18) {
    mensaje = "la persona es mayor de edad";
} else {
    mensaje = "la persona es menor de edad";
}

// Operador ternario -> (condicional) ? si se cumple : no se cumple

mensaje = (edad>18) ? "la persona es mayor de edad" : "la persona es menor de edad";

var edad_bebe = 3;

if(edad_bebe <2) {
    mensaje ="es un bebe";
}else if (edad_bebe < 5 ) {
    mensaje = "es un toddler";
} else {
    mensaje = "es un niño";
}

mensaje = (edad_bebe < 2) ? "es un bebe" : (edad_bebe < 5) ? "es un toddler": "es un niño";

//funciones flecha -> () => codigo

function sumatoria(nim1, num2) {
    return num1+num2;
}

var sumatoriaFlecha = (num1,num2) => num1+num2;

function abc(num1) {
    for(var i=0; i<num1; i++) {
        console.log(num1);
    }
}

var abcFlecha = num1 => {
    for(var i=0; i<num1; i++) {
        console.log(num1);
    }
}

// funccion flecha -> Sigma
// recibimos numero y vamos a sumar del 1-numero

// 5 -> 1+2+3+4+5 = 15
// 3-> 1+2+3 = 6

// function sigma (num) {

var sigma = (num) => {
    let sum = 0;
    for(let i=0; i <= num; i++){
        sum +=i;
    }
    return sum;
}

console.log(sigma(3));


let suma = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
};

suma(5);
/*
funcion flecha -> sumar positivos e imprimir negativos
funcion que reciba un arreglo y regrese la suma de los positivos e imprima la suma de los numeros negativos
*/

// sumaPositivos([1,-1, 2, -2, 3, -3]); //Funcion Flecha Operador ternario

var sumaPositivos = arr => {
    var positivos =0; 
    var negativos =0;
    for ( let i=0; i<arr.lenght; i++) {
        positivos += arr[i] > 0 ? arr[i] : 0;
        negativos += arr[i] < 0 ? arr[i] : 0;
    }
    console.log(negativos);
    return positivos;
}

var pos = sumaPositivos([1,-1, 2, -2, 3, -3]);
console.log("nums positivos:"+pos);


//funciones de arreglos
//forEach me recorre un listado
var numeros = [1,2,3,4,5,6,7];
numeros.forEach(function(num, posicion, arreglo){
    console.log("en este momento recorro el numero "+num+" que se encuenrta en posicion "+posicion);
})

var nums_filtrados = numeros.filter(function(num){
    return num>5;
})

console.log(nums_filtrados);

//filter me recorre el listado y agrega a la variable solo aquellos que cumplen con la condicional
var nums_filtrados = numeros.filter(num => num >5);

console.log(nums_filtrados);

// map recorre el listado y altera la lista
var nombres = ["Elena", "Juana", "Pablo", "Pedro"];
var saludos = nombres.map(nombre => `!hola! ${nombre} ¿Cómo estás?`);
console.log(saludos);

var nombre_filtrados = nombres.filter(nombre => nombre == "Elena");
var nuevos_saludos = nombre_filtrados.map(nombre => `¡Hola! ${nombre} ¿Cómo estás?`);
console.log(nuevos_saludos);