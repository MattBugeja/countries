import { apiHandler } from "./APIhandler";
import { pageBuilder } from "./pagebuilder";

let countryData = apiHandler.callFromLocal();

const countryInfo = (() => {
  const borders = (index) => countryData[index].borders;
  const capital = (index) => countryData[index].capital;
  const currency = (index) => countryData[index].currencies;
  const flag = (index) => countryData[index].flag;
  const languages = (index) => countryData[index].languages;
  const name = (index) => countryData[index].name;
  const nativeName = (index) => countryData[index].nativeName;
  const overview = (index) => countryData[index];
  const population = (index) =>
    Number(countryData[index].population).toLocaleString();
  const region = (index) => countryData[index].region;
  const subRegion = (index) => countryData[index].subregion;
  const topLevelDomain = (index) => countryData[index].topLevelDomain;

  const countriesByRegions = (regionChosen) => {
    const countriesInRegion = countryData.filter(
      (country) => country.region === regionChosen
    );
    setToRegional(countriesInRegion);

    return countriesInRegion;
  };

  const setToGlobal = (global) => {
    countryData = apiHandler.callFromLocal();
  };

  const setToRegional = (regional) => {
    countryData = regional;
  };

  const countryIndex = (countryName) => {
    const index = countryData.findIndex((x) => x.name === countryName);

    return index;
  };

  const test = (name) => console.log(name);

  return {
    borders,
    capital,
    countriesByRegions,
    countryIndex,
    currency,
    flag,
    languages,
    name,
    nativeName,
    overview,
    population,
    region,
    setToGlobal,
    subRegion,
    topLevelDomain,
    test,
  };
})();

export { countryInfo };
