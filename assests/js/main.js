/** ========== MENU SHOWN IN HIDDEN ========= */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/**====== SHOW MENU ========*/
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

/**============ HIDE MENU ============*/
/** validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

/* ======== REMOVE MENU MOBILE ======== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
};

// navLink.forEach(link => link.addEventListener('click', linkAction))
for (link of navLink) {
    link.addEventListener('click', linkAction);
};