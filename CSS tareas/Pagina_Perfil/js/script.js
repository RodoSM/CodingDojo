console.log("!entramos a la pagina!");

function alerta(){
    alert("Hiciste click");
    console.log("hizo click en el Sign Out");
}

function cambiar_texto(elemento) {
    // console.log(elemento);
    elemento.innerText = "Otro Texto" ;
}

function cambio_education(elemento_p){
    // innerHTML -> me permite agregar etiquetas al elemento
    elemento_p.innerHTML = "cambio de p <span>Etiqueta span</span>"
}

function cambia_imagen(elemento_img){
    elemento_img.src = "images/todd-s.jpg";
}

function regresa_imagen(elemento_img){
    elemento_img.src ="icons/user-circle.png"
}

function eliminar(elemento) {
    elemento.remove();
}

var clicks_profile = 0;
function aumentar_clicks(){
    clicks_profile++;
    alert(`hiciste click ${clicks_profile} veces`)
}

// function over(element) {
//     alert("mouseover");    
// }
    
// function out(element) {
//     alert("mouseout");    
// }
function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}

function editar_perfil(){

    //document.getElementById("nombre");
    var elemento_nombre = document.querySelector("#nombre"); //elemento_nombre = <h1 id="nombre"> Jane Doe </h1>
    
    //obtener el elemento
    // var input = document.querySelector("#input_nombre");
    var input = document.getElementById("input_nombre");
    if(input.value == ""){
        elemento_nombre.innerText = "Elena de Troya";
    } else {
        elemento_nombre.innerText = input.value;
        // input.remove();
    }

    // elemento_nombre.innerText = "Elena de Troya";
    document.querySelector(".location").innerHTML =  `<img src="icons/map-marker.png" alt="map-marker" class="icon"> Troya`;

    var elemento_p = document.querySelector(".bottom-part p"); //elemento_p =<p>
    // Developer | Engineer | Problem Solver <br>
    // Master of shadows and the Internet! </p>
    elemento_p.innerHTML = "Desarrolladora, Ingeniera <br> Reina emperatriz de Troya";

    elemento_nombre.style.color = "purple";
    // backgrounds-color -> backgroundColor
    //margin-left -> marginLeft
    elemento_nombre.style.backgroundColor = "lightblue";
    elemento_nombre.style.textShadow = " 2px 2px 2px black";

    //classList -> arreglo
    if(elemento_p.classList.contains("parrafo_darkmode")){
        //quitamos la clase
        elemento_p.classList.remove("parrafo_darkmode")
    }else{
        //agregamos clase
        elemento_p.classList.add("parrafo_darkmode");
    }

}

