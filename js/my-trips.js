import { myTripsData } from "./data.js";
import { dqs } from "./functions.js";

const e = myTripsData.trips[0]
let lista = `<div>
              <img src="${e.imgUrl}" alt="imagen 03" class="big-max-width generic-border-radius display-block aspect-ratio-square" />
            </div>
            <div class="flex justify-content-space-between total-width align-items-end">
              <div class="put-all-middle-padding white-background-color flex flex-direction-column normal-gap generic-border-radius-bottom">
                <h3 class="quit-all-margins title-generic-color midle-bold-text">${e.hotelName}</h3>
                <div class="flex fit-content-width total-width super-little-bottom-margin">
                  <div>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half generic-color-orange"></i>
                  </div>
                  <span class="text-generic-color">${e.rating} (${e.reviewsCount} Reviews)</span>
                </div>
                <div class="flex flex-direction-column litte-gap">
                  <p class="quit-all-margins text-color-red">${e.policy}</p>
                  <p class="quit-all-margins generic-color-inputs-text">Check in: ${e.checkIn}</p>
                  <p class="quit-all-margins generic-color-inputs-text">Check out: ${e.checkOut}</p>
                  <p class="quit-all-margins generic-color-inputs-text">${e.stayNights} night stay</p>
                </div>
              </div>
              <div class="flex flex-direction-column litte-gap align-items-end">
                <span class="text-generic-color">${e.rooms} room 2 days</span>
                <div class="flex litte-gap justify-content-end aling-items-center">
                  <span class="text-color-red text-generic-size cross-out-text height-fit-content">${e.currency}${e.oldPrice}</span>
                  <span class="text-generic-color midle-bold-text third-title-size">${e.currency}${e.price}</span>
                </div>
                <p class="quit-all-margins text-generic-color">Includes taxes and fees</p>
                <a href="#" class="put-all-middle-padding blue-generic-color text-color-white generic-border-radius fit-content-width font-family-principal remove-underline">See availability</a>
              </div>
            </div>`

dqs("#viajes").innerHTML = lista
lista = ''
for(const suge of myTripsData.suggestedDestinations){
    lista += `<li class="total-max-width height-auto total-width">
                <img src="${suge.imatgeUrl}" alt="${suge.nom}" class="total-max-width midle-max-height object-fit-cover generic-border-radius aspect-ratio-rectangular-down total-width" />
                <h3 class="little-margins-vertical title-generic-color third-title-size">${suge.nom}</h3>
                <p class="quit-all-margins text-generic-size">${suge.propietatsCount} properties</p>
              </li>`
}

dqs("#sugerencias").innerHTML = lista

dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden")
});