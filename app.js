//MENU LATERAL
var mneu_visible = false;
let menu = document.getElementById("nav");
function mostar0cultarmenu(){
    if(mneu_visible==false){//si esta oculto
        menu.style.display = "block";
        mneu_visible = true;
    }
    else{
        menu.style.display = "none";
        mneu_visible = false;
    }
}