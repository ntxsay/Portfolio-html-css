const menuSection = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuSection.classList.toggle('active');
});

document.getElementById('btnProfile').addEventListener('click', () => {
    menuIcon.classList.remove('active');
    menuSection.classList.remove('active');
    window.location.href = '#profile';
});

document.getElementById('btnProjects').addEventListener('click', () => {
    menuIcon.classList.remove('active');
    menuSection.classList.remove('active');
    window.location.href = '#projects';
});

document.getElementById('btnContact').addEventListener('click', () => {
    menuIcon.classList.remove('active');
    menuSection.classList.remove('active');
    window.location.href = '#contact';
});




tippy(document.getElementById('scssSkill'), {
    content(reference) {
        return reference.getAttribute('data-tooltip');
    }
});