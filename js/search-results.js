import { cargarDatos } from "./supabaseClient.js";
import { dqs, checkFocus, checkblur } from "./functions.js";

checkFocus("#checkInDate-input");
checkblur("#checkInDate-input");
checkFocus("#checkOutDate-input");
checkblur("#checkOutDate-input");

dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden");
});

async function cargarBudget(data) {
  let e = searchResultsData.query;
  dqs("#containerTitle").innerHTML = `<h1 class="sub-third-title-size big-bold-text quit-margin-top">${e.where} : ${searchResultsData.totalResults} search results found</h1>`;
  e = searchResultsData.filters.budgetRanges;
  let lista = "";
  for (let i = 0, j = 1; i < e.length; i++, j++) {
    lista += `<li class="flex justify-content-space-between">
                  <div class="flex flex-direction-row-reverse litte-gap">
                    <label for="price0${j}" class="text-generic-color">$ ${e[i].min} - $ ${e[i].max}</label>
                    <input type="checkbox" class="width-icon generic-border-radius border-color-gray-light" id="price0${j}" />
                  </div>
                  <span class="text-generic-color">${e[i].count}</span>
                </li>`;
  }
  dqs("#listaBudge").innerHTML = lista;
}

cargarDatos(cargarBudget,'filtros_presupuesto')

let lista = "";
e = searchResultsData.filters.popularFilters;
for (const popular of e) {
  lista += `<li class="flex justify-content-space-between">
                      <div class="flex litte-gap">
                        <input type="checkbox" class="width-icon" id="${popular.id}" />
                        <label for="${popular.id}" class="text-generic-color">${popular.label}</label>
                      </div>
                      <span class="text-generic-color">${popular.count}</span>
                    </li>`;
}
dqs("#popularfilter").innerHTML = lista;

lista = "";
e = searchResultsData.filters.activities;
for (const acti of e) {
  lista += `<li class="flex justify-content-space-between">
                      <div class="flex litte-gap">
                        <input type="checkbox" class="width-icon" id="${acti.id}" />
                        <label for="${acti.id}" class="text-generic-color">${acti.label}</label>
                      </div>
                      <span class="text-generic-color">${acti.count}</span>
                    </li>`;
}
dqs("#activities").innerHTML = lista;

lista = "";
for (const sear of searchResultsData.results) {
  lista += `<div id="${sear.hotelId}" class="flex aling-items-center border-input-form put-all-middle-padding middle-margins-vertical generic-border-radius normal-gap flex-direction-column-1024px">
                <div>
                  <img src="${sear.imagenUrl}" alt="${sear.name}" class="total-max-width big-max-width generic-border-radius display-block" />
                </div>
                <div class="flex justify-content-space-between total-width position-relative">
                  <div class="flex flex-direction-column big-midle-max-width">
                    <h3 class="quit-margin-top title-generic-color third-title-size">${sear.name}</h3>
                    <div class="flex fit-content-width total-width">
                      <div>
                        <i class="fa-solid fa-star generic-color-orange"></i>
                        <i class="fa-solid fa-star generic-color-orange"></i>
                        <i class="fa-solid fa-star generic-color-orange"></i>
                        <i class="fa-solid fa-star generic-color-orange"></i>
                        <i class="fa-solid fa-star-half generic-color-orange"></i>
                      </div>
                      <span class="text-generic-color">${sear.rating} (${sear.reviewsCount} Reviews)</span>
                    </div>
                    <p class="generic-color-inputs-text midle-bold-text super-little-bottom-margin generic-color-inputs-text">${sear.subTitule}</p>
                    <p class="generic-color-inputs-text quit-margin-top line-heigh-generic sub-text-size ">${sear.description}</p>
                    <a href="product-details.html" class="put-all-middle-padding blue-generic-color text-color-white generic-border-radius fit-content-width font-family-principal remove-underline">See availability</a>
                  </div>
                  <div class="flex flex-direction-column justify-content-space-between align-items-end justify-content-end">${sear.badge ? (sear.porcentaje === 15 ? `<span class="background-color-red text-color-white put-all-little-padding generic-border-radius position-absolute top-0">${sear.badge}</span>` : `<span class="background-color-orange text-color-white put-all-little-padding generic-border-radius position-absolute top-0">${sear.badge}</span>`) : ""}
                    <div class="flex flex-direction-column aling-right litte-gap align-items-end">
                    ${sear.descuentoAnyadido ? `<span class="background-color-green text-color-white put-all-little-padding generic-border-radius fit-content-width">${sear.descuentoAnyadido}% off</span>` : ""}
                      <div class="flex flex-direction-column litte-gap">
                        <span class="text-generic-color">1 room 2 days</span>
                        <div class="flex litte-gap justify-content-end aling-items-center">
                        ${sear.oldPrice ? `<span class="text-color-red text-generic-size cross-out-text height-fit-content">${sear.oldPrice}</span>` : ""}
                          <span class="text-generic-color midle-bold-text third-title-size">${sear.pricePerNight}</span>
                        </div>
                        <p class="text-generic-color quit-all-margins">Includes taxes and fees</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>`;
}

lista += "</div>";
dqs("#resultados").innerHTML = lista;
