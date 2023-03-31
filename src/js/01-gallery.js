// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const paletteGalery = document.querySelector(`.gallery`);
const cardsOfGallery = createGallery(galleryItems);

paletteGalery.insertAdjacentHTML(`beforeend`, cardsOfGallery);

function createGallery(galleryItems) {
    return galleryItems.map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img data-caption="${description}" class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
  )
  .join('');
};
 
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });


console.log(galleryItems);

