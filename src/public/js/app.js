const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Declare var
const iconUser = $('#user-private');
const blockNoti = $('#notifi');

iconUser.onclick = (e) => {
    blockNoti.classList.add('add');
};
