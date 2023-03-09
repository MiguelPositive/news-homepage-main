const btnNav = document.querySelector(".btn-nav");
const menuNav = document.getElementById("menu-nav");
const main = document.querySelector("main");

let menuActivated = false;

const handleClick = () => {
  menuActivated = !menuActivated;

  if (menuActivated) {
    menuNav.style.display = "block";

    menuNav.style.position = "absolute";
    menuNav.style.background = "gray";
    menuNav.style.top = "0";
    menuNav.style.right = "0";

    menuNav.style.minWidth = "70vw";
    menuNav.style.minHeight = "calc(100vh - 1rem)";

    menuNav.classList.toggle("activate-nav");
  } else {
    menuNav.style.display = "none";
  }
};

btnNav.addEventListener("click", handleClick);
