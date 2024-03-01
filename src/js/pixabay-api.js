
function SearchImages(value) {
    const params = new URLSearchParams({
        key: KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
   
    })
}