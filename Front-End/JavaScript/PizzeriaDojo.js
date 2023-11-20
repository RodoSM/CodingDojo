// function sandwichFactory(pan, proteína, queso, salsas) {
//     var sandwich = {};
//     sandwich.pan = pan;
//     sandwich.proteína = proteína;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
// console.log(s1);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, Toppings){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.Toppings = Toppings;
    return pizza;
}

pizza1= pizzaOven("estilo Chicago","tradicional","mozzarella",["pepperoni","salchicha"])
console.log(pizza1);

pizza2= pizzaOven("lanzada a mano","marinara",["mozzarella","feta"],["champiñones","aceitunas","cebollas"]);
console.log(pizza2);

pizza3= pizzaOven("masa de pan","tradicional","parmesano reggiano",["carne","aceitunas","pimientos","tomates"]);
console.log(pizza3);

pizza4= pizzaOven("masa delgada","tradicional","mozzarella",["cebolla","pimiento verde","tomate","champiñones","aceitunas"]);
console.log(pizza4);