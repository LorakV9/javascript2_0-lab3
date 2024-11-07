const API_TOKEN = "SpkFvmkkWBFisCMgHfFrLxyILlfqsbPu";
function fetchStations() {
  fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
    headers: {
      token: API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayStations(data.results);
    })
    .catch((error) => console.error("Error fetching stations:", error));
}

function displayStations(stations) {
  const tableBody = document.getElementById("stationsTableBody");
  tableBody.innerHTML = ""; 

  stations.forEach((station) => {
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

function fetchDatasets() {
  fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/datasets", {
    headers: {
      token: API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDatasets(data.results);
    })
    .catch((error) => console.error("Error fetching datasets:", error));
}

function displayDatasets(datasets) {
  const tableBody = document.getElementById("datasetsTableBody");
  tableBody.innerHTML = ""; 

  datasets.forEach((dataset) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = dataset.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = dataset.name || "N/A";
    row.appendChild(nameCell);

    const datacoverageCell = document.createElement("td");
    datacoverageCell.textContent = dataset.datacoverage || "N/A";
    row.appendChild(datacoverageCell);

    tableBody.appendChild(row);
  });

  document.getElementById("datasetsTable").style.display = "table";
}

function fetchDataWithParams() {
  const datasetId = document.getElementById("datasetId").value;
  const locationId = document.getElementById("locationId").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!datasetId || !locationId || !startDate || !endDate) {
    alert("Please fill in all fields.");
    return;
  }

  const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=${datasetId}&locationid=${locationId}&startdate=${startDate}&enddate=${endDate}`;

  fetch(url, {
    headers: {
      token: API_TOKEN,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayData(data.results);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayData(dataResults) {
  const tableBody = document.getElementById("dataTableBody");
  tableBody.innerHTML = ""; 

  dataResults.forEach((dataItem) => {
    const row = document.createElement("tr");

    const typeCell = document.createElement("td");
    typeCell.textContent = dataItem.datatype;
    row.appendChild(typeCell);

    const stationCell = document.createElement("td");
    stationCell.textContent = dataItem.station;
    row.appendChild(stationCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = dataItem.date;
    row.appendChild(dateCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = dataItem.value;
    row.appendChild(valueCell);

    tableBody.appendChild(row);
  });

  document.getElementById("dataTable").style.display = "table";
}
