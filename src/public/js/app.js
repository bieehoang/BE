const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Declare var
const iconUser = $('#menu-user');
const menuIcon = $('#notifi');
const search = $('.search');
console.log(search);
document.addEventListener('DOMContentLoaded', () => {
    // Show menu
    iconUser.onclick = (e) => {
        menuIcon.classList.toggle('show');
    };
    // Search active
});
search.oninput = (e) => {
    search.classList.add('is_active');
    e.preventDefault();
    if (!!search.onpointerleave) {
        (function () {
            search.classList.remove('is_active');
        });
    }
};
