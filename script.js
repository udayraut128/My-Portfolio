var buttonOn = document.getElementById("resButtonA");
var buttonOff = document.getElementById("resButtonB");
var element = document.getElementById("myDiv");

buttonOn.addEventListener("click", () => {
  element.classList.add("resClass");
  element.classList.remove("navList");
  buttonOff.style.opacity = "1";
});

buttonOff.addEventListener("click", () => {
  element.classList.add("navList");
  element.classList.remove("resClass");
  buttonOff.style.opacity = "0";
});

buttonOff.style.opacity = "0";
