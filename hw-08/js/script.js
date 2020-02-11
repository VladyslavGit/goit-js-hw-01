"use strict";
import items from "./gallery-items.js";
const itemsList = document.querySelector(".js-gallery");
itemsList.addEventListener("click", onImgClick);

const allImages = items.reduce(
  (string, item) =>
    string +
    `<li class="gallery__item"><a class="gallery__link" href="#"><img class="gallery__image" src="${item.preview}" data-src="${item.original}" alt="${item.description}"/></a></li>`,
  ""
);
itemsList.insertAdjacentHTML("beforeend", allImages);

const lightBoxAllImage = document.querySelector(".js-lightbox"); 
const ImgBigSize = document.querySelector(".lightbox__image");
const lightBoxForBigImg = document.querySelector(".lightbox__content");
const buttonForClose = document.querySelector(".lightbox__button");
function onImgClick(e) {
  if (e.target !== e.currentTarget) {
    lightBoxAllImage.classList.add("is-open"); 
    ImgBigSize.setAttribute("src", e.target.dataset.src); 
    lightBoxForBigImg.addEventListener("click", closeModalOnClick); 
    buttonForClose.addEventListener("click", closeModalOnClick); 
    window.addEventListener("keydown", pressButton); 
  }
}

function closeModalWindow() {
  lightBoxAllImage.classList.remove("is-open");
  ImgBigSize.removeAttribute("src"); 
  lightBoxForBigImg.removeEventListener("click", closeModalOnClick);
  buttonForClose.removeEventListener("click", closeModalOnClick);
  window.removeEventListener("keydown", pressButton);
}

function closeModalOnClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModalWindow();
}

function pressButton(e) {
  if (e.code === "Escape") {
    closeModalWindow();
  }
}