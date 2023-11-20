var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison","grass"]
}


var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
// console.log(pokemon[0].name);    estas dosformas funcionan igual
// console.log(pokemon[0]["name"]); 

// Lista de Objetos pokemon que comiencen con la letra B
var pokemonLetraB = pokemon.filter(poke => poke.name.startsWith("B"));
console.log(pokemonLetraB);

// lista de SOLO nombres de los pokemon 
var soloNombres = pokemon.map(poke => poke.name);
console.log(soloNombres);

//1.- PRINT ALL NAMES of the pokemons that have ID greater than 99

console.log("----------Pregunta 1------------");
for(let i=0; i < pokemon.length ; i++){
    if(pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

console.log("-----------Pregunta 2-----------");
//2.- PRINT the pokemon OBJECTS en el cual el id es divisible entre 3

for(let i=0; i < pokemon.length ; i++){
    if(pokemon[i].id % 3 === 0){
        console.log(pokemon[i]);
    }
}
console.log("---------------Pregunta 3-------------");
//3.- PRINT el OBJETO con mas de un tipo

for(let i=0; i < pokemon.length ; i++){
    if(pokemon[i].types.length > 1){
        console.log(pokemon[i]);
    }
}

//4.- PRINT el OBJETO que SOLO tenga tipo poison
console.log("---------------Pregunta 4-------------");

for(let i=0; i < pokemon.length ; i++){
    // if(pokemon[i].types.includes ("poison") && pokemon[i].types.includes ("grass")){
    // if(pokemon[i].types.includes ("poison")){
        if(pokemon[i].types == ("poison")){
        console.log(pokemon[i]);
    }
}

/* PRINT all the NAMES of the pokemons that have ID greater than 99
    Lista todos los NOMBRES de pokemones con ID mayor a 99
*/

console.log("----------Pregunta 1.1------------");

var pokenombres = pokemon.filter(poke => poke.id > 99);
console.log(pokenombres)


/* PRINT the pokémon objects whose id is evenly divisible by 3
    Lista los OBJETOS en el cual el id es divisible entre 3
*/
console.log("----------Pregunta 2.1------------");


var pokeTercios = pokemon.filter( poke => poke.id % 3 == 0);
console.log(pokeTercios);
/* PRINT the pokémon objects that have more than one type
    Lista los OBJETOS con más de un tipo
*/
console.log("----------Pregunta 3.1------------");


var pokeTypes = pokemon.filter( poke => poke.types.length > 1);
console.log(pokeTypes);

/* PRINT the names of the pokémon whose only type is "poison"
    Lista los NOMBRES de pokemon que SOLO TIENE tipo "poison"
*/

console.log("----------Pregunta 4.1------------");

        
    var pokePoison = pokemon.filter( poke => poke.types == "poison").map(poke => poke.name);
    console.log(pokePoison);
