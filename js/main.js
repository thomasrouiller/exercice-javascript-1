var yellow = document.querySelector(".change-color");
var orange = document.querySelector(".toggle-color");
var pink = document.querySelector(".trigger");
var red = document.querySelector(".target");
var green = document.querySelector(".trigger-all");
var turquoise = document.querySelector(".trigger-all-self");

var changeColorToBlue = function () {
  yellow.classList.add("is-active");
};

var changeColorToRed = function () {
  orange.classList.toggle("is-active");
};

var changeOpacityRed = function () {
  red.classList.toggle("is-active");
};

var changeBoxesColorBlueRed = function () {
  yellow.classList.add("is-active");
  orange.classList.add("is-active");
};

var changeBoxesColorAndSelf = function () {
  yellow.classList.add("is-active");
  orange.classList.add("is-active");
  turquoise.classList.add("is-active");
};

yellow.addEventListener("click", changeColorToBlue);
orange.addEventListener("click", changeColorToRed);
pink.addEventListener("click", changeOpacityRed);
green.addEventListener("click", changeBoxesColorBlueRed);
turquoise.addEventListener("click", changeBoxesColorAndSelf);
