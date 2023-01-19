//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

// let imageScale = document.querySelector(".image").addEventListener("click", scaleImage);;

// function scaleImage() {
//   document.getElementsByTagName("img").style.transform = "scale(2)";
// }


// let image = document.querySelector('.image')
// image.addEventListener('click', scaleImage(e))
// function scaleImage(event){
// event.target.style.transform="scale(2)";
// }

const image = document.querySelector(".image");
    image.addEventListener("click", () => {
        image.style.transform = "scale(2)";
    });