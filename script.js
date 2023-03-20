const burgerMenu = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})

const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(n => n.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    navMenu.classList.remove('active')
}))

