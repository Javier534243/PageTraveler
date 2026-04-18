import { cargarDatos } from "./supabaseClient.js";
import { dqs, checkFocus, checkblur } from "./functions.js";

checkFocus("#checkInDate-input");
checkblur("#checkInDate-input");
checkFocus("#checkOutDate-input");
checkblur("#checkOutDate-input");

const destinacion = dqs("#destinacionsDestacades");
async function cargarDestinaciones(data) {
  let lista = '<ul class="flex quit-all-paddins normal-gap quit-point wrap-media-1024px justify-content-center">';

  for (const des of data) {
    lista += `<li class="total-width" id="${des.id}">
                    <img src="${des.imagen_url}" alt="${des.nombre}" class="total-max-width object-fit-cover total-width" />
                    <h3 class="little-margins-vertical title-generic-color third-title-size">${des.nombre}</h3>
                    <p class="quit-all-margins text-generic-size">${des.propiedades_count} properties</p>
                  </li>`;
  }

  lista += "</ul>";

  destinacion.innerHTML = lista;
}

cargarDatos(cargarDestinaciones, "destinaciones_destacados");

const secionOfertas = dqs("#secionOfertas");
async function cargarOfertas(data) {
  let lista = '<ul class="flex normal-gap quit-point quit-all-paddins wrap-media-1024px justify-content-center">';
  for (const ofer of data) {
    lista += `<li class="total-width" id="${ofer.id}">
              <div class="position-relative over-flow-hidden">
                <img src="${ofer.imagen_url}" alt="${ofer.titulo}" class="total-max-width midle-max-height object-fit-cover total-width"/>
                <div class="position-absolute total-width total-height generic-border-radius top-0 bottom-0 left-0 right-0 flex align-items-end">
                  <div class="position-relative z-index-increase text-color-white put-all-middle-padding">
                    <h3 class="big-bold-text third-title-size">${ofer.titulo}</h3>
                    <p class="line-heigh-generic text-generic-size">${ofer.descripcion}</p>
                  </div>
                </div>
              </div>
            </li>`;
  }
  lista += "</ul>";
  secionOfertas.innerHTML += lista;
}

cargarDatos(cargarOfertas, "ofertas");

const hoteles = dqs("#section-hoteles-populares");
async function cargarHoteles(data) {
  let lista = '<ul class="flex quit-all-paddins normal-gap quit-point wrap-media-1024px justify-content-center">';
  for (const hotel of data) {
    lista += `<li class="total-max-width total-width" id="${hotel.id}">
                <img src="${hotel.imagen_url}" alt="${hotel.nombre}" class="total-max-width midle-max-height total-width" />
                <h3 class="little-margins-vertical title-generic-color third-title-size">${hotel.nombre}</h3>
                <p class="quit-all-margins text-generic-size">${hotel.propiedades_count} properties</p>
              </li>`;
  }

  lista += "</ul>";
  hoteles.innerHTML = lista;
}

cargarDatos(cargarHoteles, "hoteles_populares")

dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden")
});

dqs("#start").addEventListener("click", function() {
  dqs("#ventana-modal").classList.add("display-hidden")
  dqs("body").classList.remove("over-flow-hidden")
})
