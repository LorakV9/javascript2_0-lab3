function searchCountry() {
  const capital = document.getElementById("capitalInput").value;
  if (!capital) {
      alert("Please enter a capital name.");
      return;
  }

  fetch(`https://restcountries.com/v3.1/capital/${capital}`)
      .then(response => {
          if (!response.ok) {
              throw new Error("Country not found");
          }
          return response.json();
      })
      .then(data => {
          displayCountryData(data);
      })
      .catch(error => {
          alert(error.message);
          document.getElementById("countryTable").style.display = "none";
      });
}

function displayCountryData(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach(country => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = country.name.common;
      row.appendChild(nameCell);

      const capitalCell = document.createElement("td");
      capitalCell.textContent = country.capital ? country.capital[0] : "N/A";
      row.appendChild(capitalCell);

      const populationCell = document.createElement("td");
      populationCell.textContent = country.population.toLocaleString();
      row.appendChild(populationCell);

      const regionCell = document.createElement("td");
      regionCell.textContent = country.region;
      row.appendChild(regionCell);

      const subregionCell = document.createElement("td");
      subregionCell.textContent = country.subregion || "N/A";
      row.appendChild(subregionCell);

      tableBody.appendChild(row);
  });

  document.getElementById("countryTable").style.display = "table";
}
