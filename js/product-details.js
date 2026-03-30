import { productDetailData } from "./data.js"
import { dqs } from "./functions.js"

let lista = ""
let e = productDetailData.hotel
lista += `<h1 class="quit-margin-top title-generic-color">${e.name}</h1>
                <div class="flex fit-content-width total-width">
                  <div>
                  ${
                    e.rating === 4.5
                      ? `
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half generic-color-orange"></i>`
                      : ""
                  } 
                  </div>
                  <span class="text-generic-color">${e.rating} (${e.reviewsCount} Reviews)</span>
                </div>
                <div class="flex aling-items-center litte-gap">
                  <i class="fa-solid fa-location-dot blue-color-generic"></i>
                  <p class="text-generic-color">${e.address}</p>
                </div>
                <div class="white-background-color generic-middle-buttom-padding generic-border-radius middle-top-margin">
                  <div class="generic-middle-buttom-padding border-input-form-bottom">
                    <div class="put-all-middle-padding">
                      <h3 class="title-generic-color midle-bold-text">Overview</h3>
                      <p class="generic-color-inputs-text line-heigh-generic jump-line">
                        ${e.overviewText}
                      </p>
                    </div>
                  </div>
                </div>`

dqs("#hoteles").innerHTML = lista

lista = ""
e = productDetailData.topFacilities
for (const fali of e){
  lista += `<li class="flex litte-gap aling-items-center fit-content-width">
                    <img src="../../img/icons/${fali.id}.svg"></img>
                    <span class="generic-color-inputs-text">${fali.label}</span>
                  </li>`
}

dqs("#facilidades").innerHTML = lista

lista = ''
e = productDetailData.exploreArea
for (const explore of e) {
  lista += `<li class="flex justify-content-space-between">
                  <div class="flex litte-gap aling-items-center">
                    <i class="fa-solid fa-${explore.icon} ${explore.style === "icon-plane" ? "icon-plane" : ''} width-16px"></i>
                    <span>${explore.name}</span>
                  </div>
                  <span>${explore.distance}</span>
                </li>`
}

dqs("#explorando").innerHTML = lista

e = productDetailData.promoCard
lista = `<div class="flex flex-direction-column justify-content-center big-gap middle-max-width">
                <div class="flex litte-gap third-title-size">
                  <i class="fa-solid fa-plane-up text-color-white icon-plane"></i>
                  <span class="midle-bold-text text-color-white">my Dream Place</span>
                </div>
                <span class="second-title-size text-color-white midle-bold-text">${e.title}<span class="text-color-yelow jump-line">${e.specialWord}</span></span>
              </div>
              <div class="position-relative flex flex-direction-column justify-content-end">
                <img src="/img/main-img/person-details.png" alt="imagen person" class="position-absolute" />
              </div>`

dqs("#promoCard").innerHTML = lista

lista = ''
e = productDetailData.rooms
for (const room of e) {
  lista += `<div class="flex-1">
                <div>
                  <img src="${room.urlImg}" alt="imagen 0${room.numero}" class="total-width object-fit-cover sub02-little-max-height generci-border-radius-top aspect-ratio-super-rectangular display-block" />
                </div>
                <div class="background-color-white put-all-middle-padding generic-border-radius-bottom">
                  <h3 class="quit-all-margins .litte-bold-text">${room.name}</h3>
                  <ul class="quit-point generic-color-inputs-text quit-all-paddins line-height-large">
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-solid fa-briefcase blue-color-generic generic-color-inputs-text"></i>
                      <span>${room.price} sq ft</span>
                    </li>
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-solid fa-water-ladder blue-color-generic generic-color-inputs-text"></i>
                      <span>Sleeps ${room.sleeps}</span>
                    </li>
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-regular fa-thumbs-up blue-color-generic generic-color-inputs-text"></i>
                      <span>${room.beds}</span>
                    </li>
                  </ul>
                  <a href="/pages/principals-pages/checkout.html" class="put-all-middle-padding blue-generic-color text-color-white generic-border-radius buttons-borders font-family-principal remove-underline total-max-width display-block aling-center"
                    >Reserve suite</a
                  >
                </div>
              </div>`
}

dqs("#habitaciones").innerHTML = lista
