// Горизонтальний скрол колесом миші для карток
document.querySelectorAll('.overflow-x-auto').forEach(block => {
    block.addEventListener('wheel', (e) => {

        if (e.deltaY === 0) return;

        const maxScrollLeft = block.scrollWidth - block.clientWidth;

        const atStart = block.scrollLeft <= 0;
        const atEnd = block.scrollLeft >= maxScrollLeft - 1;

        // якщо ще можна скролити горизонтально
        if (
            (e.deltaY > 0 && !atEnd) ||   // вправо
            (e.deltaY < 0 && !atStart)    // вліво
        ) {
            e.preventDefault();

            block.scrollBy({
                left: e.deltaY * 1.6,
                behavior: 'smooth'
            });
        }
        // інакше — подія піде далі і сторінка скролиться вниз
    }, { passive: false });
});


// Мобільний навбар — бургер меню
const burgerBtn = document.querySelector('a[href="burger"]');
const navbar = document.getElementById('mobile-navbar');
const navbarOverlay = document.getElementById('mobile-navbar-overlay');

// Відкрити меню
burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.remove('translate-x-full');
    navbarOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // блокуємо скрол сторінки
});

// Закрити по кліку на overlay
navbarOverlay.addEventListener('click', closeNavbar);

// Закрити кнопкою X
document.getElementById('navbar-close').addEventListener('click', closeNavbar);

function closeNavbar() {
    navbar.classList.add('translate-x-full');
    navbarOverlay.classList.add('hidden');
    document.body.style.overflow = ''; // повертаємо скрол
}