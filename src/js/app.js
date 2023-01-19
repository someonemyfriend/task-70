//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

let imageScale = document.querySelector(".image").addEventListener("click", scaleImage);;

function scaleImage() {
  document.getElementById("myImage").style.width = "150%";
  document.getElementById("myImage").style.height = "150%";
}

