console.log("Hello World!");

const imgIndexArray = [
  "elephant.jpg",
  "fox.jpg",
  "leopard.jpg",
  "raccoon.jpg",
  "tiger.jpg",
];

const photoGallery = document.getElementById("photo-gallery");

let currentImgIndex = 0;

photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;

const nextImageBtn = document.getElementById("next-img-btn");

const previousImageBtn = document.getElementById("previous-img-btn");

nextImageBtn.addEventListener("click", function () {
  if (currentImgIndex === 0) {
    currentImgIndex = 1;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 1) {
    currentImgIndex = 2;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 2) {
    currentImgIndex = 3;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 3) {
    currentImgIndex = 4;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 4) {
    currentImgIndex = 0;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  }
});

previousImageBtn.addEventListener("click", function () {
  if (currentImgIndex === 4) {
    currentImgIndex = 3;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 3) {
    currentImgIndex = 2;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 2) {
    currentImgIndex = 1;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 1) {
    currentImgIndex = 0;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  } else if (currentImgIndex === 0) {
    currentImgIndex = 4;
    photoGallery.src = `./media/images/${imgIndexArray[currentImgIndex]}`;
  }
});
