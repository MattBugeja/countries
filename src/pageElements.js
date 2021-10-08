const pageElements = (() => {
  const createFlagDiv = (countryFlag, countryName) => {
    const flag = document.createElement("div");
    flag.classList.add("flag");

    flag.innerHTML = `<img class = "flag-image" src = ${countryFlag} alt=${countryName}>`;

    return flag;
  };

  const createCardDiv = () => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    countryCard.setAttribute("role", "button");
    return countryCard;
  };

  const createNameElement = (countryNameParam) => {
    const countryName = document.createElement("h1");
    countryName.classList.add("country-name");

    countryName.textContent = countryNameParam;
    return countryName;
  };
  const createAttrElement = (attrName, attrQuant) => {
    const attr = document.createElement("p");
    attr.classList.add("attribute");

    attr.innerHTML = `<strong>${attrName}: </strong>${attrQuant}`;

    return attr;
  };

  const createLangElement = (attrName, attrQuant) => {
    const languages = [];

    for (let i = 0; i < attrQuant.length; i++) {
      attrQuant;

      languages.push(` ${attrQuant[i]}`);
    }

    return createAttrElement(attrName, languages);
  };

  const createAttrRow = (numOfAttrs, attrs) => {
    const attrContainer = document.createElement("div");
    attrContainer.classList.add("overview-attributes");

    for (let i = 0; i < numOfAttrs; i++) {
      const attrName = Object.keys(attrs)[i];
      const attrQuant = attrs[attrName];
      const attr = createAttrElement(attrName, attrQuant);
      attrContainer.append(attr);
    }

    return attrContainer;
  };

  const createCommonElements = (countryInfo, index) => {
    const container = document.querySelector(".country-cards-container");
    const countryDetails = document.createElement("div");
    countryDetails.classList.add("details");
    const countryName = pageElements.createNameElement(countryInfo.name(index));
    const countryCard = pageElements.createCardDiv();
    const flag = pageElements.createFlagDiv(
      countryInfo.flag(index),
      countryInfo.name(index)
    );

    const createdElements = [
      container,
      countryDetails,
      countryName,
      countryCard,
      flag,
    ];

    return createdElements;
  };

  return {
    createAttrElement,
    createAttrRow,
    createCardDiv,
    createCommonElements,
    createFlagDiv,
    createLangElement,
    createNameElement,
  };
})();

export { pageElements };
