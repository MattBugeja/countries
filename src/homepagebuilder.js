import { countryInfo } from "./countryInfo.js";
import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import "./style.css";

const ALLCOUNTRIESDATA = apiHandler.callFromLocalStorage();

function homePageBuilder(countryData = ALLCOUNTRIESDATA) {
  for (let index = 0; index < countryData.length; index++) {
    const [container, countryDetails, countryName, countryCard, flag] =
      pageElements.createCommonElements(countryInfo, index);

    const overviewAttr = {
      Population: countryInfo.population(index),
      Continent: countryInfo.continent(index),
      Capital: countryInfo.capital(index),
    };

    const NUMOFATTR = 3;

    const countryAttr = pageElements.createAttrRow(NUMOFATTR, overviewAttr);
    countryCard.appendChild(flag);
    countryDetails.appendChild(countryName);
    countryDetails.appendChild(countryAttr);
    countryCard.append(countryDetails);
    container.appendChild(countryCard);
  }

  utilities.detailedViewClick();
}

export { homePageBuilder };
