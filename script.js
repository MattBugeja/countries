const countryInfo = (() => {
  const countryBorders = (countryData, country) => countryData[country].borders;
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

    // attributeName ==="Languages" ? languageAtrributeHandler(attributeName, attributeQuantity) : null;

    attributeQuantity.length === 0 ? attributeQuantity = "None" : null;
    const attribute = document.createElement("p");
    attribute.classList.add("attribute");
    attribute.innerHTML = `<strong>${attributeName}: </strong>${attributeQuantity}`;

    return attribute;
  };

  const languageAtrributeHandler = (attributeName, attributeQuantity)=>{

    
      languages=[]


      for (let i = 0; i < attributeQuantity.length; i++){

        attributeQuantity 
        
        languages.push(` ${attributeQuantity[i]["name"]}`)

      }

      const attribute = document.createElement("p");
      attribute.classList.add("attribute");
      attribute.innerHTML = `<strong>${attributeName}: </strong> ${languages}`;

      return attribute;

    


  }

  return { attributeGenerator, cardGenerator, flagGenerator, languageAtrributeHandler, nameGenerator };
})();


const homePageBuilder = (countryData) => {
  for (let country = 0; country < countryData.length; country++) {
    const name = countryInfo.countryName(countryData, country);
   console.log(countryOverview = countryInfo.countryOverview(countryData, country));
    const population = countryInfo.countryPopulation(countryData, country);
    const region = countryInfo.countryRegion(countryData, country);
    const capital = countryInfo.countryCapital(countryData, country);
    const flag = countryInfo.countryFlag(countryData, country);

    const container = document.querySelector(".container");

    const countryCard = pageElements.cardGenerator();

    countryCard.appendChild(pageElements.flagGenerator(flag));

    const countryDetails = document.createElement("div");
    countryDetails.classList.add("details");

    const countryName = pageElements.nameGenerator(name);

    const countryPop = pageElements.attributeGenerator(
      "Population",
      population
    );

    const countryRegion = pageElements.attributeGenerator("Region", region);

    const countryCapital = pageElements.attributeGenerator("Capital", capital);

    countryDetails.appendChild(countryName);
    countryDetails.appendChild(countryPop);
    countryDetails.appendChild(countryRegion);
    countryDetails.appendChild(countryCapital);
    countryCard.appendChild(countryDetails);

    container.appendChild(countryCard);
  }

  const countrySelect = document.querySelectorAll(".country-card");

  countrySelect.forEach((country) =>
    country.addEventListener("click", function () {
      const countryName = country.querySelector(".country-name").innerText;

      const index = countryData.findIndex(
        (x) => x.name === countryName)

        console.log(index)


        detailedPageBuilder(countryData,index)
      ;
    })
  );
};



const detailedPageBuilder = (countryData,country) =>{


 


  const borders = countryInfo.countryBorders(countryData,country)
  const capital = countryInfo.countryCapital(countryData, country);
  const countryOverview = countryInfo.countryOverview(countryData, country);
  const currency = countryInfo.countryCurrency(countryData,country)[0]["name"]
  const flag = countryInfo.countryFlag(countryData, country);
  const languages = countryInfo.countryLanguages(countryData,country)
  const name = countryInfo.countryName(countryData, country);
  const nativeName = countryInfo.countryNativeName(countryData,country)
  const population = countryInfo.countryPopulation(countryData, country);
  const region = countryInfo.countryRegion(countryData, country);
  const subRegion = countryInfo.countrySubRegion(countryData,country)
  const topLevelDomain = countryInfo.countryTopLevelDomain(countryData,country)


  const container = document.querySelector(".container");
  container.innerHTML = "";

  const countryName = pageElements.nameGenerator(name);
  const countryCard = pageElements.cardGenerator();
  countryCard.appendChild(pageElements.flagGenerator(flag));
 
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

  const countrySubRegion = pageElements.attributeGenerator("Sub Region", subRegion);

  const countryCapital = pageElements.attributeGenerator("Capital", capital);


  const countryTopLevelDomain = pageElements.attributeGenerator("Top Level Domain", topLevelDomain);

  const countryCurrency = pageElements.attributeGenerator("Currency", currency);

  const countryLanguages = pageElements.languageAtrributeHandler("Languages", languages)

  const countryBorder = pageElements.attributeGenerator("Border Countries", borders)


const childrenToBeAppended = [
  countryName, countryPop, countryRegion, countrySubRegion, countryCapital, countryTopLevelDomain, countryCurrency, countryLanguages, countryBorder]

  countryDetails.appendChild(countryName);
  countryDetails.appendChild(countryPop);
  countryDetails.appendChild(countryRegion);
  countryDetails.appendChild(countrySubRegion);
  countryDetails.appendChild(countryCapital);
  countryDetails.appendChild(countryTopLevelDomain);
  countryDetails.appendChild(countryCurrency);
  countryDetails.appendChild(countryLanguages);
  countryCard.appendChild(countryDetails);
  countryDetails.appendChild(countryBorder);


  container.appendChild(countryCard);
}












async function getAllCountries() {

  const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
    mode: "cors",
  });
  const data = await response.json();

  homePageBuilder(data);
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

    // console.log("click worked");

    // console.log(this.dataset.region);
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

  homePageBuilder(data);
}

//   search-bar

async function searchByName(searchValue) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${searchValue}`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();

  const container = document.querySelector(".container");

  container.innerHTML = "";

  homePageBuilder(data);
}

const searchBarEntry = document.querySelector("#search-bar");

function getValue() {
  const searchValue = searchBarEntry.value;
  return searchValue;
}

searchBarEntry.addEventListener("keyup", function (e) {
  // e.preventDefault();
  const searchValue = getValue();
  console.log(searchValue);
  searchByName(searchValue);
});

// click on country
