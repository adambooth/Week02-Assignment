console.log("Hello World!");

const fullscreenImg = document.getElementById("fullscreen-img");

const imagesArray = [
  {
    idName: "elephantImg",
    imageSrc: "./media/images/elephant.jpg",
    imageAlt: "picture of elephants",
  },
  {
    idName: "foxImg",
    imageSrc: "./media/images/fox.jpg",
    imageAlt: "picture of a fox",
  },
  {
    idName: "leopardImg",
    imageSrc: "./media/images/leopard.jpg",
    imageAlt: "picture of a leopard",
  },
  {
    idName: "raccoonImg",
    imageSrc: "./media/images/raccoon.jpg",
    imageAlt: "picture of a raccoon",
  },
  {
    idName: "tigerImg",
    imageSrc: "./media/images/tiger.jpg",
    imageAlt: "picture of a tiger",
  },
];

const fullscreenContainer = document.getElementById("fullscreen-container");
const nextBtn = document.createElement("button");
const previousBtn = document.createElement("button");
const thumbnailContainer = document.getElementById("thumbnail-container");

function CreateFullscreenImages(event) {
  fullscreenContainer.innerHTML = "";
  const fullscreenImg = document.createElement("img");
  nextBtn.id = "next-btn";
  nextBtn.textContent = ">";
  previousBtn.id = "previous-btn";
  previousBtn.textContent = "<";
  nextBtn.setAttribute("aria-label", "Next image");
  previousBtn.setAttribute("aria-label", "Previous image");
  fullscreenImg.id = "fullscreen-" + event.target.id;
  fullscreenImg.src = event.target.src;
  fullscreenImg.alt = event.target.alt;
  fullscreenImg.idName = "fullscreen-img";
  fullscreenContainer.appendChild(previousBtn);
  fullscreenContainer.appendChild(fullscreenImg);
  fullscreenContainer.appendChild(nextBtn);
}

function createThumbnails() {
  for (let i = 0; i < imagesArray.length; i++) {
    const img = document.createElement("img");
    img.id = imagesArray[i].idName;
    img.src = imagesArray[i].imageSrc;
    img.alt = imagesArray[i].imageAlt;
    img.addEventListener("click", CreateFullscreenImages);
    thumbnailContainer.appendChild(img);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("Right Arrow key pressed");
  } else if (event.key === "ArrowLeft") {
    console.log("Left Arrow key pressed");
  }
});

createThumbnails();
