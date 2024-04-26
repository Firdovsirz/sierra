export default function toggleMenu(event) {
    event.target.addEventListener('click', () => {
        let firstLine = document.querySelector('.first-line');
        let secondLine = document.getElementById('secondLine');
        let thirdLine = document.querySelector('.third-line');
        let burgerContainer = document.querySelector('.hamburger-menu-container');
        firstLine.classList.toggle('rotate-first-line');
        secondLine.classList.toggle('removable-line');
        thirdLine.classList.toggle('rotate-third-line');
        burgerContainer.classList.toggle('display');
        let burgerPages = document.querySelector('.burger-pages');
        burgerPages.classList.toggle('pages-visibility');
    })
}