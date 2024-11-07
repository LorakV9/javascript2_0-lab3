const API_TOKEN ="SpkFvmkkWBFisCMgHfFrLxyILlfqsbPu";
function fetchStations() {
    fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
        headers: {
            token: API_TOKEN
        }
    })
    .then(response => response.json())
    .then(data => {
        displayStations(data.results);
    })
    .catch(error => console.error("Error fetching stations:", error));
}

function displayStations(stations) {
    const tableBody = document.getElementById("stationsTableBody");
    tableBody.innerHTML = ""; // Clear previous results

    stations.forEach(station => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = station.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = station.name || "N/A";
        row.appendChild(nameCell);

        const stateCell = document.createElement("td");
        stateCell.textContent = station.state || "N/A";
        row.appendChild(stateCell);

        const latitudeCell = document.createElement("td");
        latitudeCell.textContent = station.latitude || "N/A";
        row.appendChild(latitudeCell);

        const longitudeCell = document.createElement("td");
        longitudeCell.textContent = station.longitude || "N/A";
        row.appendChild(longitudeCell);

        tableBody.appendChild(row);
    });

    document.getElementById("stationsTable").style.display = "table";
}