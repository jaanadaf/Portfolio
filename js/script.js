const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu() {

    // Toggle la classe "is-active" pour ajouter/retirer l'activation du menu
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}
