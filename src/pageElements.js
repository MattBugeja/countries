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
  
      if (borderlist.length === 0) {
        bordersButtonRow.append(noBorders);
      } else {
        for (let i = 0; i < borderlist.length; i++) {
          const bordersBtn = document.createElement("button");
          bordersBtn.classList.add("borders-btn");
          bordersBtn.textContent = `${borderlist[i]}`;
  
          bordersBtn.setAttribute("data-btn", `${borderlist[i]}`);
          bordersButtonRow.appendChild(bordersBtn);
        }
      }
  
      return bordersButtonRow;
    };
  
    const languageAtrributeGenerator = (attributeName, attributeQuantity) => {
      const languages = [];
  
      for (let i = 0; i < attributeQuantity.length; i++) {
        attributeQuantity;
  
        languages.push(` ${attributeQuantity[i]["name"]}`);
      }
  
      return attributeGenerator(attributeName, languages);
    };
  
    const homePageGenerator = (
      countryDetails,
      overviewList,
    ) => {

      let i = 0;
  
      for (i; i < overviewList.length; i++) {
        countryDetails.appendChild(overviewList[i]);
      }
  
      return countryDetails;
    };


    const detailedPageGenerator = (
    
          countryDetails,
        //   overviewList,
          detailedList
        ) => {
        //   let list = "";
        //   detailedView ? (list = detailedList) : (list = overviewList);
          let i = 0;
      
          for (i; i < detailedList.length; i++) {
            countryDetails.appendChild(detailedList[i]);
          }
      
          return countryDetails;
        };
    










  
    return {
    detailedPageGenerator,
      homePageGenerator,
      attributeGenerator,
      borderingLandsBtns: borderingBtnsGenerator,
      cardGenerator,
      flagGenerator,
      languageAtrributeHandler: languageAtrributeGenerator,
      nameGenerator,
    };
  })();


  export {pageElements}