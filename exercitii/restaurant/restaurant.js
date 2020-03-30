// toggleMenu when clicking on hamburger
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

function toggleMenu() {
    let menu = document.querySelector('.menu');
    // if visible hide it, if hidden show it
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}
