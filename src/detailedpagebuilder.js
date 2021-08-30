import { countryInfo } from "./countryInfo.js";
import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import { borderCountries } from "./borderCountriesInfo.js";
import "./style.css";

const ALLCOUNTRIESDATA = apiHandler.callFromLocal();

function detailedPageBuilder(index = 0) {
  // common in both pageBuilders

  const countryName = pageElements.nameGenerator(countryInfo.name(index));
  const container = document.querySelector(".container");
  const countryCardDetailed = pageElements.cardGenerator();
  const countryDetails = document.createElement("div");
  countryDetails.classList.add("details");
  countryCardDetailed.appendChild(
    pageElements.flagGenerator(countryInfo.flag(index), countryInfo.name(index))
  );

  countryDetails.append(countryName);

  // common in both pageBuilders

  countryCardDetailed.classList.add("greybkGround");

  const firstRowAttributes = {
    "Native Name": countryInfo.nativeName(index),
    Population: countryInfo.population(index),
    Region: countryInfo.region(index),
    "Sub Region": countryInfo.subRegion(index),
    Capital: countryInfo.capital(index),
  };

  const secondRowAttributes = {
    "Top Level Domain": countryInfo.topLevelDomain(index),
    Currency: countryInfo.currency(index)[0]["name"],
  };

  const numOf1stRowAttributes = 5;

  //   first row attributes

  const attributesToAppend = pageElements.fullAttributesGenerator(
    numOf1stRowAttributes,
    firstRowAttributes
  );

  countryDetails.appendChild(attributesToAppend);

  // first row attributes

  const numOf2ndRowAttributes = 2;

  // second row attributes
  const secondRow = document.createElement("div");

  secondRow.classList.add("second-row");

  const secondRowAttributesToAppend = pageElements.fullAttributesGenerator(
    numOf2ndRowAttributes,
    secondRowAttributes
  );

  secondRow.append(secondRowAttributesToAppend);

  const languages = pageElements.languageAtrributeHandler(
    "Languages",
    countryInfo.languages(index)
  );

  secondRow.append(languages);
  countryDetails.appendChild(secondRow);

  //  second row attributes

  // Borders
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

  countryDetails.appendChild(bordersRow);

  // Borders

  countryCardDetailed.appendChild(countryDetails);
  container.appendChild(countryCardDetailed);

  utilities.borderCountriesSelector();
}

export { detailedPageBuilder };
