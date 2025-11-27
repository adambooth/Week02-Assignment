console.log("Hello World!");

const fullscreenImg = document.getElementById("fullscreen-img");

const imageData = [
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

function CreateFullscreenImages(event) {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.innerHTML = "";
  const fullscreenImg = document.createElement("img");
  const nextBtn = document.createElement("button");
  const previousBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.textContent = ">";
  previousBtn.id = "previous-btn";
  previousBtn.textContent = "<";
  fullscreenImg.id = "fullscreen-" + event.target.id;
  fullscreenImg.src = event.target.src;
  fullscreenImg.alt = event.target.alt;
  fullscreenImg.idName = "fullscreen-img";
  fullscreenContainer.appendChild(previousBtn);
  fullscreenContainer.appendChild(fullscreenImg);
  fullscreenContainer.appendChild(nextBtn);
}

function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < imageData.length; i++) {
    const img = document.createElement("img");
    img.id = imageData[i].idName;
    img.src = imageData[i].imageSrc;
    img.alt = imageData[i].imageAlt;
    img.addEventListener("click", CreateFullscreenImages);
    thumbnailContainer.appendChild(img);
  }
}

createThumbnails();
