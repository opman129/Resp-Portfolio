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

/** ============ ACCORDIAN SKILLS */
const skills = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills () {
    let itemClass = this.parentNode.className; 

    for (i=0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
}); 