// const inputContainer = document.querySelector('.input-container');
// const iconContainer = document.getElementById('icon-container');

// iconContainer.addEventListener('click', () => {
//   inputContainer.classList.toggle('active');
// });


// INPUT
// Получаем элементы по их ID или классам
const searchIcon = document.querySelector('.search_icon');
const navInput = document.querySelector('.nav_input');
const searchClose = document.querySelector('.search_close');

// Добавляем обработчик события при клике на search_icon
searchIcon.addEventListener('click', function() {
    // Добавляем класс "active" к nav_input и search_close
    navInput.classList.add('active');
    searchClose.classList.add('active');
});

// Добавляем обработчик события при клике на search_close
searchClose.addEventListener('click', function() {
    // Убираем класс "active" у nav_input и search_close
    navInput.classList.remove('active');
    searchClose.classList.remove('active');
});


// BURGER MENU
const burgerMenu = document.querySelector('.burger_menu');
const navItems = document.querySelectorAll('.nav_items');
const navIcons = document.querySelector('.nav_icons');
const body = document.body;

burgerMenu.addEventListener('click', function() {
    toggleMenu();
});

hTextLinks.forEach(link => {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navIcons.classList.toggle('active');
    navItems.forEach(link => {
        link.classList.toggle('active');
    });
    body.classList.toggle('no-scroll');
}
