// navigation functionality
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu li");
let containers = document.querySelectorAll(".container");

// ADD ACTIVE CLASS TO SELECTED MENU ITEM -> REMOVE FROM ANY OTHERS THAT CURRENTLY HAVE CLASS
function addActiveClass () { menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // this removes class 'active' from all items, including clicked item
    menuItems.forEach((unclickedItem) => {
      unclickedItem.classList.remove("active");
    });
    // this adds class 'active' to the clicked item
    item.className += "active";
  });
});
}

// SCROLL TO CONTAINER
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    containers.forEach((container) => {
      if (item.attributes.name.value === container.id) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
        //remove show class to hide slide in menu
        menu.classList.remove("show")
        addActiveClass();
      }
    });
  });
});

// TOGGLE HAMBURGER TO X AND VICE VERSA

let navToggle = document.querySelector(".nav-toggle");
let bars = document.querySelectorAll(".bar");
let showMenu = document.querySelector(".menu");

function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
}

function toggleClass(e) {
  showMenu.classList.toggle("show");
}
navToggle.addEventListener("click", toggleHamburger);
navToggle.addEventListener("click", toggleClass);


window.onscroll = function(){
  rotateElement();
}

function rotateElement(){
  let rotationalAxis = document.querySelector("#bubble-4");
  rotationalAxis.style.transform = `rotate(-${window.scrollY /6}deg)`;
}

// COPYRIGHT UPDATE
let copyright = document.querySelector('#copyright');
let date = new Date();
let thisYear = date.getFullYear();

console.log(copyright);

copyright.innerHTML = `&copy ${thisYear} The Fortunate Smith`