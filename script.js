let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let star = document.getElementById("stars");
let staru = document.getElementById("staru");
let oasisld = document.getElementById("oasisld");
let oasisbg = document.getElementById("oasisbg");
let mountains_behind = document.getElementById("desertbg");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("maindesert");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  star.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  staru.style.left = (value - 1500) * 0.25 + "px";
  oasisbg.style.top = (value - 1300) * 0.28 + "px";
  oasisld.style.top = (value - 1400) * 0.15 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
