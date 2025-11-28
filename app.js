console.log("Hello World!");

const fullscreenImg = document.getElementById("fullscreen-img");

const imagesArray = [
  {
    idName: "elephantImg",
    imageSrc: "./media/images/elephant.jpg",
    imageAlt: "picture of elephants",
    imgIndex: 0,
    tabIndex: 2,
  },
  {
    idName: "foxImg",
    imageSrc: "./media/images/fox.jpg",
    imageAlt: "picture of a fox",
    imgIndex: 1,
    tabIndex: 3,
  },
  {
    idName: "leopardImg",
    imageSrc: "./media/images/leopard.jpg",
    imageAlt: "picture of a leopard",
    imgIndex: 2,
    tabIndex: 4,
  },
  {
    idName: "raccoonImg",
    imageSrc: "./media/images/raccoon.jpg",
    imageAlt: "picture of a raccoon",
    imgIndex: 3,
    tabIndex: 5,
  },
  {
    idName: "tigerImg",
    imageSrc: "./media/images/tiger.jpg",
    imageAlt: "picture of a tiger",
    imgIndex: 4,
    tabIndex: 6,
  },
];

const fullscreenContainer = document.getElementById("fullscreen-container");
const nextBtnContainer = document.getElementById("next-btn-container");
const previousBtnContainer = document.getElementById("previous-btn-container");
const nextBtn = document.createElement("button");
const previousBtn = document.createElement("button");
const thumbnailContainer = document.getElementById("thumbnail-container");
nextBtn.id = "next-btn";
nextBtn.textContent = ">";
nextBtn.tabIndex = 7;
previousBtn.id = "previous-btn";
previousBtn.textContent = "<";
previousBtn.tabIndex = 1;
nextBtn.setAttribute("aria-label", "Next image");
previousBtn.setAttribute("aria-label", "Previous image");
previousBtnContainer.appendChild(previousBtn);
nextBtnContainer.appendChild(nextBtn);

let currentImageIndex = 0;

function displayFullscreenImage(index) {
  currentImageIndex = index;
  fullscreenContainer.innerHTML = "";
  const fullscreenImg = document.createElement("img");
  fullscreenImg.id = "fullscreen-img";
  fullscreenImg.src = imagesArray[index].imageSrc;
  fullscreenImg.alt = imagesArray[index].imageAlt;
  fullscreenContainer.appendChild(fullscreenImg);
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
    img.id = "thumbnail-" + imagesArray[i].idName;
    img.src = imagesArray[i].imageSrc;
    img.alt = imagesArray[i].imageAlt;
    img.tabIndex = imagesArray[i].tabIndex;
    let index = imagesArray[i].imgIndex;
    img.imgIndex = index;

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
  if (event.key === "Enter") {
    const focusedElement = document.activeElement;

    if (focusedElement.imgIndex !== undefined) {
      displayFullscreenImage(focusedElement.imgIndex);
    }
  }
});

displayFullscreenImage(0);
createThumbnails();
