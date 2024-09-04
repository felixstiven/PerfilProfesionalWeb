var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarmenu(){
    if(menu_visible == false){//si esta oculto
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
for(var x = 0; x < links.length; x++){
    links[x].onclick = function (){
        menu.style.display = "none";
        menu_visible = false
    }
}

// Funcionalidad barras de habilidades

const progressHtml= document.getElementById("htmlCss");
const progressJavaScript = document.getElementById("javascript");
const progressPython = document.getElementById("python");
const progressJava = document.getElementById("java");
const progressReact = document.getElementById("react");
const progressGithub = document.getElementById("github");

const controller = new AbortController();


// const txtBarras = {
//     html: "80%",
//     javascript: "30%" 




progressHtml.addEventListener("click", unaFuctionHtml)

function unaFuctionHtml (e){
    const value = 88;
    const barraTemplate = "88%"
    const barraTxtElement = document.createElement("p")
    const txtHtml = document.getElementById("txthtml");
    barraTxtElement.innerHTML = barraTemplate;
    progressHtml.appendChild(barraTxtElement);
    progressHtml.style.setProperty("--progress", `${value}% `);
    barraTxtElement.style.fontSize= "25px";
    txtHtml.style.color=("yellow");

    progressHtml.removeEventListener("click", unaFuctionHtml);
}

progressJavaScript.addEventListener("click", unaFuctionJavascript)

function unaFuctionJavascript (e){
    const value = 30 ;
    const barraTemplate = "30%";
    const barraTxtElement = document.createElement("p");
    const txtJavascript = document.getElementById("javascript");
    barraTxtElement.innerHTML = barraTemplate;
    progressJavaScript.appendChild(barraTxtElement);
    progressJavaScript.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    txtJavascript.style.color=("yellow");

    progressJavaScript.removeEventListener("click", unaFuctionJavascript)


}





progressPython.addEventListener("click",() =>{
    const value = 10 ;
    progressPython.style.setProperty("--progress", `${value}%`)
})
progressJava.addEventListener("click",() =>{
    const value = 10;
    progressJava.style.setProperty("--progress", `${value}%`)
})
progressReact.addEventListener("click",() =>{
    const value = 20;
    progressReact.style.setProperty("--progress", `${value}%`)
})
progressGithub.addEventListener("click",() =>{
    const value = 50;
    progressGithub.style.setProperty("--progress", `${value}%`)
})
