const API_KEY = "Xbj4g52v9NRetsq2u3dcFbydpRC5PLIQ";

function fetchRandomGif() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`)
        .then(response => response.json())
        .then(data => {
            displayGif(data.data);
        })
        .catch(error => console.error("Error fetching random GIF:", error));
}

function displayGif(gifData) {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = gifData.images.original.url;
    img.alt = gifData.title;

    gifContainer.appendChild(img);
}