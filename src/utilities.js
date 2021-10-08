import { countryInfo } from "./countryInfo";
import { detailedPageBuilder } from "./detailedpagebuilder";
import { homePageBuilder } from "./homepagebuilder";

const utilities = (() => {
  const clearScreen = () => {
    const container = document.querySelector(".country-cards-container");
    container.innerHTML = "";
  };

  const detailedViewClick = () => {
    const countrySelect = document.querySelectorAll(".country-card");

    countrySelect.forEach((country) =>
      country.addEventListener("click", function () {
        const countryName = country.querySelector(".country-name").innerText;

        const index = countryInfo.getCountryIndex(countryName);

        clearScreen();

        detailedPageBuilder(index);
        const hideInDetail = document.querySelectorAll(".hide-in-detail");

        hideInDetail.forEach((element) => (element.style.display = "none"));
        const backBtn = document.querySelector(".js-back-btn");
        backBtn.style.display = "block";
      })
    );
  };

  const backBtn = () => {
    const backBtn = document.querySelector(".js-back-btn");

    backBtn.addEventListener("click", function () {
      clearScreen();
      homePageBuilder();
      const hideInDetail = document.querySelectorAll(".hide-in-detail");
      hideInDetail.forEach((element) => (element.style.display = "block"));
      const backBtn = document.querySelector(".js-back-btn");
      backBtn.style.display = "none";
    });
  };

  // Dropdown menu
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  const openContinentMenu = () => {
    const dropdown = document.querySelector(".dropbtn");

    dropdown.addEventListener("click", function () {
      document.getElementById("myDropdown").classList.toggle("show");
    });
  };

  const closeContinentMenu = () => {
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
  };

  const displayByContinent = () => {
    const continents = document.querySelectorAll(".continents");

    continents.forEach((btn) =>
      btn.addEventListener("click", function () {
        const continentChosen = this.dataset.continent;

        const continentData = countryInfo.filterByContinent(continentChosen);

        clearScreen();

        homePageBuilder(continentData);

        countryInfo.setCountryDataToGlobal();
      })
    );
  };

  const byContinentMenuHandler = () => {
    openContinentMenu();
    closeContinentMenu();
    displayByContinent();
  };

  const displaySearchResult = () => {
    const entry = document.querySelector("#search-bar");
    entry.addEventListener("keydown", function (e) {
      const searchEntry = entry.value;

      const filterByName = countryInfo.filterBySearch(searchEntry);

      clearScreen();

      homePageBuilder(filterByName);

      countryInfo.setCountryDataToGlobal();
    });
  };

  const mediaQuery = window.matchMedia("(min-width: 900px)");

  const themeBtnClick = () => {
    const themeBtn = document.querySelector(".theme-btn");

    themeBtn.addEventListener("click", function () {
      const activeTheme = document.querySelector("#active-theme");

      document.head.removeChild(activeTheme);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";

      activeTheme.getAttribute("data-theme") === "light"
        ? (link.setAttribute("data-theme", "dark"),
          (link.href = "./../src/darktheme.css"),
          (themeBtn.textContent = "Light Mode"))
        : (link.setAttribute("data-theme", "light"),
          (link.href = "./../src/lighttheme.css"),
          (themeBtn.textContent = "Dark Mode"));

      link.id = "active-theme";

      document.head.appendChild(link);
    });
  };

  return {
    byContinentMenuHandler,
    clearScreen,
    detailedViewClick,
    backBtn,
    displaySearchResult,
    themeBtnClick,

    mediaQuery,
  };
})();

export { utilities };
