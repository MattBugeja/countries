import { apiHandler } from "./APIhandler";
import { utilities } from "./utilities";

import { pageBuilder } from "./pagebuilder";
import { countryInfo } from "./countryInfo";
import { homePageBuilder } from "./homepagebuilder";


localStorage.getItem("data") === null ? apiHandler.getAllCountries() : null;

const ALLCOUNTRIESDATA = apiHandler.callFromLocal();


// pageBuilder(ALLCOUNTRIESDATA);

homePageBuilder(ALLCOUNTRIESDATA)

utilities.byRegionMenuHandler();

utilities.home();
