console.log("Hello World!");

let menuItems = document.querySelectorAll(".menu li");

console.log("menuItems", menuItems);

menuItems.forEach((item) => {
  
  item.addEventListener("click", () => {
    handleClick();
    menuItems.forEach(unclickedItem => {
      unclickedItem.classList.remove("active");
    })
    item.className += "active";
  });
});

function handleClick() {
  console.log("Did it.");
}
