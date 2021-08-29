(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Nunito Sans", sans-serif;\n  background-color: hsl(0, 0%, 98%);\n}\n\n.container1 {\n  padding: 16px 20px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n  row-gap: 40px;\n  background-color: hsl(0, 0%, 98%);\n  padding-top: 40px;\n}\n\n.country-card {\n  height: 100%;\n  width: 80%;\n  background-color: white;\n  border-radius: 5px;\n}\n\n.flag {\n  height: 50%;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.flag-image {\n  width: 100%;\n}\n\n.country-info {\n  height: 50%;\n}\n\n.country-name {\n  font-weight: bold;\n  padding-bottom: 16px;\n  font-size: 16px;\n}\n\n.details {\n  display: flex;\n  flex-direction: column;\n  padding: 16px 16px 30px 18px;\n  font-size: 14px;\n}\n\n.greybkGround {\n  background-color: hsl(0, 0%, 98%);\n}\n\n.attribute {\n  line-height: 2;\n}\n\n/* Dropdown Menu */\n\n/* Dropdown Button */\n.dropbtn {\n  background-color: white;\n  color: black;\n  padding: 16px;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n  width: 100%;\n  text-align: left;\n}\n\n/* Dropdown button on hover & focus */\n.dropbtn:hover,\n.dropbtn:focus {\n  background-color: white;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  width: 50%;\n  margin-top: 34px;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  margin-top: 5px;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {\n  background-color: hsl(0, 0%, 98%);\n}\n\n/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n.show {\n  display: block;\n}\n\n/* search Bar */\n\n#search-bar {\n  height: 50px;\n  width: 100%;\n}\n\n.second-row {\n  padding-top: 17px;\n}\n\n.borders-row {\n  padding-top: 16px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.borders-button-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.borders-btn {\n  border: 0;\n  height: 48px;\n  margin: 5px;\n  padding: 10px 15px;\n  box-shadow: 1px 1px 5px hsl(0, 59%, 32%);\n  background-color: white;\n}\n\n.borders-title {\n  font-weight: 900;\n}\n\n.hello {\n  color: red;\n}\n',""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(h)):e.push({identifier:u,updater:o(h,r),references:1}),i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{const n=(()=>{const n=n=>{localStorage.setItem("data",JSON.stringify(n))};return{saveToLocal:n,callFromLocal:()=>{const n=localStorage.getItem("data");return JSON.parse(n)},getAllCountries:async()=>{const e=await fetch("https://restcountries.eu/rest/v2/all",{mode:"cors"}),t=await e.json();return n(t)}}})(),e=n.callFromLocal(),r=n=>e[n].borders,o=n=>e[n].capital,a=n=>e.findIndex((e=>e.name===n)),i=n=>e[n].currencies,d=n=>e[n].flag,c=n=>e[n].languages,s=n=>e[n].name,l=n=>e[n].nativeName,u=n=>Number(e[n].population).toLocaleString(),p=n=>e[n].region,h=n=>e[n].subregion,f=n=>e[n].topLevelDomain,m=(()=>{const n=(n,e)=>{const t=document.createElement("p");return t.classList.add("attribute"),t.innerHTML=`<strong>${n}: </strong>${e}`,t};return{detailedPageGenerator:(n,e)=>{let t=0;for(;t<e.length;t++)n.appendChild(e[t]);return n},homePageGenerator:(n,e)=>{let t=0;for(;t<e.length;t++)n.appendChild(e[t]);return n},attributeGenerator:n,cardGenerator:()=>{const n=document.createElement("div");return n.classList.add("country-card"),n.setAttribute("role","button"),n},flagGenerator:(n,e)=>{const t=document.createElement("div");return t.classList.add("flag"),t.innerHTML=`<img class = "flag-image" src = ${n} alt=${e}>`,t},languageAtrributeHandler:(e,t)=>{const r=[];for(let n=0;n<t.length;n++)r.push(` ${t[n].name}`);return n(e,r)},nameGenerator:n=>{const e=document.createElement("h1");return e.classList.add("country-name"),e.textContent=n,e}}})(),g=n.callFromLocal(),b=(()=>{const n=n=>{const e=[];for(let t=0;t<n.length;t++){const r=g.findIndex((e=>e.alpha3Code===n[t]));e.push(g[r].name)}return e};return{borderNames:n,borderCountriesBtnsGenerator:e=>{let t=n(e);const r=document.createElement("div");r.classList.add("borders-button-Row");const o=document.createElement("P");if(o.textContent="None",0===t.length)r.append(o);else for(let n=0;n<t.length;n++){const e=document.createElement("button");e.classList.add("borders-btn"),e.textContent=`${t[n]}`,e.setAttribute("data-btn",`${t[n]}`),r.appendChild(e)}return r}}})();var x=t(379),v=t.n(x),w=t(795),y=t.n(w),C=t(569),L=t.n(C),S=t(565),E=t.n(S),k=t(216),G=t.n(k),T=t(589),A=t.n(T),M=t(426),N={};function q(n,e=!1,t=0){let a;for(e?a=t+1:(t=0,a=n.length);t<a;t++){const n=document.querySelector(".container"),a=s(t),g=o(t),x=i(t)[0].name,v=d(t),w=c(t),y=l(t),C=u(t),L=p(t),S=h(t),E=f(t),k=r(t),G=m.nameGenerator(a),T=m.cardGenerator();e&&T.classList.add("greybkGround");const A=document.createElement("div");A.classList.add("details");const M=m.attributeGenerator("Native Name:",y),N=m.attributeGenerator("Population",C),q=m.attributeGenerator("Region",L),I=m.attributeGenerator("Sub Region",S),P=m.attributeGenerator("Capital",g),D=document.createElement("div");D.classList.add("second-row");const H=m.attributeGenerator("Top Level Domain",E);D.appendChild(H);const F=m.attributeGenerator("Currency",x);D.appendChild(F);const $=m.languageAtrributeHandler("Languages",w);D.appendChild($);const B=document.createElement("div");B.classList.add("borders-row");const j=document.createElement("p");if(j.classList.add("borders-title"),j.textContent="Border Countries:",B.appendChild(j),e){const n=b.borderCountriesBtnsGenerator(k);B.appendChild(n)}if(T.appendChild(m.flagGenerator(v,a)),e){const n=[G,M,N,q,I,P,D,B],e=m.detailedPageGenerator(A,n);T.appendChild(e)}else{const n=[G,N,q,P],e=m.homePageGenerator(A,n);T.appendChild(e)}n.appendChild(T)}e?I.borderCountriesSelector():I.detailedCountryView()}N.styleTagTransform=A(),N.setAttributes=E(),N.insert=L().bind(null,"head"),N.domAPI=y(),N.insertStyleElement=G(),v()(M.Z,N),M.Z&&M.Z.locals&&M.Z.locals;const I=(()=>{const e=n.callFromLocal(),t=()=>{document.querySelector(".container").innerHTML=""};return{borderCountriesSelector:()=>{document.querySelectorAll(".borders-btn").forEach((n=>n.addEventListener("click",(function(){const r=n.textContent,o=a(r);t(),q(e,!0,o)}))))},dropdownMenu:()=>{document.querySelector(".dropbtn").addEventListener("click",(function(){document.getElementById("myDropdown").classList.toggle("show")})),window.onclick=function(n){if(!n.target.matches(".dropbtn")){const n=document.getElementsByClassName("dropdown-content");let e;for(e=0;e<n.length;e++){let t=n[e];t.classList.contains("show")&&t.classList.remove("show")}}},document.querySelectorAll(".regions").forEach((n=>n.addEventListener("click",(function(){!async function(n){const e=await fetch(`https://restcountries.eu/rest/v2/region/${n}`,{mode:"cors"}),t=await e.json();document.querySelector(".container").innerHTML="",q(t)}(this.dataset.region)}))))},clearScreen:t,detailedCountryView:()=>{document.querySelectorAll(".country-card").forEach((e=>e.addEventListener("click",(function(){const r=e.querySelector(".country-name").innerText,o=a(r);t(),q(n.callFromLocal(),!0,o)}))))},home:()=>{document.querySelector(".home").addEventListener("click",(function(){t(),q(e)}))}}})();q(n.callFromLocal()),I.dropdownMenu(),I.home(),n.getAllCountries()})()})();