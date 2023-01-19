//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

let tryToGetElement = document.getElementsByClassName("main");
console.log(tryToGetElement);

let tryToCreateDiv = document.createElement('div');
tryToCreateDiv.classList.add('image');
console.log(tryToCreateDiv);

let tryToCreateImage = document.createElement("img");
tryToCreateImage.src = "https://picsum.photos/200/301";
tryToCreateDiv.appendChild(tryToCreateImage);



