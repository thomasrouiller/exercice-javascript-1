var yellow = document.querySelector(".change-color");
var orange = document.querySelector(".toggle-color");
var pink = document.querySelector(".trigger");
var red = document.querySelector(".target");

var changeColorToBlue = function () {
  yellow.classList.add("is-active");
};

var changeColorToRed = function () {
  orange.classList.toggle("is-active");
};

var changeOpacityRed = function () {
  red.classList.add("is-active");
};

var changeOpacityPink = function () {
  pink.classList.add("is-active");
};

yellow.addEventListener("click", changeColorToBlue);
orange.addEventListener("click", changeColorToRed);
pink.addEventListener("click", changeOpacityRed);
red.addEventListener("click", changeOpacityPink);
