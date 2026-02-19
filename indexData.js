// data
let show = document.getElementById("show");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

img1.addEventListener("click", fnimg1);
img2.addEventListener("click", fnimg2);
img3.addEventListener("click", fnimg3);
img4.addEventListener("click", fnimg4);
img5.addEventListener("click", fnimg5);

function fnimg1() {
  show.src = img1.src;
}
function fnimg2() {
  show.src = img2.src;
}
function fnimg3() {
  show.src = img3.src;
}
function fnimg4() {
  show.src = img4.src;
}
function fnimg5() {
  show.src = img5.src;
}

let size1 = document.getElementById("btn1");
let size2 = document.getElementById("btn2");
let size3 = document.getElementById("btn3");

size1.addEventListener("click", function () {
  size1.classList.add("pro-size-btn-border");
  size2.classList.remove("pro-size-btn-border");
  size3.classList.remove("pro-size-btn-border");
});
size2.addEventListener("click", function () {
  size1.classList.remove("pro-size-btn-border");
  size2.classList.add("pro-size-btn-border");
  size3.classList.remove("pro-size-btn-border");
});
size3.addEventListener("click", function () {
  size1.classList.remove("pro-size-btn-border");
  size2.classList.remove("pro-size-btn-border");
  size3.classList.add("pro-size-btn-border");
});