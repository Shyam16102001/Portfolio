let menu = document.querySelector('.nav_toggle');
let navbar = document.querySelector('.nav_menu');
let close = document.querySelector('.nav_close');

menu.onclick = () => {
  navbar.classList.toggle('show-menu');
};

close.onclick = () => {
  navbar.classList.remove('show-menu');
};

window.onscroll = () => {
  navbar.classList.remove('show-menu');
  document
    .querySelector('.certification_model1')
    .classList.remove('active-model');
  document
    .querySelector('.certification_model2')
    .classList.remove('active-model');
  document
    .querySelector('.certification_model3')
    .classList.remove('active-model');
  document
    .querySelector('.certification_model4')
    .classList.remove('active-model');
};

function toggle(number) {
  switch (number) {
    case 1:
      document
        .querySelector('.certification_model1')
        .classList.toggle('active-model');
      break;
    case 2:
      document
        .querySelector('.certification_model2')
        .classList.toggle('active-model');
      break;
    case 3:
      document
        .querySelector('.certification_model3')
        .classList.toggle('active-model');
      break;
    case 4:
      document
        .querySelector('.certification_model4')
        .classList.toggle('active-model');
      break;

    default:
      break;
  }
}
