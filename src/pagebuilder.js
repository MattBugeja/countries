import { countryInfo } from "./countryInfo.js";
import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import { borderCountries } from "./borderCountriesInfo.js";
import "./style.css";

const ALLCOUNTRIESDATA = apiHandler.callFromLocal();

function pageBuilder(
  countryData = ALLCOUNTRIESDATA,
  detailedView = false,
  index = 0
) {
  countryInfo.countryData = countryData;

  let dataLength;

  detailedView
    ? //<--------------------------------------- -----------------detailed view modifier
      (index, (dataLength = index + 1))
    : ((index = 0), (dataLength = countryData.length));

  for (index; index < dataLength; index++) {
    const countryName = pageElements.nameGenerator(countryInfo.name(index));
    const container = document.querySelector(".container");
    const countryCard = pageElements.cardGenerator();
    const countryDetails = document.createElement("div");
    countryDetails.classList.add("details");

    const overviewAttributes = {
      "Population": countryInfo.population(index),
      "Region": countryInfo.region(index),
      "Capital": countryInfo.capital(index),
    };

    const detailedAttributes = {
      "Native Name": countryInfo.nativeName(index),
      "Population": countryInfo.population(index),
      "Region": countryInfo.region(index),
      "Sub Region": countryInfo.subRegion(index),
      "Capital": countryInfo.capital(index),
    };

    const secondRowAttributes = {
      "Top Level Domain": countryInfo.topLevelDomain(index),
      Currency: countryInfo.currency(index)[0]["name"],
    };


    

    countryCard.appendChild(
      pageElements.flagGenerator(countryInfo.flag(index), countryInfo.name(index))
    );

    countryDetails.append(countryName);

    if (!detailedView) {
      const attributesToAppend = pageElements.fullAttributesGenerator(
        3,
        overviewAttributes
      );

      countryDetails.appendChild(attributesToAppend);
    } else {
      detailedView ? countryCard.classList.add("greybkGround") : null;

      const attributesToAppend = pageElements.fullAttributesGenerator(
        5,
        detailedAttributes
      );

      countryDetails.appendChild(attributesToAppend);

      const secondRow = document.createElement("div");

      secondRow.classList.add("second-row");

      const secondRowAttributesToAppend = pageElements.fullAttributesGenerator(
        2,
        secondRowAttributes
      );

      secondRow.append(secondRowAttributesToAppend);

      const languages = pageElements.languageAtrributeHandler(
        "Languages",
        countryInfo.languages(index)
      );

      secondRow.append(languages);
      countryDetails.appendChild(secondRow);

      const bordersRow = document.createElement("div");
      bordersRow.classList.add("borders-row");
      const bordersTitle = document.createElement("p");
      bordersTitle.classList.add("borders-title");
      bordersTitle.textContent = "Border Countries:";

      bordersRow.appendChild(bordersTitle);

      const borderBtns = borderCountries.borderCountriesBtnsGenerator(
        countryInfo.borders(index)
      );

      bordersRow.appendChild(borderBtns);

      countryDetails.append(bordersRow);
    }

    countryCard.append(countryDetails);
    container.appendChild(countryCard);
  }

  !detailedView
    ? //--------------------------------------- -----------------detailed view modifier
      utilities.detailedCountryView()
    : utilities.borderCountriesSelector();
}

export { pageBuilder };
