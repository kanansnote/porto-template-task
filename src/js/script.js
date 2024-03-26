var burgerMenu = document.querySelector('.burger-menu');
var navMenu = document.querySelector('.nav-menu');

// Function to open the menu
function openMenu() {
    navMenu.classList.add('show');
    burgerMenu.classList.add('open');
}

// Function to close the menu
function closeMenu() {
    navMenu.classList.remove('show');
    burgerMenu.classList.remove('open');
}

// Event listener for click event
burgerMenu.addEventListener('click', function () {
    if (burgerMenu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
});
