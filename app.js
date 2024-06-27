var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarmenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display= "block";
    menu_visible= true;
}
else{
    menu.style.display= "none";
    menu_visible = false;
}
}

// oculto el menu una vez que selecciono una opcion

let links = document.querySelectorAll("nav a");
for(var x =0; x <links.length;x++){
    links[x].onclick = function (){
        menu.style.display = "none";
        menu_visible = false
    }
}

// creo las barritas de una barra particular identificada por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e"
        id_barra.appendChild(div);
    }
}

// selecciono todas las barras generales para luego manipiularlas

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let phyton = document.getElementById("phyton");
crearBarra(phyton);
let java = document.getElementById("java");
crearBarra(java);
let php = document.getElementById("php");
crearBarra(php);
let github = document.getElementById("github");
crearBarra(github);


// Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra.
// para eso utilizo un arreglo, cada posicion pertenece a un elemento
// comienza en 1- porque no tiene ninguna pintada al iniciarse

let contadores = [-1,-1,-1,-1,-1,-1,];
// esta variable la voy a utilizar de bandera para saber si ya ejecuto la animacion.
let entro = false;

// funcion que aplica las animaciones de la habiliadades 

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = 
}
