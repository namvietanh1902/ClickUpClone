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
// const navitem = document.querySelectorAll(".list__nav-item");
// console.log(navitem);
// const arraynav = [...navitem];
// arraynav[0].addEventListener("mouseover", onmouseover);
// const navheader = document.querySelector(".nav-header");
// function onmouseover() {
//   navheader.style = "height: 86.2vh;";
// }
// arraynav[0].addEventListener("mouseout", onBlurwindow);
// console.log(arraynav[0]);
// function onBlurwindow() {
//   console.log(1);
//   navheader.style = "height: 0;";
// }
function showSlides(evt, n) {
  console.log(evt.currentTarget);
  let slides = document.getElementsByClassName("slider");

  const buttons = document.querySelectorAll('.slider-btn');
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {

    buttons[i].classList.toggle('inactive')

  }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < buttons.length; i++) {
  //   buttons[i].className = dots[i].className.replace(" active", "");
  // }
  slides[n].style.display = "block";

  // dots[slideIndex - 1].className += " active";
}
const navitem = document.querySelectorAll(".list__nav-item");
const listnav = document.querySelectorAll(".nav-header");
const header = document.querySelector(".header");
const arlistnav = [...listnav];
const arraynav = [...navitem];

for (let i = 0; i < arraynav.length; i++) {
  arraynav[i].addEventListener("mouseover", onMouseover);
  function onMouseover() {

    header.style = "border-bottom: 1px solid #c4c4c4; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; background-color:white";

    const line = document.querySelector(".line");
    line.style = "opacity: 1";
    line.style.left = arraynav[i].offsetLeft + 20 + "px";
    line.style.width = arraynav[i].offsetWidth - 45 + "px";

    for (let j = 0; j < arlistnav.length; j++) {
      if (arlistnav[j].classList.contains("nav-active")) {
        arlistnav[j].classList.remove("nav-active");
      }
    }
    arlistnav[i].classList.add("nav-active");
  }
  arraynav[i].addEventListener("mouseout", onBlurwindow);
  function onBlurwindow() {
    const line = document.querySelector(".line");
    line.style = "opacity: 0";
    header.style = "border: none";


    for (let j = 0; j < arlistnav.length; j++) {
      if (arlistnav[j].classList.contains("nav-active")) {
        arlistnav[j].classList.remove("nav-active");
      }
    }
  }
}

const overload = document.querySelector(".overload");
const ctmb = document.querySelector(".ct-mb");
function handleclickonMB() {
  overload.style = "display: block";
  ctmb.style = "transform: translateX(0);";
}

function handleclickoffMB() {
  overload.style = "display: none";
  ctmb.style = "transform: translateX(100%);";
}

const navmb = document.querySelectorAll(".list__nav-item-mb");
const navmbitem = document.querySelectorAll(".list__item-mb");
const arraynavmb = [...navmb];
const arraynavmbitem = [...navmbitem];

for (let i = 0; i < arraynavmb.length; i++) {
  arraynavmb[i].addEventListener("click", handleclick);
  function handleclick() {
    if (arraynavmbitem[i].classList.contains("hidden")) {
      arraynavmbitem[i].classList.remove("hidden");
    } else arraynavmbitem[i].classList.add("hidden");
  }
}


