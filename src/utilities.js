import { countryInfo } from "./countryInfo";
import { pageElements } from "./pageElements";

const utilities = (() => {
  // const data = apiHandler.callFromLocal();

  // const setIndex = (countryName) => {
  //   const index = data.findIndex((x) => x.name === countryName);

  //   return index;
  // };

  const detailedCountryView = (main) => {
    const countrySelect = document.querySelectorAll(".country-card");

    countrySelect.forEach((country) =>
      country.addEventListener("click", function () {
        const countryName = country.querySelector(".country-name").innerText;

        const index = countryInfo.countryIndex(countryName);

        clearScreen();

        main(true, index);
      })
    );
  };

  const home = (main) => {
    const homeBtn = document.querySelector(".home");

    homeBtn.addEventListener("click", function () {
      clearScreen();

      main();
    });
  };

  const clearScreen = () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
  };

  const borderCountriesSelector = (main) => {
    const borderBtn = document.querySelectorAll(".borders-btn");
    borderBtn.forEach((btn) =>
      btn.addEventListener("click", function () {
        const countryName = btn.textContent;
        const index = countryInfo.countryIndex(countryName);
        clearScreen();
        main(true, index);
      })
    );
  };

  // Dropdown menu
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  const dropdownMenu = () => {
    const dropdown = document.querySelector(".dropbtn");

    dropdown.addEventListener("click", function () {
      document.getElementById("myDropdown").classList.toggle("show");
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };

    const regions = document.querySelectorAll(".regions");

    regions.forEach((btn) =>
      btn.addEventListener("click", function () {
        const regionChosen = this.dataset.region;

        console.log(regionChosen)

        const countryData = countryInfo.countriesByRegions(regionChosen);
        main()
      })
    );
  };

  // sort by region filter

  async function filterByRegion(regionChosen) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${regionChosen}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();

    const container = document.querySelector(".container");

    container.innerHTML = "";

    pageBuilder(data);
  }

  return {
    borderCountriesSelector,
    dropdownMenu,
    clearScreen,
    detailedCountryView,
    home,
  };
})();

export { utilities };
