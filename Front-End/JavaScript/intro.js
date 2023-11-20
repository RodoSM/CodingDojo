var num = 1;
let texto = "este es un texto"; /* solo existe en el bloque que se declara*/
const otro_num = 2;   /*no puede ser alterado*/
var decimales = 1.11;
var bool = true; 

console.log("hola mundo!");
console.log(otro_num);

var despues;
console.log(despues); /*Por default el valor de mi variable es undefined*/
despues = "texto colocado despues"
console.log(despues);
despues = 10;
console.log(despues);

var num1 =1;
var num2 = 2;
var suma = num1 + num2 ; //1+2=3
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "mi nombre es:";
console.log(mensaje+nombre);

var otro_nombre = "Juana de Arcos";
var edad = 18;
var otro_mensaje = `Mi nombre es: ${otro_nombre}, tengo ${edad} años ¿Cómo estás?, `; // Interpolacion poner otra variable dentro de una variable OJO, comillas al revez ``
var tercer_mensaje = "mi nombre es : "+otro_nombre+" ¿cómo estás?"; // asi seria concatenado
console.log(otro_mensaje);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto+num1+num2);
console.log(num1+num2+combinamosTexto); // teniendo un texto al incio los numeros despues seran concatenados, si son numeros se sumaran primero y despues el texto

var orden = 10+20/6;
console.log(orden);
orden = (10+20)/6; // 1.- () 2.- /*% 3.- +-
console.log(orden);

var n = 14;
n += 5; // n = n+5 = 14+5 = 19

var nombre_completo = "Pedro";
nombre_completo += " Perez";  
console.log(nombre_completo);  // Pedro Perez

if(bool) { // a === b; a !== b; a < b; a > b; a <= b; a>= b
    console.log("Variable es Verdadero");
}
else {
    console.log("Variable Falsa");
}

if(n >= 15) {
    console.log("numero mayor o igual a 15")
}
else {
    console.log("numero menor a 15");
}

var edad_niño = 3;
if(edad_niño < 2) {
    console.log("Es un bebe");
}
else if(edad_niño < 5 ) {
    console.log("Es un Toddler");
}
else {
    console.log("Es un niño")
}

var temperatura = 20;
var estaLLoviendo = false;
if(temperatura >=18 && !estaLLoviendo) {  // && es referente a un "AND" deben cumplir ambas condiciones
    console.log("Es un buen dia para dar un paseo");
} else {
    console.log("Daremos el paseo cuando las condiciones sean optimas");
}

var edad_conducir = 17;
var permisopadres = true;
if(edad_conducir >= 18 || permisopadres) {  // || es referente a "OR" se debe cumplir una o la otra
    console.log("Tienes permiso para obtener tu licencia de manejo");
}

/*
i = 0 -> 1 -> 2 ->3 ->4
¡Hola!
¿Cómo estás?    imprime Hola! ¿Cómo estas? 4 veces (0,1,2,3) hasta que llega al valor de i=4 > 4 y termina
*/

for(let i=0; i < 4; i++){
    console.log("Hola!");
    console.log("¿Cómo estás?");
}

for(let i=10; i>0; i--) {
    console.log(i);
}

/* 
x=0
ENtramos al while
x=1
-----
x=1
Entramos al While
x=2
-----
x=2
Entramos al While
x=3
-----
x=3
x<3 no se cumple y termina el proceso
*/ 

let x=0;
while (x <3 ) {
    console.log("entramos en el While");
    x++;
}


/*  
inicio = 2
final = 10
Entramos al nuevo While
inicio =3
final 9
-------
inicio = 3
final = 9
Entramos al nuevo While
inicio = 4
final = 8
----------
inicio =4
final =8
Entramos en nuevo while
inicio = 6
final = 7
--------
inicio = 6
final =7
Entramos en nuevo While
inicio = 8
final = 7
------
inicio no es menor a final y se corta
*/


let inicio = 2 ;
let final = 10 ;
while (inicio < final) {
    console.log("Entramos al nuevo While");
    if(inicio > 5) {
        inicio += 2;
    } else {
        inicio ++;
        final --;
    }
}

var variable1 =1;
var variable2 = "1"; 
if(variable1 == variable2) {
    console.log("son iguales");  // con el == solo compara el contenido pero no el tipo, variable 1 es tipo numero y variable2 es tipo texto, con === compara el valor y el tipo
}

if(variable1 === variable2) {
    console.log("Son iguales y con el mismo top");
}else {
    console.log("no lo son");
}


// Array / arreglo / Lista

var hobbies = ["leer","correr","bailar","cantar","tocar guitarra", "videojuegos"];
console.log(hobbies[0]);

hobbies[1] = "trotar";
console.log(hobbies);

console.log(hobbies.length);

// manera que a travez de un bucle recorremos el arreglo

for( z=0; z < hobbies.length; z++){
    console.log(hobbies[z]);
}

var combinado = [
    1.11,
    "texto de arreglo",
    true,
    30,
    ["esta","es", "otra","lista"],
]

for (let i=0; i < combinado.length; i++) {
    console.log(`Posición: ${i} de mi arreglo es: ${combinado[i]}`);
}

combinado.push("nuevo elemento");
console.log(combinado);

combinado.pop();      // pop() Elimina el ultimo elemento del arreglo
combinado.pop();
console.log("----------");
console.log(combinado);

var matriz = [     // matriz es cuando tienes un arregle dentro de otro
    [1,2,3,4,5],
    [6,7,8,9,10]
]
console.log([0][0])  // primera matriz, primer elemento de esa matriz
matriz[0].push(6);
console.log(matriz);

//OBJETOS

var estudiante = {
    "id": 12345,
    "nombre": "Elena",
    "apellido": "De Troya",
    "edad": 25,
    "hobbies": ["leer","bailar","ver series"],
    "direcciones": [
        {
            "calle":"av. sol",
            "num":123,
            "cuidad": "Monterrey",
            "pais": "Mexico",
        },
        {
            "calle": "Primera Avenida",
            "num": 345,
            "cuidad":"Guadalajara",
            "pais": "Mexico"
        }
    ]
};
console.log("---------")
console.log(estudiante["nombre"]);
console.log(estudiante.apellido);
estudiante.apellido = "De Arco";
console.log(estudiante);
console.log("----------")
estudiante["Curso"] = "Front-End";
console.log(estudiante);

