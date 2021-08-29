import { countryInfo } from "./countryInfo.js";
import { apiHandler } from "./APIhandler";
import { pageElements } from "./pageElements.js";
import { utilities } from "./utilities";
import { borderCountries } from "./borderCountriesInfo.js";
import "./style.css";

const data = apiHandler.callFromLocal();

function main(detailedView = false, index = 0) {
  let dataLength;

  detailedView
    ? //<--------------------------------------- -----------------detailed view modifier
      (index, (dataLength = index + 1))
    : ((index = 0), (dataLength = data.length));

  for (index; index < dataLength; index++) {
    const container = document.querySelector(".container");
    const countryName = countryInfo.name(index);
    const capital = countryInfo.capital(index);
    const currency = countryInfo.currency(index)[0]["name"];
    const flag = countryInfo.flag(index);
    const languages = countryInfo.languages(index);
    const nativeName = countryInfo.nativeName(index);
    const population = countryInfo.population(index);
    const region = countryInfo.region(index);
    const subRegion = countryInfo.subRegion(index);
    const topLevelDomain = countryInfo.topLevelDomain(index);

    const borders = countryInfo.borders(index);

    const countryNameText = pageElements.nameGenerator(countryName);
    const countryCard = pageElements.cardGenerator();

    detailedView ? countryCard.classList.add("greybkGround") : null;
    //<--------------------------------------- -----------------detailed view modifier

    const countryDetails = document.createElement("div");
    countryDetails.classList.add("details");

    const nativeNameText = pageElements.attributeGenerator(
      "Native Name:",
      nativeName
    );

    const populationText = pageElements.attributeGenerator(
      "Population",
      population
    );

    const regionText = pageElements.attributeGenerator("Region", region);

    const subRegionText = pageElements.attributeGenerator(
      "Sub Region",
      subRegion
    );

    const capitalText = pageElements.attributeGenerator("Capital", capital);

    const secondRow = document.createElement("div");

    secondRow.classList.add("second-row");

    const countryTopLevelDomain = pageElements.attributeGenerator(
      "Top Level Domain",
      topLevelDomain
    );

    secondRow.appendChild(countryTopLevelDomain);

    const countryCurrency = pageElements.attributeGenerator(
      "Currency",
      currency
    );

    secondRow.appendChild(countryCurrency);

    const countryLanguages = pageElements.languageAtrributeHandler(
      "Languages",
      languages
    );

    secondRow.appendChild(countryLanguages);

    const bordersRow = document.createElement("div");

    bordersRow.classList.add("borders-row");
    const bordersTitle = document.createElement("p");
    bordersTitle.classList.add("borders-title");
    bordersTitle.textContent = "Border Countries:";

    bordersRow.appendChild(bordersTitle);

    if (detailedView) {
      //<--------------------------------------- -----------------detailed view modifier
      const borderBtns = borderCountries.borderCountriesBtnsGenerator(borders);

      bordersRow.appendChild(borderBtns);
    } else null;

    const detailedViewAppend = [
      countryNameText,
      nativeNameText,
      populationText,
      regionText,
      subRegionText,
      capitalText,
      secondRow,
      bordersRow,
    ];

    const overviewToAppend = [
      countryNameText,
      populationText,
      regionText,
      capitalText,
    ];

    countryCard.appendChild(pageElements.flagGenerator(flag, countryName));

    if (!detailedView) {
      //--------------------------------------- -----------------detailed view modifier
      const countryCardGenerated = pageElements.homePageGenerator(
        countryDetails,
        overviewToAppend
      );
      countryCard.appendChild(countryCardGenerated);
    } else {
      const countryCardGenerated = pageElements.detailedPageGenerator(
        countryDetails,
        detailedViewAppend
      );

      countryCard.appendChild(countryCardGenerated);
    }

    container.appendChild(countryCard);
  }


//  let output = data.filter((country)=> country.region === "Asia");
//  console.log((output))  

  !detailedView
    ? //--------------------------------------- -----------------detailed view modifier
      utilities.detailedCountryView(main)
    : utilities.borderCountriesSelector(main);
}

utilities.dropdownMenu()

utilities.home(main);

apiHandler.getAllCountries();

main();
