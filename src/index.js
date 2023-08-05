/*-------NavBar--------*/

/*---h1---*/ 
const filterContainer = document.createElement("div");
const h1 = document.createElement("h1");
const header = document.querySelector("header");
const filterGrid = document.createElement("div");

const select = document.createElement("select");
const selectCountries = document.createElement("select");
selectCountries.className = "select-countries filter-icon"
const inputDateFrom = document.createElement("input");
inputDateFrom.type = "date";
inputDateFrom.className = "input-dateFrom filter-icon";
const inputDateTo = document.createElement("input");
inputDateTo.type = "date";
inputDateTo.className = "input-dateTo filter-icon";
const selectPrices = document.createElement("select");
selectPrices.className = "selectPrices filter-icon";
const selectSizes = document.createElement("select");
selectSizes.className = "selectSizes filter-icon";
const clearButton = document.createElement("button");
clearButton.className = "clear-button";


h1.className = "title"
h1.innerText = "Book it!"
filterContainer.className = "filter"
filterGrid.className = "filter-grid"

header.appendChild(h1)
/*---h1---*/ 

header.appendChild(filterContainer)  

/*---filter-container---*/

filterContainer.appendChild(filterGrid)

filterGrid.appendChild(selectCountries)

const optionAll = document.createElement("option");
optionAll.innerText = "All countries";
optionAll.value = "all";
const optionArgentina = document.createElement("option");
optionArgentina.innerText = "Argentina";
optionArgentina.value = "argentina";
const optionBrasil = document.createElement("option");
optionBrasil.innerText = "Brasil";
optionBrasil.value = "brasil";
const optionUruguay = document.createElement("option");
optionUruguay.innerText = "Uruguay";
optionUruguay.value = "uruguay";
const optionChile  = document.createElement("option");
optionChile.innerText = "Chile";
optionChile.value = "chile";

selectCountries.appendChild(optionAll);
selectCountries.appendChild(optionArgentina);
selectCountries.appendChild(optionBrasil);
selectCountries.appendChild(optionUruguay);
selectCountries.appendChild(optionChile);

filterGrid.appendChild(selectPrices);

const optionAllPrices = document.createElement("option");
optionAllPrices.innerText = "All prices";
optionAllPrices.value = "all";
const optionOne = document.createElement("option");
optionOne.innerText = "$";
optionOne.value = "one";
const optionTwo = document.createElement("option");
optionTwo.innerText = "$$";
optionTwo.value = "two";
const optionThree = document.createElement("option");
optionThree.innerText = "$$$";
optionThree.value = "three";
const optionFour = document.createElement("option");
optionFour.innerText = "$$$$";
optionFour.value = "four";

selectPrices.appendChild(optionAllPrices);
selectPrices.appendChild(optionOne);
selectPrices.appendChild(optionTwo);
selectPrices.appendChild(optionThree);
selectPrices.appendChild(optionFour);

filterGrid.appendChild(selectSizes);

const optionAllSizes = document.createElement("option");
optionAllSizes.innerText = "All sizes";
optionAllSizes.value = "all";
const optionSmall = document.createElement("option");
optionSmall.innerText = "Small";
optionSmall.value = "small";
const optionMedium = document.createElement("option");
optionMedium.innerText = "Medium";
optionMedium.value = "medium";
const optionLarge = document.createElement("option");
optionLarge.innerText = "Large";
optionLarge.value = "large";

selectSizes.appendChild(optionAllSizes);
selectSizes.appendChild(optionSmall);
selectSizes.appendChild(optionMedium);
selectSizes.appendChild(optionLarge);

filterGrid.appendChild(inputDateFrom)
filterGrid.appendChild(inputDateTo)

filterGrid.appendChild(clearButton);
clearButton.innerText = "Clear";

/*---filter-container---*/


const foundContainer = document.createElement("div");
foundContainer.className = "found-container";

header.appendChild(foundContainer);

const foundTitle = document.createElement("p");
foundTitle.className = "found-title";
foundTitle.innerText = "We have found for you...";

foundContainer.appendChild(foundTitle);

const foundContent = document.createElement("p");
foundContent.className = "found-content";
foundContent.innerText = `All sizes hotels of all category prices, in ${"x"}.`

foundContainer.appendChild(foundContent);







/*-------NavBar--------*/