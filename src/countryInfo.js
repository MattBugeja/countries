import { apiHandler } from "./APIhandler";

const ALLCOUNTRIESDATA = apiHandler.callFromLocalStorage();

let countriesData = ALLCOUNTRIESDATA;

const countryInfo = (() => {
  const borders = (index) => countriesData[index].borders;
  const capital = (index) => {
    
    if (countriesData[index].capital === undefined) {return "Not Applicable"} else {return countriesData[index].capital}  ;
  
  }
  const currency = (index) => {
    if (countriesData[index]["currencies"] === undefined) {
      return "Not Applicable";
    } else {
      return Object.keys(countriesData[index]["currencies"]);
    }
  };

  const flag = (index) => countriesData[index]["flags"][0];
  const languages = (index) => {
    const languageKey = Object.keys(countriesData[index].languages);
    const language = [];

    for (let i = 0; i < languageKey.length; i++) {
      language.push(countriesData[index].languages[languageKey[i]]);
    }

    return language;
  };
  const name = (index) => countriesData[index]["name"].official;
  const commonName = (index) => countriesData[index]["name"].common;
  const overview = (index) => countriesData[index];
  const population = (index) =>
    Number(countriesData[index].population).toLocaleString();
  const continent = (index) => countriesData[index].region;
  const subRegion = (index) => {if (countriesData[index]["subregion"] === undefined) {
    return "Not Applicable";
  } else {return countriesData[index].subregion};}
  const topLevelDomain = (index) => countriesData[index].tld;

  // countriesIndex

  const getCountryIndex = (countryName) => {
    const index = countriesData.findIndex(
      (x) => x.name["official"] === countryName
    );

    return index;
  };

  // Continents

  const filterByContinent = (continentChosen) => {
    const countriesInContinent = countriesData.filter(
      (country) => country.region === continentChosen
    );
    setToContinental(countriesInContinent);

    return countriesInContinent;
  };

  const setCountryDataToGlobal = () => {
    countriesData = apiHandler.callFromLocalStorage();
  };

  const setToContinental = (continental) => {
    countriesData = continental;
  };

  // Search Bar

  const filterBySearch = (entry) => {
    const countriesByName = countriesData.filter((country) =>
      country.name["official"].toLowerCase().includes(entry.toLowerCase())
    );

    setToByName(countriesByName);

    return countriesByName;
  };

  const setToByName = (byName) => {
    countriesData = byName;
  };

  return {
    borders,
    capital,
    filterByContinent,
    getCountryIndex,
    currency,
    flag,
    filterBySearch,
    languages,
    name,
    commonName,
    overview,
    population,
    continent,
    setCountryDataToGlobal,
    subRegion,
    topLevelDomain,
  };
})();

export { countryInfo };
