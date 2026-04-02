import { checkoutData } from "./data.js";
import { dqs } from "./functions.js";

let lista = `<h2 class="quit-all-margins fourth-title-size">${checkoutData.room.roomLabel}</h2>
                  <p class="quit-all-margins">${checkoutData.room.summary}</p>`;

dqs("#habitacion").innerHTML += lista;

const e = checkoutData.summaryCard
lista = `<div id="${e.hotelId}">
                <img src="${e.urlImg}" alt="imagen 05" class="total-width generci-border-radius-top display-block aspect-ratio-square object-fit-cover sub02-little-max-height" />
              </div>
              <div class="put-all-middle-padding white-background-color flex flex-direction-column normal-gap generic-border-radius-bottom">
                <h3 class="quit-all-margins title-generic-color">${e.hotelName}</h3>
                <div class="flex fit-content-width total-width middle-bottom-margin">
                  <div>
                  ${e.rating === 4.5 ? `
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half generic-color-orange"></i>
                  </div>` : ''}
                  <span class="text-generic-color">${e.rating} (${e.reviewsCount} Reviews)</span>
                </div>
                <p class="quit-all-margins text-color-red">${e.policy}</p>
                <p class="quit-all-margins generic-color-inputs-text">Check in: ${e.checkIn}</p>
                <p class="quit-all-margins generic-color-inputs-text">Check out: ${e.checkOut}</p>
                <p class="quit-all-margins generic-color-inputs-text">${e.stayNights} night stay</p>
              </div>`;

dqs("#resumen").innerHTML = lista
lista = ''
for (const it of checkoutData.priceDetails.items) {
    lista += `<div class="flex justify-content-space-between aling-items-center generic-color-inputs-text">
                    <p class="quit-all-margins">${it.description}</p>
                    <span>$ ${it.amount}</span>
                  </div>`
}

dqs("#objetos").innerHTML = lista

lista = `<span class="big-bold-text third-title-size text-generic-color">${checkoutData.priceDetails.currency}${checkoutData.priceDetails.total}</span>`

dqs("#precio").innerHTML += lista

lista = ''
for (const poli of checkoutData.policyItems){
    lista += `<li>${poli}</li>`
}

dqs("#policy").innerHTML = lista

dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden")
});