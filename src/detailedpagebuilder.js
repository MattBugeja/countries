import { countryInfo } from "./countryInfo.js";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import { borderCountries } from "./borderCountriesInfo.js";
import "./style.css";

function detailedPageBuilder(index = 0) {
  const [container, countryDetails, countryName, countryCard, flag] =
    pageElements.createCommonElements(countryInfo, index);

  countryCard.classList.add("greybkGround");

  const numOfAttrRow1 = 5;

  //   first row attributes

  const firstRowAttr = {
    "Common Name": countryInfo.commonName(index),
    Population: countryInfo.population(index),
    Continent: countryInfo.continent(index),
    "Sub Region": countryInfo.subRegion(index),
    Capital: countryInfo.capital(index),
  };

  const overviewAttributes = pageElements.createAttrRow(
    numOfAttrRow1,
    firstRowAttr
  );

  // first row attributes

  // second row attributes

  const secondRowAttr = {
    "Top Level Domain": countryInfo.topLevelDomain(index),
    Currency: countryInfo.currency(index),
  };

  const numOfAttrRowTwo = 2;

  const secondRow = document.createElement("div");

  secondRow.classList.add("second-row");

  const rowTwoAttr = pageElements.createAttrRow(numOfAttrRowTwo, secondRowAttr);

  const languages = pageElements.createLangElement(
    "Languages",
    countryInfo.languages(index)
  );

  //  second row attributes

  // Border Countries

  const bordersRow = borderCountries.createBorderRow(index);

  // adds classes necessary for screen size

  const mediaQuery = utilities.mediaQuery.matches;

  if (mediaQuery) {
    bordersRow.classList.add("borders-row-lg-detailed");
    countryName.classList.add("country-name-lg-detailed");
    countryCard.classList.add("country-card-lg-detailed");
    countryCard.classList.remove("country-card");
    flag.classList.add("flag-lg-detailed");
    countryDetails.classList.add("details-lg-detailed");
    overviewAttributes.classList.add("col1-lg-detailed");
    secondRow.classList.add("second-row-lg-detailed");
  } else {
    null;
  }

  countryCard.appendChild(flag);
  countryDetails.append(countryName);
  countryDetails.appendChild(overviewAttributes);
  secondRow.append(rowTwoAttr);
  secondRow.append(languages);
  countryDetails.appendChild(secondRow);

  countryDetails.appendChild(bordersRow);

  // Border Countries

  countryCard.appendChild(countryDetails);
  container.appendChild(countryCard);

  borderCountries.borderBtnClick();
}

export { detailedPageBuilder };
