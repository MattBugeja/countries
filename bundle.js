(()=>{"use strict";const e=(()=>{const e=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};return{saveToLocalStorage:e,callFromLocalStorage:()=>{const e=localStorage.getItem("data");return JSON.parse(e)},getAllCountriesData:async()=>{const t=await fetch("https://restcountries.com/v3/all",{mode:"cors"}),n=await t.json();return e("data",n)}}})();let t=e.callFromLocalStorage();const n={borders:e=>t[e].borders,capital:e=>void 0===t[e].capital?"Not Applicable":t[e].capital,filterByContinent:e=>{const n=t.filter((t=>t.region===e));return t=n,n},getCountryIndex:e=>t.findIndex((t=>t.name.official===e)),currency:e=>void 0===t[e].currencies?"Not Applicable":Object.keys(t[e].currencies),flag:e=>t[e].flags[0],filterBySearch:e=>{const n=t.filter((t=>t.name.official.toLowerCase().includes(e.toLowerCase())));return t=n,n},languages:e=>{const n=Object.keys(t[e].languages),o=[];for(let a=0;a<n.length;a++)o.push(t[e].languages[n[a]]);return o},name:e=>t[e].name.official,commonName:e=>t[e].name.common,overview:e=>t[e],population:e=>Number(t[e].population).toLocaleString(),continent:e=>t[e].region,setCountryDataToGlobal:()=>{t=e.callFromLocalStorage()},subRegion:e=>void 0===t[e].subregion?"Not Applicable":t[e].subregion,topLevelDomain:e=>t[e].tld},o=(()=>{const e=(e,t)=>{const n=document.createElement("p");return n.classList.add("attribute"),n.innerHTML=`<strong>${e}: </strong>${t}`,n};return{createAttrElement:e,createAttrRow:(t,n)=>{const o=document.createElement("div");o.classList.add("overview-attributes");for(let a=0;a<t;a++){const t=Object.keys(n)[a],c=n[t],r=e(t,c);o.append(r)}return o},createCardDiv:()=>{const e=document.createElement("div");return e.classList.add("country-card"),e.setAttribute("role","button"),e},createCommonElements:(e,t)=>{const n=document.querySelector(".country-cards-container"),a=document.createElement("div");return a.classList.add("details"),[n,a,o.createNameElement(e.name(t)),o.createCardDiv(),o.createFlagDiv(e.flag(t),e.name(t))]},createFlagDiv:(e,t)=>{const n=document.createElement("div");return n.classList.add("flag"),n.innerHTML=`<img class = "flag-image" src = ${e} alt=${t}>`,n},createLangElement:(t,n)=>{const o=[];for(let e=0;e<n.length;e++)o.push(` ${n[e]}`);return e(t,o)},createNameElement:e=>{const t=document.createElement("h1");return t.classList.add("country-name"),t.textContent=e,t}}})(),a=e.callFromLocalStorage(),c={createBorderRow:e=>{const t=document.createElement("div");t.classList.add("borders-row");const o=document.createElement("p");o.classList.add("borders-title"),o.textContent="Border Countries:";const c=(e=>{let t=(e=>{let t=[];if(void 0===e)t="None";else for(let n=0;n<e.length;n++){const o=a.findIndex((t=>t.cca3===e[n]));t.push(a[o].name.official)}return t})(e);const n=document.createElement("div");n.classList.add("borders-button-Row");const o=document.createElement("P");if(o.textContent="None","None"===t)n.append(o);else for(let e=0;e<t.length;e++){const o=document.createElement("button");o.classList.add("borders-btn"),o.textContent=`${t[e]}`,o.setAttribute("data-btn",`${t[e]}`),n.appendChild(o)}return n})(n.borders(e));return t.appendChild(o),t.appendChild(c),t},borderBtnClick:()=>{document.querySelectorAll(".borders-btn").forEach((e=>e.addEventListener("click",(function(){const t=e.textContent,o=n.getCountryIndex(t);s.clearScreen(),r(o)}))))}};function r(e=0){const[t,a,r,l,d]=o.createCommonElements(n,e);l.classList.add("greybkGround");const i={"Common Name":n.commonName(e),Population:n.population(e),Continent:n.continent(e),"Sub Region":n.subRegion(e),Capital:n.capital(e)},u=o.createAttrRow(5,i),m={"Top Level Domain":n.topLevelDomain(e),Currency:n.currency(e)},p=document.createElement("div");p.classList.add("second-row");const g=o.createAttrRow(2,m),h=o.createLangElement("Languages",n.languages(e)),y=c.createBorderRow(e);s.mediaQuery.matches&&(y.classList.add("borders-row-lg-detailed"),r.classList.add("country-name-lg-detailed"),l.classList.add("country-card-lg-detailed"),l.classList.remove("country-card"),d.classList.add("flag-lg-detailed"),a.classList.add("details-lg-detailed"),u.classList.add("col1-lg-detailed"),p.classList.add("second-row-lg-detailed")),l.appendChild(d),a.append(r),a.appendChild(u),p.append(g),p.append(h),a.appendChild(p),a.appendChild(y),l.appendChild(a),t.appendChild(l),c.borderBtnClick()}const l=e.callFromLocalStorage();function d(e=l){for(let t=0;t<e.length;t++){const[e,a,c,r,l]=o.createCommonElements(n,t);console.log("update2");const d={Population:n.population(t),Continent:n.continent(t),Capital:n.capital(t)},s=3,i=o.createAttrRow(s,d);r.appendChild(l),a.appendChild(c),a.appendChild(i),r.append(a),e.appendChild(r)}s.detailedViewClick()}const s=(()=>{const e=()=>{document.querySelector(".country-cards-container").innerHTML=""},t=()=>{document.querySelectorAll(".continents").forEach((t=>t.addEventListener("click",(function(){const t=this.dataset.continent,o=n.filterByContinent(t);e(),d(o),n.setCountryDataToGlobal()}))))},o=window.matchMedia("(min-width: 900px)");return{byContinentMenuHandler:()=>{document.querySelector(".dropbtn").addEventListener("click",(function(){document.getElementById("myDropdown").classList.toggle("show")})),window.onclick=function(e){if(!e.target.matches(".dropbtn")){const e=document.getElementsByClassName("dropdown-content");let t;for(t=0;t<e.length;t++){let n=e[t];n.classList.contains("show")&&n.classList.remove("show")}}},t()},clearScreen:e,detailedViewClick:()=>{document.querySelectorAll(".country-card").forEach((t=>t.addEventListener("click",(function(){const o=t.querySelector(".country-name").innerText,a=n.getCountryIndex(o);e(),r(a),document.querySelectorAll(".hide-in-detail").forEach((e=>e.style.display="none")),document.querySelector(".js-back-btn").style.display="block"}))))},backBtn:()=>{document.querySelector(".js-back-btn").addEventListener("click",(function(){e(),d(),document.querySelectorAll(".hide-in-detail").forEach((e=>e.style.display="block")),document.querySelector(".js-back-btn").style.display="none"}))},displaySearchResult:()=>{const t=document.querySelector("#search-bar");t.addEventListener("keydown",(function(o){const a=t.value,c=n.filterBySearch(a);e(),d(c),n.setCountryDataToGlobal()}))},themeBtnClick:()=>{const e=document.querySelector(".theme-btn");e.addEventListener("click",(function(){const t=document.querySelector("#active-theme");document.head.removeChild(t);const n=document.createElement("link");n.rel="stylesheet",n.type="text/css","light"===t.getAttribute("data-theme")?(n.setAttribute("data-theme","dark"),n.href="./darktheme.css",e.textContent="Light Mode"):(n.setAttribute("data-theme","light"),n.href="./lighttheme.css",e.textContent="Dark Mode"),n.id="active-theme",document.head.appendChild(n)}))},mediaQuery:o}})();null===localStorage.getItem("data")&&e.getAllCountriesData(),d(e.callFromLocalStorage()),s.byContinentMenuHandler(),s.backBtn(),s.displaySearchResult(),s.themeBtnClick()})();