let menu = document.querySelector('.nav_toggle');
let navbar = document.querySelector('.nav_menu');
let close = document.querySelector('.nav_close');

menu.onclick = () => {
  navbar.classList.add('show-menu');
};

close.onclick = () => {
  navbar.classList.remove('show-menu');
};

window.onscroll = () => {
  navbar.classList.remove('show-menu');
};
