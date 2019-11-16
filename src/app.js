import _ from 'lodash';

let miniMenu = document.getElementById("minimenu"); // less complicated than a foreach or a loop with a class
document.getElementById('mm').onclick = function changeContent() {
    miniMenu.classList.toggle("minimenu-open");
}

// click outside the minimenu to remove it
function remover() {
    if (miniMenu.classList.contains('minimenu-open')) {
        miniMenu.classList.remove("minimenu-open");
    }
}
