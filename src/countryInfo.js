import { apiHandler } from "./APIhandler";
import { pageBuilder } from "./pagebuilder";

const ALLCOUNTRIESDATA = apiHandler.callFromLocal();

let countriesData = ALLCOUNTRIESDATA;

const countryInfo = (() => {
  const borders = (index) => countriesData[index].borders;
  const capital = (index) => countriesData[index].capital;
  const currency = (index) => countriesData[index].currencies;
  const flag = (index) => countriesData[index].flag;
  const languages = (index) => countriesData[index].languages;
  const name = (index) => countriesData[index].name;
  const nativeName = (index) => countriesData[index].nativeName;
  const overview = (index) => countriesData[index];
  const population = (index) =>
    Number(countriesData[index].population).toLocaleString();
  const region = (index) => countriesData[index].region;
  const subRegion = (index) => countriesData[index].subregion;
  const topLevelDomain = (index) => countriesData[index].topLevelDomain;

  const countriesByRegions = (regionChosen) => {
    const countriesInRegion = countriesData.filter(
      (country) => country.region === regionChosen
    );
    setToRegional(countriesInRegion);

    return countriesInRegion;
  };

  const setCountryDataToGlobal = () => {
    countriesData = apiHandler.callFromLocal();
  };

  const setToRegional = (regional) => {
    countriesData = regional;
  };

  const countryIndex = (countryName) => {
    const index = countriesData.findIndex((x) => x.name === countryName);

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
    setCountryDataToGlobal,
    subRegion,
    topLevelDomain,
    test,
  };
})();

export { countryInfo };
