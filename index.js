const checkbtn = document.querySelector(".checkbtn");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");

let temp = false;

const handleClick = () => {
  temp = !temp;

  if (temp) {
    line1.style.cssText = "transition: 0.8s; opacity: 0";
    line2.style.cssText = "transition: 0.8s; opacity: 0";
  } else {
    line1.style.cssText = "transition: 0.3s; opacity: 1";
    line2.style.cssText = "transition: 0.3s; opacity: 1";
  }
};

checkbtn.addEventListener("click", handleClick);
