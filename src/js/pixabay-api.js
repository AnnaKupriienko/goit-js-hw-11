import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "42651463-7e9bc4d6a898bed570bd4622e";
const BaseUrl = "https://pixabay.com/api/";
const loader = document.querySelector('.loader');
// let query = "";

export function searchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    loader.style.display = 'block';

    return fetch(`${BaseUrl}?${params}`)
        .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not OK');
        }
        return response.json();
    })
        .then(data => {
            loader.style.display = 'none';
        if (data.hits.length === 0) {
            iziToast.error({
                fontSize: 'large',
                close: false,
                position: 'topRight',
                messageColor: 'white',
                timeout: 2000,
                backgroundColor: 'red',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        return data;
    })
        .catch(error => { console.log(error) });
}
