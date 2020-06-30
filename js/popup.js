var loginLink = document.querySelector(".button-form");
var loginPopup = document.querySelector(".contact");
var contactClose = loginPopup.querySelector(".modal-close");
var contactForm = loginPopup.querySelector(".contact-form");
var contactName = loginPopup.querySelector(".form-name");
var contactEmail = loginPopup.querySelector(".form-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function () {
   evt.preventDefault();
   loginPopup.classList.add("modal-show");

if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
   contactName.focus();
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");

} else {
    if (isStorageSupport) {
    localStorage.setItem("login", contactName.value);
   }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error"); 
    }
  }
});