const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//no idea down here
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (document.body.scrollTop > 20) {
    document.querySelector("header");
  }
}
/* ______________________________ new shit */
let navigationbar = document.getElementById("main-menu");
// let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let prevScrollpos = window.scrollY;
  console.log(prevScrollpos);
  let currentScrollPos = window.scrollY;
  console.log(currentScrollPos);
  //____________________________
  if (currentScrollPos > 600) {
    navigationbar.classList.add("sticky-nav");
  } else {
    navigationbar.classList.remove("sticky-nav");
  }
};

// (prevScrollpos > currentScrollPos)
// navigationbar.style.position = "relative";
// navigationbar.style.backgroundColor = "rgb(9, 9, 50)";
