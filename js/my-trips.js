import { cargarDatos } from "./supabaseClient.js";
import { dqs } from "./functions.js";

async function cargarMisViajes(data) {
  const contenedor = dqs("#viajes");
  if (!contenedor || data.length === 0) return;

  let lista = "";
  for (const e of data) {
    lista += `<div class="flex litte-gap total-width"> 
            <div>
              <img src="${e.img_url}" alt="${e.hotel_nombre}" class="big-max-width generic-border-radius display-block aspect-ratio-square object-fit-cover" />
            </div>
            <div class="flex justify-content-space-between total-width align-items-end">
              <div class="put-all-middle-padding white-background-color flex flex-direction-column normal-gap generic-border-radius-bottom">
                <h3 class="quit-all-margins title-generic-color midle-bold-text">${e.hotel_nombre}</h3>
                <div class="flex fit-content-width total-width super-little-bottom-margin">
                  <div>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half generic-color-orange"></i>
                  </div>
                  <span class="text-generic-color">${e.puntuacion} (${e.conteo_reviews} Reviews)</span>
                </div>
                <div class="flex flex-direction-column litte-gap">
                  <p class="quit-all-margins text-color-red">${e.politica}</p>
                  <p class="quit-all-margins generic-color-inputs-text">Check in: ${e.check_in}</p>
                  <p class="quit-all-margins generic-color-inputs-text">Check out: ${e.check_out}</p>
                  <p class="quit-all-margins generic-color-inputs-text">${e.noches} night stay</p>
                </div>
              </div>
              <div class="flex flex-direction-column litte-gap align-items-end">
                <span class="text-generic-color">${e.habitaciones} room ${e.noches} days</span>
                <div class="flex litte-gap justify-content-end aling-items-center">
                  <span class="text-color-red text-generic-size cross-out-text height-fit-content">${e.moneda}${e.precio_viejo}</span>
                  <span class="text-generic-color midle-bold-text third-title-size">${e.moneda}${e.precio_actual}</span>
                </div>
                <p class="quit-all-margins text-generic-color">Includes taxes and fees</p>
                <a href="#" class="put-all-middle-padding blue-generic-color text-color-white generic-border-radius fit-content-width font-family-principal remove-underline">See availability</a>
              </div>
            </div>
          </div>`;
  }

  contenedor.innerHTML = lista;
}

cargarDatos(cargarMisViajes, "mis_viajes");

async function cargarMitrips(data) {
  let lista = "";
  for (const suge of data) {
    lista += `<li class="total-max-width height-auto total-width">
                <img src="${suge.imagen_url}" alt="${suge.nombre}" class="total-max-width midle-max-height object-fit-cover generic-border-radius aspect-ratio-rectangular-down total-width" />
                <h3 class="little-margins-vertical title-generic-color third-title-size">${suge.nombre}</h3>
                <p class="quit-all-margins text-generic-size">${suge.propiedades_count} properties</p>
              </li>`;
  }

  dqs("#sugerencias").innerHTML = lista;
}

cargarDatos(cargarMitrips,'destinaciones_destacados')

dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden");
});
