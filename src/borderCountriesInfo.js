import { apiHandler } from "./APIhandler";
import { countryInfo } from "./countryInfo";
import { utilities } from "./utilities";
import { detailedPageBuilder } from "./detailedpagebuilder";

const data = apiHandler.callFromLocalStorage();

const borderCountries = (() => {
  const borderNames = (borders) => {
    let borderCountries = [];

    if (borders === undefined) {
      borderCountries = "None";
    } else {
      for (let i = 0; i < borders.length; i++) {
        const country = data.findIndex(
          (country) => country.cca3 === borders[i]
        );

        borderCountries.push(data[country]["name"].official);
      }
    }
    return borderCountries;
  };

  const createBorderBtns = (borders) => {
    let borderCountries = borderNames(borders);

    const bordersButtonRow = document.createElement("div");
    bordersButtonRow.classList.add("borders-button-Row");

    const noBorders = document.createElement("P");
    noBorders.textContent = "None";

    if (borderCountries === "None") {
      bordersButtonRow.append(noBorders);
    } else {
      for (let i = 0; i < borderCountries.length; i++) {
        const bordersBtn = document.createElement("button");
        bordersBtn.classList.add("borders-btn");
        bordersBtn.textContent = `${borderCountries[i]}`;
        bordersBtn.setAttribute("data-btn", `${borderCountries[i]}`);
        bordersButtonRow.appendChild(bordersBtn);
      }
    }

    return bordersButtonRow;
  };

  const createBorderRow = (index) => {
    const bordersRow = document.createElement("div");
    bordersRow.classList.add("borders-row");

    const bordersTitle = document.createElement("p");
    bordersTitle.classList.add("borders-title");
    bordersTitle.textContent = "Border Countries:";

    const borderBtn = createBorderBtns(countryInfo.borders(index));

    bordersRow.appendChild(bordersTitle);
    bordersRow.appendChild(borderBtn);

    return bordersRow;
  };

  const borderBtnClick = () => {
    const borderBtn = document.querySelectorAll(".borders-btn");
    borderBtn.forEach((btn) =>
      btn.addEventListener("click", function () {
        const countryName = btn.textContent;
        const index = countryInfo.getCountryIndex(countryName);
        utilities.clearScreen();
        detailedPageBuilder(index);
      })
    );
  };
  return { createBorderRow, borderBtnClick };
})();

export { borderCountries };
