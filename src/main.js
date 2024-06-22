import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { imagesTemplate } from './js/render-functions';
import { getImages } from './js/pixabay-api';

import imageURL from './img/error.svg';

const formElem = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.lds-roller');
const loadBtn = document.querySelector('.load-btn');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let maxPage = 1;
let image = '';
const perPage = 15;

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  image = e.target.elements.input.value.trim();
  if (image === '') {
    infoMessage('Please enter the data for the request!', 'blue');
    return;
  }

  page = 1;
  showLoader();
  hideLoadBtn();

  try {
    const data = await getImages(image, page);
    maxPage = Math.ceil(data.totalHits / perPage);
    if (data.totalHits === 0) {
      infoMessage(
        'Sorry, there are no images matching your search query. Please try again!',
        'red'
      );
      formElem.reset();
      hideLoader();
      return;
    }
    const markup = imagesTemplate(data.hits);
    gallery.innerHTML = markup;
    lightBox.refresh();
    updBtnStatus();
  } catch (err) {
    infoMessage('ERROR');
  }

  formElem.reset();
  updBtnStatus();
  hideLoader();
});

// =====================================================================================================
loadBtn.addEventListener('click', async () => {
  page++;
  showLoader();
  hideLoadBtn();

  try {
    const data = await getImages(image, page);
    const markup = imagesTemplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightBox.refresh();
    skipPreviousElem();
  } catch (err) {
    infoMessage('ERROR');
  }
  hideLoader();
  updBtnStatus();
});

// =========================== Additional functions ===================================================
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadBtn() {
  loadBtn.classList.remove('hidden');
}

function hideLoadBtn() {
  loadBtn.classList.add('hidden');
}

function updBtnStatus() {
  if (page >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } else {
    showLoadBtn();
  }
}

function infoMessage(message, color) {
  iziToast.error({
    position: 'topRight',
    maxWidth: '360px',
    theme: 'dark',
    messageColor: 'white',
    iconUrl: imageURL,
    message: message,
    color: color,
  });
}

function skipPreviousElem() {
  const liElem = gallery.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
