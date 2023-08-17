import { hotelsRequest } from "./hotels.js";

/*-------NavBar--------*/

/*---h1---*/ 
const filterContainer = document.createElement("div");
const h1 = document.createElement("h1");
const header = document.querySelector("header");
const filterGrid = document.createElement("div");

const select = document.createElement("select");
const selectCountries = document.createElement("select");
selectCountries.className = "select-countries filter-icon"
selectCountries.id = "selected-country"
const inputDateFrom = document.createElement("input");
const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1;
if (month < 10) {
  month = '0' + month;
}
let day = today.getDate();
if (day < 10) {
  day = '0' + day;
}
inputDateFrom.setAttribute('min', `${year},${month},${day}`) // Format date 
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
clearButton.addEventListener("click", clearFilters);


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
optionOne.value = "1";
const optionTwo = document.createElement("option");
optionTwo.innerText = "$$";
optionTwo.value = "2";
const optionThree = document.createElement("option");
optionThree.innerText = "$$$";
optionThree.value = "3";
const optionFour = document.createElement("option");
optionFour.innerText = "$$$$";
optionFour.value = "4";

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
foundContent.id = "content-text"

const selectedElement = document.getElementById("selected-country");
const selectedValueText = document.getElementById("content-text");

selectedElement.addEventListener('change', (e) => {
    // Get the selected value
    const selectedValue = e.target.value;
    // Update the text content of the text element
    foundContent.innerText = `All sizes hotels of all category prices, in ${selectedValue}.`;
  });

foundContainer.appendChild(foundContent);

/*-------NavBar--------*/

/*-------Main--------*/

const main = document.querySelector("main");
const hotelsContainer = document.createElement("section");
hotelsContainer.className = "hotels-container";
hotelsContainer.id = "hotels-card"

main.appendChild(hotelsContainer);



/*---Cards & Filter Logic---*/


// Select the card container
const hotelCards = document.getElementById("hotels-card");
let data = [];

 const getHotels = async () => {
  const respuesta = await hotelsRequest();
    data = await respuesta.json();
    return data
}

const hotels = await getHotels()


// Inside your script after the renderHotelCards function

// Event listeners for filter elements
selectCountries.addEventListener('change',applyFilters);
inputDateFrom.addEventListener('change', applyFilters);
inputDateTo.addEventListener('change', applyFilters);
selectPrices.addEventListener('change', applyFilters);
selectSizes.addEventListener('change', applyFilters);

// Apply filters function
function applyFilters() {
    const selectedCountry = selectCountries.value;
    const dateFrom = new Date(inputDateFrom.value) ;
    const dateTo = new Date(inputDateTo.value);
    const selectedPrice = selectPrices.value;
    const selectedSize = selectSizes.value;


    

    const dateFromSelected = new Date(dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000); // Default to 0 if no date selected
    
    const dateToSelected = new Date(dateTo.getTime() + dateTo.getTimezoneOffset() * 60000);
    
    const dateMls = dateToSelected - dateFromSelected;
   
    

    // Filter the hotel data based on the selected criteria
    const filteredData = hotels.filter(hotel => {

      
      
        // Implement your filtering logic here
        // Example: Return true if the hotel meets the selected criteria
        return (
          (selectedCountry === 'all' || hotel.country.toLowerCase() == selectedCountry.toLowerCase()) &&
          dateMls >= hotel.availabilityTo &&
          (selectedPrice === 'all' || hotel.price == selectedPrice)/* &&
          (selectedSize === 'all' || hotel.size.toLowerCase() == selectedSize.toLowerCase())*/
            // Other filtering conditions based on date, price, and size
        );
    });
    
    // Call the render function with filtered data
    filteredData.length > 0 ? 
    renderHotelCards(filteredData) :
    console.log("No existen hoteles con estas caracterisitcas");
}

// Update renderHotelCards to accept filtered data and render cards
async function renderHotelCards(filteredData) {
    

    hotelCards.innerHTML = "";
    

    filteredData.forEach((hotel) => {
        // ... your card rendering logic
        const cardHotel = document.createElement("article");
        cardHotel.className = "card";
        hotelCards.appendChild(cardHotel);

        const imagenHotel = document.createElement("img");
        imagenHotel.setAttribute("src", hotel.photo);
        imagenHotel.setAttribute("alt", hotel.name);
        imagenHotel.className = "hotel-image";
        cardHotel.appendChild(imagenHotel);

        const nombreHotel = document.createElement("h2");
        nombreHotel.innerText = hotel.name;
        nombreHotel.className = "hotel-name";
        cardHotel.appendChild(nombreHotel);

        const sectionInfoHotel = document.createElement("section");
        sectionInfoHotel.className = "hotel-info"; 
        cardHotel.appendChild(sectionInfoHotel);

        const divInfoCountry = document.createElement("div");
        divInfoCountry.className = "hotel-country"
        sectionInfoHotel.appendChild(divInfoCountry);

        const countryFlag = document.createElement("img");
        countryFlag.className = "country-flag";
        /*AÑADIR BANDERA DEL PAIS*/

        const country = document.createElement("p");
        country.className = "country"
        country.innerText = hotel.country;
        divInfoCountry.appendChild(country);

        const divInfoHotel = document.createElement("div");
        divInfoHotel.className = "div-hotel-info";
        sectionInfoHotel.appendChild(divInfoHotel);

        const hotelRooms = document.createElement("p");
        hotelRooms.className = "hotel-rooms";
        hotelRooms.innerText = hotel.rooms + " rooms" + " -";
        divInfoHotel.appendChild(hotelRooms);

        const hotelPrice = document.createElement("p");
        hotelPrice.className = "hotel-price";
        hotelPrice.innerText = "$".repeat(hotel.price);
        divInfoHotel.appendChild(hotelPrice);

        const bookIt = document.createElement("button");
        bookIt.innerText = "Book it!";
        bookIt.className = "button-book-it"
        cardHotel.appendChild(bookIt);
    });
}

function clearFilters() {
  selectCountries.value = 'all';
  inputDateFrom.value = '';
  inputDateTo.value = '';
  selectPrices.value = 'all';
  selectSizes.value = 'all';

  applyFilters(); // Apply filters again to show all hotels
}


renderHotelCards(hotels);

/*---Cards---*/


/*-------Main--------*/

