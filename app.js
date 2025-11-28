console.log("Hello World!");

const fullscreenImg = document.getElementById("fullscreen-img");

const imagesArray = [
  {
    idName: "elephantImg",
    imageSrc: "./media/images/elephant.jpg",
    imageAlt: "picture of elephants",
    imgIndex: 0,
  },
  {
    idName: "foxImg",
    imageSrc: "./media/images/fox.jpg",
    imageAlt: "picture of a fox",
    imgIndex: 1,
  },
  {
    idName: "leopardImg",
    imageSrc: "./media/images/leopard.jpg",
    imageAlt: "picture of a leopard",
    imgIndex: 2,
  },
  {
    idName: "raccoonImg",
    imageSrc: "./media/images/raccoon.jpg",
    imageAlt: "picture of a raccoon",
    imgIndex: 3,
  },
  {
    idName: "tigerImg",
    imageSrc: "./media/images/tiger.jpg",
    imageAlt: "picture of a tiger",
    imgIndex: 4,
  },
];

const fullscreenContainer = document.getElementById("fullscreen-container");
const nextBtn = document.createElement("button");
const previousBtn = document.createElement("button");
const thumbnailContainer = document.getElementById("thumbnail-container");
nextBtn.id = "next-btn";
nextBtn.textContent = ">";
previousBtn.id = "previous-btn";
previousBtn.textContent = "<";
nextBtn.setAttribute("aria-label", "Next image");
previousBtn.setAttribute("aria-label", "Previous image");

let currentImageIndex = 0;

function displayFullscreenImage(index) {
  fullscreenContainer.innerHTML = "";
  const fullscreenImg = document.createElement("img");
  fullscreenImg.id = "fullscreen-img";
  fullscreenImg.src = imagesArray[index].imageSrc;
  fullscreenImg.alt = imagesArray[index].imageAlt;
  fullscreenContainer.appendChild(previousBtn);
  fullscreenContainer.appendChild(fullscreenImg);
  fullscreenContainer.appendChild(nextBtn);
}

nextBtn.addEventListener("click", function () {
  currentImageIndex++;

  if (currentImageIndex >= imagesArray.length) {
    currentImageIndex = 0;
  }

  displayFullscreenImage(currentImageIndex);
});

previousBtn.addEventListener("click", function () {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = imagesArray.length - 1;
  }

  displayFullscreenImage(currentImageIndex);
});

function createThumbnails() {
  for (let i = 0; i < imagesArray.length; i++) {
    const img = document.createElement("img");
    img.id = "thumbnail-img";
    img.src = imagesArray[i].imageSrc;
    img.alt = imagesArray[i].imageAlt;

    let index = imagesArray[i].imgIndex;

    img.addEventListener("click", () => {
      displayFullscreenImage(index);
    });

    thumbnailContainer.appendChild(img);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    nextBtn.click();
  } else if (event.key === "ArrowLeft") {
    previousBtn.click();
  }
});

createThumbnails();
