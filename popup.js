var buttonForm = document.querySelector(".button-form");
var popup = document.querySelector(".contact");

var form = popup.querySelector("form");

var contactClose = popup.querySelector(".modal-close");

var yourName = popup.querySelector("[name=user-name]");
var yourEmail = popup.querySelector("[name=user-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("yourName");
} catch (err) {
  isStorageSupport = false;
}

buttonForm.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   if (storage) {
   yourName.value = storage;   
   yourEmail.focus();
   }  else  {
   yourName.focus();
   }
});

  
contactClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});  

form.addEventListener("submit", function (evt) {
   if (!yourName.value || !yourEmail.value)  {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = loginPopup.offsetWidth;
    popup.classList.add("modal-error");   
   } else {
    if (isStorageSupport) {
    localStorage.setItem("yourName", yourName.value);
  }
 }
});  

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (popup.classList.contains("modal-show")) {
       evt.preventDefault();
       popup.classList.remove("modal-show");
       popup.classList.remove("modal-error");
     }
   }
 });