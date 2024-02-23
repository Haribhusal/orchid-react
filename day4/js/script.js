// let collegeName = "Texas College";

// // alert("Welcome to javascript, We are learning js at " + collegeName);

// console.log(businessTitle);

// businessTitle.innerText = "Orchid News";

let businessTitle = document.getElementById("businessName");
let image = document.getElementById("businessImage");
let menu = document.getElementById("menuList");
image.addEventListener("click", function () {
  businessTitle.innerText = "Orchid News";
});

let menuToggler = document.getElementById("toggleMenu");

menuToggler.addEventListener("click", function () {
  console.log("cloiclking");
  menu.style.display = "block";
});
