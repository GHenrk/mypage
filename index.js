const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", mostraMenu)

function mostraMenu(){
    console.log("clicou");
    menu.classList.toggle("menu__mobile--ativo");
}