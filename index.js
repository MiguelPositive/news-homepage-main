const checkbtn = document.querySelector(".checkbtn");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const h2 = document.querySelectorAll("h2");

let temp = false;

const handleClick = () => {
  temp = !temp;

  if (temp) {
    line1.style.cssText = "transition: 0.8s; opacity: 0";
    line2.style.cssText = "transition: 0.8s; opacity: 0";
  } else {
    line1.style.cssText = "transition: 0.3s; opacity: 0.4";
    line2.style.cssText = "transition: 0.3s; opacity: 0.4";
  }
};

checkbtn.addEventListener("click", handleClick);

h2.forEach((i) => {
  checkbtn.addEventListener("click", () => {
    if (temp) {
      i.style.cssText = "transition: 0.9s; opacity: 0";
    } else if (!temp) {
      i.style.cssText = "transition: 0.3s; opacity: 1";
    }
  });
});
