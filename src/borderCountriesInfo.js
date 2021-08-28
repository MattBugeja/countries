
import { apiHandler } from "./APIhandler";

const data = apiHandler.callFromLocal()
  
  const borderCountries = (() => {
    

  const borderNames = (borders) => {
    const borderCountries = [];


    for (let i = 0; i < borders.length; i++) {
     const country = data.findIndex((country) => country.alpha3Code === borders[i]);

      borderCountries.push(data[country]["name"]);
    }
    return borderCountries;
  };




const borderCountriesBtnsGenerator = (borders) => {

  let borderCountries = borderNames(borders)
  
  const bordersButtonRow = document.createElement("div");
  bordersButtonRow.classList.add("borders-button-Row");

  const noBorders = document.createElement("P");
  noBorders.textContent = "None";



  if (borderCountries.length === 0) {
    bordersButtonRow.append(noBorders);
  } else {
    for (let i = 0; i < borderCountries.length; i++) {
      const bordersBtn = document.createElement("button");
      bordersBtn.classList.add("borders-btn");
      bordersBtn.textContent = `${borderCountries[i]}`;

      bordersBtn.setAttribute("data-btn", `${borderCountries[i]}`);
      bordersButtonRow.appendChild(bordersBtn);
    }
  }

  console.log("buttonsGen")
  return bordersButtonRow
  };


  return{borderNames, borderCountriesBtnsGenerator}

  })()

  export {borderCountries}
