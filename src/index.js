import { apiHandler } from "./APIhandler";
import { utilities } from "./utilities";

import { pageBuilder } from "./pagebuilder";
import { countryInfo } from "./countryInfo";



apiHandler.getAllCountries();

const data = apiHandler.callFromLocal()


pageBuilder(data)


utilities.byRegionMenuHandler()

utilities.home();



