const countryInfo = (() => {
  const countryBorders = (countryData, country) => countryData[country].borders;

  const separateBorderLands = (countryBorders) => {
    const landsSeparated = [];
    if (countryBorders.length > 0) {
      const landsSeparated = [];

      for (let lands = 0; lands < countryBorders.length; lands++) {
        landsSeparated.push(countryBorders[lands]);
      }

      countriesByInitials(landsSeparated);
    }
  };

  // }

  const countryCapital = (countryData, country) => countryData[country].capital;
  const countryCurrency = (countryData, country) =>
    countryData[country].currencies;
  const countryFlag = (countryData, country) => countryData[country].flag;
  const countryLanguages = (countryData, country) =>
    countryData[country].languages;
  const countryName = (countryData, country) => countryData[country].name;
  const countryNativeName = (countryData, country) =>
    countryData[country].nativeName;
  const countryOverview = (countryData, country) => countryData[country];
  const countryPopulation = (countryData, country) =>
    Number(countryData[country].population).toLocaleString();
  const countryRegion = (countryData, country) => countryData[country].region;
  const countrySubRegion = (countryData, country) =>
    countryData[country].subregion;
  const countryTopLevelDomain = (countryData, country) =>
    countryData[country].topLevelDomain;

  return {
    countryBorders,
    countryCapital,
    countryCurrency,
    countryFlag,
    countryLanguages,
    countryName,
    countryNativeName,
    countryOverview,
    countryPopulation,
    countryRegion,
    countrySubRegion,
    countryTopLevelDomain,
    separateBorderLands,
  };
})();



const pageElements = (() => {
  const flagGenerator = (countryFlag) => {
    const flag = document.createElement("div");
    flag.classList.add("flag");
    flag.innerHTML = `<img class = "flag-image" src = ${countryFlag}>`;

    return flag;
  };

  const cardGenerator = () => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
    countryCard.setAttribute("role", "button");
    return countryCard;
  };

  const nameGenerator = (countryNameParam) => {
    const countryName = document.createElement("h1");
    countryName.classList.add("country-name");
    countryName.textContent = countryNameParam;
    return countryName;
  };

  const attributeGenerator = (attributeName, attributeQuantity) => {
    const attribute = document.createElement("p");
    attribute.classList.add("attribute");

    attribute.innerHTML = `<strong>${attributeName}: </strong>${attributeQuantity}`;

    return attribute;
  };

  const borderingBtnsGenerator = (borderlist) => {
 
    const bordersButtonRow = document.createElement("div");
    bordersButtonRow.classList.add("borders-button-Row");

    const noBorders = document.createElement("P");
    noBorders.textContent = "None";

    if (borderlist.length===0){

      bordersButtonRow.append(noBorders);


    } else {

      for (let i = 0; i < borderlist.length; i++) {
      const bordersBtn = document.createElement("button");
      bordersBtn.classList.add("borders-btn");
      bordersBtn.textContent = `${borderlist[i]}`;

      bordersBtn.setAttribute("data-btn", `${borderlist[i]}`);
      bordersButtonRow.appendChild(bordersBtn);
    }}

    return bordersButtonRow;
  };

  const languageAtrributeGenerator = (attributeName, attributeQuantity) => {
    languages = [];

    for (let i = 0; i < attributeQuantity.length; i++) {
      attributeQuantity;

      languages.push(` ${attributeQuantity[i]["name"]}`);
    }

    return attributeGenerator(attributeName, languages);
  };

  const appendChildren = (
    detailedView = false,
    countryDetails,
    overviewList,
    detailedList
  ) => {
    detailedView ? (list = detailedList) : (list = overviewList);
    let i = 0;

    for (i; i < list.length; i++) {
      countryDetails.appendChild(list[i]);
    }

    return countryDetails;
  };

  return {
    appendChildren,
    attributeGenerator,
    borderingLandsBtns: borderingBtnsGenerator,
    cardGenerator,
    flagGenerator,
    languageAtrributeHandler: languageAtrributeGenerator,
    nameGenerator,
  };
})();

const borderCountriesInfo = (() => {

  const fullData = []

  const fullDataGetter = (data) => {
  
  fullData.push(data)


  return fullData}


  const borderNames = (borders) =>{

    const borderCountries= []
 
for (let i = 0; i < borders.length; i++){
  testindex = (fullData[0].findIndex((x) => x.alpha3Code === borders[i]));

  borderCountries.push(fullData[0][testindex]["name"])
  
}
return borderCountries


}

 
 return{borderNames, fullDataGetter}
})();

const pageBuilder = (
  countryData,
  detailedView = false,
  index = 0,
  // borderslist = null,
  fullData = null



) => {
 
  let borderButtonsRow = ""

  if (detailedView) {

    let fullCountryData =""


    fullData === null ? fullCountryData = countryData : fullCountryData = fullData

    const individualCountryData = [countryData[index]];
 
    const borders = countryInfo.countryBorders(individualCountryData, 0);




    const borderlist = borderCountriesInfo.borderNames(borders,fullCountryData)

  

    borderButtonsRow = pageElements.borderingLandsBtns(borderlist)

    countryData = individualCountryData



  } else null;

  for (let country = 0; country < countryData.length; country++) {
    const container = document.querySelector(".container");
    const borders = countryInfo.countryBorders(countryData, country);

    // borderCountriesInfo.borderNames(borders, fullCountryData)

    const capital = countryInfo.countryCapital(countryData, country);
    const countryOverview = countryInfo.countryOverview(countryData, country);
    const currency = countryInfo.countryCurrency(countryData, country)[0][
      "name"
    ];
    const flag = countryInfo.countryFlag(countryData, country);
    const languages = countryInfo.countryLanguages(countryData, country);
    const name = countryInfo.countryName(countryData, country);
    const nativeName = countryInfo.countryNativeName(countryData, country);
    const population = countryInfo.countryPopulation(countryData, country);
    const region = countryInfo.countryRegion(countryData, country);
    const subRegion = countryInfo.countrySubRegion(countryData, country);
    const topLevelDomain = countryInfo.countryTopLevelDomain(
      countryData,
      country
    );

    const countryName = pageElements.nameGenerator(name);
    const countryCard = pageElements.cardGenerator();
    const countryFlag = pageElements.flagGenerator(flag);

    const countryDetails = document.createElement("div");
    countryDetails.classList.add("details");

    const countryNativeName = pageElements.attributeGenerator(
      "Native Name:",
      nativeName
    );

    const countryPop = pageElements.attributeGenerator(
      "Population",
      population
    );

    const countryRegion = pageElements.attributeGenerator("Region", region);

    const countrySubRegion = pageElements.attributeGenerator(
      "Sub Region",
      subRegion
    );

    const countryCapital = pageElements.attributeGenerator("Capital", capital);

    const rowTwo = document.createElement("div");

    rowTwo.classList.add("rowTwo");

    const countryTopLevelDomain = pageElements.attributeGenerator(
      "Top Level Domain",
      topLevelDomain
    );

    rowTwo.appendChild(countryTopLevelDomain);

    const countryCurrency = pageElements.attributeGenerator(
      "Currency",
      currency
    );

    rowTwo.appendChild(countryCurrency);

    const countryLanguages = pageElements.languageAtrributeHandler(
      "Languages",
      languages
    );

    rowTwo.appendChild(countryLanguages);

    const bordersRow = document.createElement("div");

    bordersRow.classList.add("bordersRow");
    const bordersTitle = document.createElement("p");
    bordersTitle.classList.add("borders-title");
    bordersTitle.textContent = "Border Countries:";

    bordersRow.appendChild(bordersTitle);

    // const borderButtonsRow = pageElements.borderingLandsBtns(borderlist);
   

    if(detailedView) {

     
    
    bordersRow.appendChild(borderButtonsRow)

  }
    const detailedViewAppend = [
      countryName,
      countryNativeName,
      countryPop,
      countryRegion,
      countrySubRegion,
      countryCapital,
      rowTwo,
      bordersRow,
    ];

    const overviewToAppend = [
      countryName,
      countryPop,
      countryRegion,
      countryCapital,
    ];

    countryCardGenerated = pageElements.appendChildren(
      detailedView,
      countryDetails,
      overviewToAppend,
      detailedViewAppend
    );

    countryCard.appendChild(pageElements.flagGenerator(flag));

    countryCard.appendChild(countryCardGenerated);

    container.appendChild(countryCard);

    if (detailedView) {
      const borderLandBtns = document.querySelectorAll(".borders-btn");
      borderLandBtns.forEach((btn) =>
        btn.addEventListener("click", function () {

        
         searchByName(btn.textContent, countryData)
        })
      );
    } else null;
  }

  if (!detailedView) {
    const countrySelect = document.querySelectorAll(".country-card");

    countrySelect.forEach((country) =>
      country.addEventListener("click", function () {
        const countryName = country.querySelector(".country-name").innerText;

        const index = countryData.findIndex((x) => x.name === countryName);

        const container = document.querySelector(".container");
        container.innerHTML = "";

        pageBuilder(countryData, true, index);
      })
    );
  }
};

async function getAllCountries() {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
    mode: "cors",
  });
  const data = await response.json();

  borderCountriesInfo.fullDataGetter(data)


  pageBuilder(data);
}

getAllCountries();

// Dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdown = document.querySelector(".dropbtn");

dropdown.addEventListener("click", function () {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const regions = document.querySelectorAll(".regions");

regions.forEach((btn) =>
  btn.addEventListener("click", function () {
    const regionChosen = this.dataset.region;

    filterByRegion(regionChosen);
  })
);

// sort by region filter

async function filterByRegion(regionChosen) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/region/${regionChosen}`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();

  const container = document.querySelector(".container");

  container.innerHTML = "";

 

  pageBuilder(data);
}

//   search-bar

async function searchByName(searchValue, countryData) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${searchValue}`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();

  const container = document.querySelector(".container");

  container.innerHTML = "";

  pageBuilder(data,true, 0, null, countryData);
}

const searchBarEntry = document.querySelector("#search-bar");

function getValue() {
  const searchValue = searchBarEntry.value;
  return searchValue;
}

searchBarEntry.addEventListener("keyup", function (e) {
  const searchValue = getValue();

  searchByName(searchValue);
});

async function countriesByInitials(countryData, borders, index) {
  const testList = [];

  for (let i = 0; i < borders.length; i++) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${borders[i]}`,

      { mode: "cors" }
    )}};

