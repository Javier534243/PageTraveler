import { cargarDatos } from "./supabaseClient.js";
import { dqs, checkFocus, checkblur } from "./functions.js";

checkFocus("#checkInDate-input");
checkblur("#checkInDate-input");
checkFocus("#checkOutDate-input");
checkblur("#checkOutDate-input");

async function cargarHotelDetail(data) {
  let lista = "";
  lista += `<h1 class="quit-margin-top title-generic-color">${data.nombre}</h1>
                <div class="flex fit-content-width total-width">
                  <div>
                  ${
                    data.rating === 4.5
                      ? `
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half generic-color-orange"></i>`
                      : ""
                  } 
                  </div>
                  <span class="text-generic-color">${data.rating} (${data.reviews_count} Reviews)</span>
                </div>
                <div class="flex aling-items-center litte-gap">
                  <i class="fa-solid fa-location-dot blue-color-generic"></i>
                  <p class="text-generic-color">${data.direccion}</p>
                </div>
                <div class="white-background-color generic-middle-buttom-padding generic-border-radius middle-top-margin">
                  <div class="generic-middle-buttom-padding border-input-form-bottom">
                    <div class="put-all-middle-padding">
                      <h3 class="title-generic-color midle-bold-text">Overview</h3>
                      <p class="generic-color-inputs-text line-heigh-generic jump-line">
                        ${data.resumen_texto}
                      </p>
                    </div>
                  </div>
                </div>`;

  dqs("#hoteles").innerHTML = lista;
}

cargarDatos(cargarHotelDetail,'hotel_detalles')

async function cargarFacilidades(data) {
  const contenedor = dqs("#facilidades");

  let lista = "";
  for (const fali of data) {
    lista += `<li class="flex litte-gap aling-items-center fit-content-width">
                    <img src="../../img/icons/${fali.id}.svg" alt="${fali.nombre}"></img>
                    <span class="generic-color-inputs-text">${fali.nombre}</span>
                  </li>`;
  }

  contenedor.innerHTML = lista;
}
cargarDatos(cargarFacilidades, 'servicios');

async function cargarExplorarArea(data) {
  const contenedor = dqs("#explorando");

  let lista = "";
  for (const explore of data) {
    const claseExtra = explore.estilo === "icon-plane" ? "icon-plane" : "";
    
    lista += `<li class="flex justify-content-space-between">
                  <div class="flex litte-gap aling-items-center">
                    <i class="fa-solid fa-${explore.icono} ${claseExtra} width-16px"></i>
                    <span>${explore.nombre}</span>
                  </div>
                  <span>${explore.distancia}</span>
                </li>`;
  }

  contenedor.innerHTML = lista;
}

cargarDatos(cargarExplorarArea, 'explorar_area');

async function cargarPromoCard(data) {
  const contenedor = dqs("#promoCard");
  if (!contenedor || data.length === 0) return;

  const promo = data[0];

  const tituloConBr = promo.titulo.replace(/\n/g, '<br>');

  let html = `<div class="flex flex-direction-column justify-content-center big-gap middle-max-width">
                <div class="flex litte-gap third-title-size">
                  <i class="fa-solid fa-plane-up text-color-white icon-plane"></i>
                  <span class="midle-bold-text text-color-white">my Dream Place</span>
                </div>
                <span class="second-title-size text-color-white midle-bold-text">
                    ${tituloConBr}
                    <span class="text-color-yelow jump-line">${promo.palabra_especial}</span>
                </span>
              </div>
              <div class="position-relative flex flex-direction-column justify-content-end">
                <img src="/img/main-img/person-details.png" alt="imagen person" class="position-absolute" />
              </div>`;

  contenedor.innerHTML = html;
}

cargarDatos(cargarPromoCard, 'promociones');


async function cargarHabitaciones(data) {
  const contenedor = dqs("#habitaciones");

  let lista = "";
  for (const room of data) {
    lista += `<div class="flex-1">
                <div>
                  <img src="${room.url_imagen}" alt="imagen 0${room.numero}" class="total-width object-fit-cover sub02-little-max-height generci-border-radius-top aspect-ratio-super-rectangular display-block" />
                </div>
                <div class="background-color-white put-all-middle-padding generic-border-radius-bottom">
                  <h3 class="quit-all-margins .litte-bold-text">${room.nombre}</h3>
                  <ul class="quit-point generic-color-inputs-text quit-all-paddins line-height-large">
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-solid fa-briefcase blue-color-generic generic-color-inputs-text"></i>
                      <span>${room.precio} sq ft</span>
                    </li>
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-solid fa-water-ladder blue-color-generic generic-color-inputs-text"></i>
                      <span>Sleeps ${room.capacidad}</span>
                    </li>
                    <li class="flex litte-gap aling-items-center">
                      <i class="fa-regular fa-thumbs-up blue-color-generic generic-color-inputs-text"></i>
                      <span>${room.camas}</span>
                    </li>
                  </ul>
                  <a href="/pages/principals-pages/checkout.html" class="put-all-middle-padding blue-generic-color text-color-white generic-border-radius buttons-borders font-family-principal remove-underline total-max-width display-block aling-center"
                    >Reserve suite</a
                  >
                </div>
              </div>`;
  }

  contenedor.innerHTML = lista;
}

cargarDatos(cargarHabitaciones, 'habitaciones');


dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden");
});
