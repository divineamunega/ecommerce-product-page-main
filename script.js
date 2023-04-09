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
const addToCart = document.querySelector(`.add-to-cart-btn`);
const cartContent = document.querySelector(`.cart-content`);
const checkOutBtn = document.querySelector(`.checkoutBtn`);
const cartEmpty = document.querySelector(`.cart-empty`);

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
  cartValue > 0 ? cartValue-- : (cartValue = 0);
  number.textContent = cartValue;
});

openCart.addEventListener(`click`, function () {
  cart.classList.toggle("hidden");
});

checkOutBtn.classList.add(`hidden`);
cartEmpty.classList.remove(`hidden`);
addToCart.addEventListener(`click`, function () {
  if (cartValue > 0) {
    checkOutBtn.classList.remove(`hidden`);
    cartContent.innerHTML = `<div class="cart-item">
                <img
                  src="${imgModal.src}"
                  alt="..."
                  class="pic" />
                <div class="cart-info">
                  <p class="cart-text">Fall Limited Edition Sneakers</p>
                  <p  class="price-info d-flex"><span class="item-price" data-price="125.00">$125.00</span> <span class="item-value">X ${cartValue}</span> <span class="total-price">$${
      125.0 * cartValue
    }</span></p>
                </div>
                <button class="deleteBtn">
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a" />
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                  </svg>
                </button>
              </div>`;
  }
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
