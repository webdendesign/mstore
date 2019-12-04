// let page = document.querySelector(".page");
// let themeButton = document.querySelector(".theme-button");
// themeButton.onclick = function() {
//   page.classList.toggle("light-theme");
//   page.classList.toggle("dark-theme");
// };

let message = document.querySelector(".form__desc");
let form = document.querySelector(".form");
let email = document.querySelector(".form__input");

form.onsubmit = function(event) {
  event.preventDefault();
  message.textContent =
    "Адрес " + email.value + " добавлен в список получателей рассылки.";
};
