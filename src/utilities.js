import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements";

const utilities = (() => {
  const data = apiHandler.callFromLocal();

  const setIndex = (countryName) => {
    const index = data.findIndex((x) => x.name === countryName);

    return index;
  };

  const detailedCountryView = (main) => {
    const countrySelect = document.querySelectorAll(".country-card");

    countrySelect.forEach((country) =>
      country.addEventListener("click", function () {
        const countryName = country.querySelector(".country-name").innerText;

        const index = setIndex(countryName);

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

  return { clearScreen, detailedCountryView, home };
})();

export { utilities };
