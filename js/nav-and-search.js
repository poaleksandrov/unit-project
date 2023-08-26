const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

navIcon.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
})

navLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    })
})


const searchButton = document.querySelector('.search__button');
const searchForm = document.querySelector('.search');

searchButton.addEventListener('click', function(e) {
    if (!searchForm.classList.contains('search--visible')) {
        e.preventDefault();
        searchForm.classList.toggle('search--visible');
    }
})