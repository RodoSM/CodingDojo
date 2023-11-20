// función es un bloque de codigo al que nombramosy al que podemos llamar las veces que uno quiera

console.log("Hola!");
console.log("¿Cómo estas?");

// para llamarlo se crea una funcion
// function nombre_funcion ( parametro1, parametro2, paarmetro3 ....){}
function saludo() {
    console.log("Hola!");
    console.log("¿Cómo estas?");
}

saludo(); // asi lo llamamos

function saludo_nombre(nombre) {
    console.log(`Hola ${nombre}!`);
}

saludo_nombre("Elena");
saludo_nombre("Juana");

function saludo_nombre_apellido(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}!`);
}

saludo_nombre_apellido("Elena","De Trolla");

//num1 = 11, num2 = 20
// return = 11+20 =31
function sumatoria(num1,num2){
    return num1+num2;
}
var resultado = sumatoria(11,20); //31
console.log(`el resultado es: ${resultado}`);
