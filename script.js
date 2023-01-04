window.onscroll = () => {
  const header = document.querySelector("header");
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");

  }

};
let defaultsClick = document.querySelectorAll(".defaultClick");
for (let i = 0; i < defaultsClick.length; i++) {

  defaultsClick[i].click();
}

function openTab(evt, contentClass, sectionName) {

  const tabcontent = document.getElementsByClassName(contentClass + " tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName(contentClass + " tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "flex";
  evt.currentTarget.className += " active";
}
const navitem = document.querySelectorAll(".list__nav-item");
console.log(navitem);
const arraynav = [...navitem];
arraynav[0].addEventListener("mouseover", onmouseover);
const navheader = document.querySelector(".nav-header");
function onmouseover() {
  navheader.style = "height: 86.2vh;";
}
arraynav[0].addEventListener("mouseout", onBlurwindow);
console.log(arraynav[0]);
function onBlurwindow() {
  console.log(1);
  navheader.style = "height: 0;";
}