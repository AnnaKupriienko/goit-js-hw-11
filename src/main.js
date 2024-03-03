
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".search-form")
const galleryContainer = document.querySelector(".gallery")
import { searchImages } from "./js/pixabay-api.js";
import { createMarkup} from "./js/render-functions.js";

const lightbox = new SimpleLightbox('.gallery-link', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 200,
});
let query = "";
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    galleryContainer.innerHTML = "";
    query = event.target.elements.query.value.trim(),
     searchImages(query).then(data => {
        const markup = createMarkup(data)
  galleryContainer.insertAdjacentHTML('beforeend', markup)
        lightbox.refresh()
    }) .catch(error => console.log(error))
}