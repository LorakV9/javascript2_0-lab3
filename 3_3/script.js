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

function searchGifs() {
    const query = document.getElementById("searchQuery").value.trim();
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=5`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.data);
        })
        .catch(error => console.error("Error searching GIFs:", error));
}

function displaySearchResults(gifs) {
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; 

    gifs.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.style.margin = "10px";
        searchResults.appendChild(img);
    });
}
