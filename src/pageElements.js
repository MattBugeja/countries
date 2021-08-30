import { countryInfo } from "./countryInfo";

const pageElements = (() => {
  const flagGenerator = (countryFlag, countryName) => {
    const flag = document.createElement("div");
    flag.classList.add("flag");
    flag.innerHTML = `<img class = "flag-image" src = ${countryFlag} alt=${countryName}>`;

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

  const languageAtrributeGenerator = (attributeName, attributeQuantity) => {
    const languages = [];

    for (let i = 0; i < attributeQuantity.length; i++) {
      attributeQuantity;

      languages.push(` ${attributeQuantity[i]["name"]}`);
    }

    return attributeGenerator(attributeName, languages);
  };


  const fullAttributesGenerator = (numOfAttributes, attributes) => {
    const attributesContainer = document.createElement("div");
    attributesContainer.classList.add("overview-attributes");

    for (let i = 0; i < numOfAttributes; i++) {
      const attributeName = Object.keys(attributes)[i];
      const attributeQuantity = attributes[attributeName];
      const attribute = attributeGenerator(attributeName, attributeQuantity);
      attributesContainer.append(attribute);
    }

    return attributesContainer;
  };


  // const commonElements = (index) =>{

  //   const countryName = pageElements.nameGenerator(countryInfo.name(index));
  //   const container = document.querySelector(".container");
  //   const countryCardDetailed = pageElements.cardGenerator();
  //   const countryDetails = document.createElement("div");
  //   countryDetails.classList.add("details");
  //   countryCardDetailed.appendChild(
  //     pageElements.flagGenerator(countryInfo.flag(index), countryInfo.name(index))
  //   );
  
  //   countryDetails.append(countryName);
  // }



  return {
    attributeGenerator,
    cardGenerator,
    // commonElements,
    flagGenerator,
    languageAtrributeHandler: languageAtrributeGenerator,
    nameGenerator,
    fullAttributesGenerator,
  };
})();

export { pageElements };
