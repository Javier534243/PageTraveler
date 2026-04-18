import { cargarDatos } from "./supabaseClient.js";
import { dqs } from "./functions.js";

async function cargarCheckoutHabitacion(data) {
  const contenedor = dqs("#habitacion");

  const info = data[0]; 

  let html = `<h2 class="quit-all-margins fourth-title-size">${info.etiqueta_habitacion}</h2>
              <p class="quit-all-margins">${info.resumen}</p>`;

  contenedor.innerHTML += html;
}

cargarDatos(cargarCheckoutHabitacion, 'checkout_habitacion');


async function cargarResumenCheckout(data) {
  const contenedor = dqs("#resumen");
  if (!contenedor || data.length === 0) return;

  const e = data[0];

  let lista = `<div id="${e.id}">
                <img src="${e.url_imagen}" alt="${e.hotel_nombre}" class="total-width generci-border-radius-top display-block aspect-ratio-square object-fit-cover sub02-little-max-height" />
              </div>
              <div class="put-all-middle-padding white-background-color flex flex-direction-column normal-gap generic-border-radius-bottom">
                <h3 class="quit-all-margins title-generic-color">${e.hotel_nombre}</h3>
                <div class="flex fit-content-width total-width middle-bottom-margin">
                  <div>
                  ${e.puntuacion == 4.5 ? `
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star generic-color-orange"></i>
                    <i class="fa-solid fa-star-half-stroke generic-color-orange"></i>
                  ` : ''}
                  </div>
                  <span class="text-generic-color">${e.puntuacion} (${e.conteo_reviews} Reviews)</span>
                </div>
                <p class="quit-all-margins text-color-red">${e.politica}</p>
                <p class="quit-all-margins generic-color-inputs-text">Check in: ${e.check_in}</p>
                <p class="quit-all-margins generic-color-inputs-text">Check out: ${e.check_out}</p>
                <p class="quit-all-margins generic-color-inputs-text">${e.noches} night stay</p>
              </div>`;

  contenedor.innerHTML = lista;
}

cargarDatos(cargarResumenCheckout, 'checkout_resumen');

// Función para los conceptos individuales (lista de precios)
async function cargarPrecioItems(data) {
  const contenedor = dqs("#objetos");
  if (!contenedor) return;

  let html = "";
  for (const it of data) {
    html += `<div class="flex justify-content-space-between aling-items-center generic-color-inputs-text">
                <p class="quit-all-margins">${it.descripcion}</p>
                <span>$ ${it.monto}</span>
              </div>`;
  }
  contenedor.innerHTML = html;
}

async function cargarPrecioTotal(data) {
  const contenedor = dqs("#precio");
  if (!contenedor || data.length === 0) return;

  const info = data[0]; 
  let html = `<span class="big-bold-text third-title-size text-generic-color">
                ${info.moneda}${info.total}
              </span>`;

  contenedor.innerHTML += html;
}

cargarDatos(cargarPrecioItems, 'checkout_precio_items');
cargarDatos(cargarPrecioTotal, 'checkout_precio_total');


async function cargarPoliticas(data) {
  const contenedor = dqs("#policy");
  if (!contenedor) return;

  let lista = "";
  for (const poli of data) {
    lista += `<li>${poli.texto}</li>`;
  }

  contenedor.innerHTML = lista;
}

cargarDatos(cargarPoliticas, 'checkout_politicas');


dqs("#imagen-menu").addEventListener("click", function () {
  dqs("#menu").classList.toggle("display-hidden")
});

function mostrarIcono(check) {
  if (dqs(check).classList.contains("display-hidden")) {
    dqs(check).classList.remove("display-hidden")
  }
  
}

function ocultarIcono(check) {
  if (!dqs(check).classList.contains("display-hidden")) {
    dqs(check).classList.add("display-hidden")
  }
}

dqs("#button-submit").addEventListener("click", function(e) {
  e.preventDefault()
  if (dqs("#name-card").value) {
    mostrarIcono("#check01")
  } else {
    ocultarIcono("#check02")
  }
  if(dqs("#debit").value) {
    mostrarIcono("#check02")
  } else {
    ocultarIcono("#check03")
  }
  mostrarIcono("#check03")
  if (dqs("#security").value && dqs("#zip").value) {
    mostrarIcono("#check04")
  } else {
    ocultarIcono("#check04")
  }
})