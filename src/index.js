import { apiHandler } from "./APIhandler";
import { utilities } from "./utilities";

import { homePageBuilder } from "./homepagebuilder";

// create = creates something to be appended to DOM
// click = handles buttonclicks of object
// attr = attribute
// attrs = attributes
// display = creates homepage/display page with relevant information

localStorage.getItem("data") === null ? apiHandler.getAllCountriesData() : null;

const ALLCOUNTRIESDATA = apiHandler.callFromLocalStorage();

homePageBuilder(ALLCOUNTRIESDATA);

utilities.byContinentMenuHandler();

utilities.backBtn();

utilities.displaySearchResult();
utilities.themeBtnClick();
