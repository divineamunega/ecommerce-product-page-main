const imgModal = document.querySelector(".img-modal"); // Image that opens modal on click
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(".btn-close");
const imgThumb = document.querySelectorAll(`.pic-thumbnail`);
const imgThumbModal = document.querySelectorAll(`.pic-thumbnail-modal`);
const picCont = document.querySelector(`.pic-cont`);
const imgOverlay = document.querySelector(`.img-overlay`);
const whiteOverlay = document.querySelectorAll(".white-overlay");
const whiteOverlayModal = document.querySelectorAll(".white-overlay-modal");
const btnSliderNext = document.querySelector(".next");
const btnSliderPrev = document.querySelector(".prev");
const itemValueSubtract = document.querySelector(".value-plus");
const itemValueAdd = document.querySelector(".value-minus");
const number = document.querySelector(".number");
const openCart = document.querySelector(`.cart-image`);
const cart = document.querySelector(`.basket`);

cart.classList.add(`hidden`);

// Functions
const showModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const hideModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

hideModal();

imgModal.addEventListener(`click`, showModal); // Showing the modal

overlay.addEventListener(`click`, hideModal); // Hiding the modal on click of the overlay
btnCloseModal.addEventListener(`click`, hideModal); // Hiding the modal on click of the close btn

window.addEventListener(`keydown`, function (e) {
  if ((e.key = `Escape`)) {
    hideModal();
  }
});

const removeClass = function (e) {
  for (let i = 0; i < e.length; i++) {
    e[i].classList.remove("active");
  }
};

for (let i = 0; i < imgThumb.length; i++) {
  const showImage = function () {
    imgModal.src = `images/image-product-${i + 1}.jpg`;
    imgOverlay.src = `images/image-product-${i + 1}.jpg`;
    removeClass(whiteOverlay);
    removeClass(whiteOverlayModal);
    whiteOverlay[i].classList.add("active");
    whiteOverlayModal[i].classList.add("active");
  };

  imgThumb[i].addEventListener(`click`, showImage);

  imgThumbModal[i].addEventListener(`click`, showImage);
}

let slidervalue = 0;

btnSliderNext.addEventListener(`click`, function () {
  if (slidervalue === 3) {
    slidervalue = 0;
  } else if (slidervalue < 3) {
    slidervalue += 1;
  }
  imgModal.src = `images/image-product-${slidervalue + 1}.jpg`;
  imgOverlay.src = `images/image-product-${slidervalue + 1}.jpg`;
  removeClass(whiteOverlay);
  removeClass(whiteOverlayModal);
  whiteOverlay[slidervalue].classList.add("active");
  whiteOverlayModal[slidervalue].classList.add("active");
});

btnSliderPrev.addEventListener(`click`, function () {
  if (slidervalue === 0) {
    slidervalue = 3;
  } else if (slidervalue > 0) {
    slidervalue--;
  }

  imgModal.src = `images/image-product-${slidervalue + 1}.jpg`;
  imgOverlay.src = `images/image-product-${slidervalue + 1}.jpg`;
  removeClass(whiteOverlay);
  removeClass(whiteOverlayModal);
  whiteOverlay[slidervalue].classList.add("active");
  whiteOverlayModal[slidervalue].classList.add("active");
});

let cartValue = 0;
itemValueAdd.addEventListener("click", function () {
  cartValue++;
  number.textContent = cartValue;
});

itemValueSubtract.addEventListener(`click`, function () {
  cartValue > 0 ? cartValue-- : cartValue = 0;
  number.textContent = cartValue;
});

openCart.addEventListener(`click`, function () {
  cart.classList.toggle("hidden");
});



/* const removeWhiteOverlay = function () {

  whiteOverlay.forEach((_, i) => whiteOverlay[i].classList.remove(`active`));
  whiteOverlayModal.forEach((_, i) =>
    whiteOverlayModal[i].classList.remove(`active`)
  );
};
const changeImg = function () {
  console.log(i);
  imgModal.src = `images/image-product-${i + 1}.jpg`;
  imgOverlay.src = `images/image-product-${i + 1}.jpg`;
  removeWhiteOverlay();
  whiteOverlay[i].classList.add("active");
  whiteOverlayModal[i].classList.add("active");
};
imgThumb.forEach((pic) => {
  pic.addEventListener(`click`, changeImg);
});

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

let i = 0;
if (i > 0) {
  i--;
} else if (i === 0) {
  i = 3;
}

btnSliderPrev.addEventListener(`click`, function () {
  
  imgModal.src = `images/image-product-${i + 1}.jpg`;
  imgOverlay.src = `images/image-product-${i + 1}.jpg`;
  removeWhiteOverlay();
  whiteOverlay[i].classList.add("active");
  whiteOverlayModal[i].classList.add("active");
});

btnSliderNext.addEventListener(`click`, function () {
  if (i < 3) {
    i++;
  } else if (i === 3) {
    i = 0;
  }
  imgModal.src = `images/image-product-${i + 1}.jpg`;
  imgOverlay.src = `images/image-product-${i + 1}.jpg`;
  removeWhiteOverlay();
  whiteOverlay[i].classList.add("active");
  whiteOverlayModal[i].classList.add("active");
});
// changeImg();
// changeImg(imgThumbModal);

 */
