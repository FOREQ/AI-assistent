const container = document.getElementById('container');
const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// При загрузке страницы проверяем хэш
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#signup") {
    container.classList.add("right-panel-active");
  } else {
    container.classList.remove("right-panel-active");
  }
});
