import { apiHandler } from "./APIhandler";

const countryData = apiHandler.callFromLocal()

const countryInfo = (() => {




    const borders = (country) => countryData[country].borders;
    const capital = (country) => countryData[country].capital;
    const currency = (country) =>
      countryData[country].currencies;
    const flag = (country) => countryData[country].flag;
    const languages = (country) =>
      countryData[country].languages;
    const name = (country) => countryData[country].name;
    const nativeName = (country) =>
      countryData[country].nativeName;
    const overview = (country) => countryData[country];
    const population = (country) =>
      Number(countryData[country].population).toLocaleString();
    const region = (country) => countryData[country].region;
    const subRegion = (country) =>
      countryData[country].subregion;
    const topLevelDomain = (country) =>
      countryData[country].topLevelDomain;

      const test = (name) => console.log(name)

  
    return {
      borders,
      capital,
      currency,
      flag,
      languages,
      name,
      nativeName,
      overview,
      population,
      region,
      subRegion,
      topLevelDomain,
      test
      
    };
  })();


  export {countryInfo}