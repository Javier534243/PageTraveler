import { productDetailData } from "./data.js";
import { dqs } from "./functions.js";

let lista = "";
let e = productDetailData.hotel;
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
                      <p class="generic-color-inputs-text line-heigh-generic">
                        ${e.overviewText}
                      </p>
                    </div>
                  </div>
                </div>`;

dqs("#hoteles").innerHTML = lista;

lista = "";
