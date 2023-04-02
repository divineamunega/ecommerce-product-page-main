const imgModal = document.querySelector(".img-modal"); // Image that opens modal on click
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(".btn-close");
const imgThumb = document.querySelectorAll(`.pic-thumbnail`);
const imgThumbModal = document.querySelectorAll(`.pic-thumbnail-modal`);
const picCont = document.querySelector(`.pic-cont`);
const imgOverlay = document.querySelector(`.img-overlay`);
const whiteOverlay = document.querySelectorAll(".white-overlay");
const whiteOverlayModal = document.querySelectorAll('.white-overlay-modal');
// const btnSliderNext = document,

// Functions
const removeWhiteOverlay = function () {
  whiteOverlay.forEach((_, i) => whiteOverlay[i].classList.remove(`active`));
  whiteOverlayModal.forEach((_, i) => whiteOverlayModal[i].classList.remove(`active`));
};
const changeImg = function (el) {
  el.forEach((pic, i) => {
    pic.addEventListener(`click`, () => {
      imgModal.src = `images/image-product-${i + 1}.jpg`;
      imgOverlay.src = `images/image-product-${i + 1}.jpg`;
      removeWhiteOverlay();
      whiteOverlay[i].classList.add("active");
      whiteOverlayModal[i].classList.add("active");
    });
  });
};

modal.classList.add("hidden");
overlay.classList.add("hidden");

imgModal.addEventListener("click", function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
});
btnCloseModal.addEventListener(`click`, function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
overlay.addEventListener(`click`, function () {
  overlay.classList.add(`hidden`);
  modal.classList.add(`hidden`);
});

changeImg(imgThumb);
changeImg(imgThumbModal);
