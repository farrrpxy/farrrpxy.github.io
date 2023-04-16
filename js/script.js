// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Klik hamburger menu untuk menampilkan dan menghilangkan sidebar
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})