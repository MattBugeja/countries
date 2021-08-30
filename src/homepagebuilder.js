import { countryInfo } from "./countryInfo.js";
import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import "./style.css";

const ALLCOUNTRIESDATA = apiHandler.callFromLocal();

function homePageBuilder(countryData = ALLCOUNTRIESDATA) {
  countryInfo.countryData = countryData;

  for (let index = 0; index < countryData.length; index++) {
 



// common in both pagebuilders

    const container = document.querySelector(".container");
    const countryCard = pageElements.cardGenerator();

    const countryName = pageElements.nameGenerator(countryInfo.name(index));

    countryCard.appendChild(
      pageElements.flagGenerator(
        countryInfo.flag(index),
        countryInfo.name(index)
      )
    );

    const countryDetails = document.createElement("div");

    countryDetails.classList.add("details");
    countryDetails.appendChild(countryName);

// common in both pagebuilders

    const ATTRIBUTES = {
      "Population": countryInfo.population(index),
     "Region": countryInfo.region(index),
      "Capital": countryInfo.capital(index),
    };

    const NUMOFATTRIBUTES = 3;

    const attributesToAppend = pageElements.fullAttributesGenerator(
      NUMOFATTRIBUTES,
      ATTRIBUTES
    );

    countryDetails.appendChild(attributesToAppend);
    countryCard.append(countryDetails);
    container.appendChild(countryCard);
  }

  utilities.detailedCountryView();
}

export { homePageBuilder };
