import {destinacionsDestacades, ofertas} from "./data.js"

function dqs(sel) {
    return document.querySelector(sel)
}

const destinacion = dqs("#destinacionsDestacades")
let lista = '<ul class="flex quit-all-paddins normal-gap quit-point wrap-media-1024px justify-content-center">'
for(const des of destinacionsDestacades) {
    lista += `<li class="total-width">
                <img src="${des.imatgeUrl}" alt="${des.nombre}" class="total-max-width object-fit-cover total-width" />
                <h3 class="little-margins-vertical title-generic-color third-title-size">${des.nombre}</h3>
                <p class="quit-all-margins text-generic-size">${des.propietatsCount} properties</p>
              </li>`
}
lista += '</ul>'
destinacion.innerHTML = lista
const ofertas = dqs("#ofertas")
lista = '<ul class="flex normal-gap quit-point quit-all-paddins wrap-media-1024px justify-content-center">'
for (const ofer of ofertas) {
    lista += `<li class="total-width">
              <div class="position-relative over-flow-hidden">
                <img src="${ofer.imatgeUrl}" alt="${ofer.titulo}" class="total-max-width midle-max-height object-fit-cover total-width"/>
                <div class="position-absolute total-width total-height generic-border-radius top-0 bottom-0 left-0 right-0 flex align-items-end">
                  <div class="position-relative z-index-increase text-color-white put-all-middle-padding">
                    <h3 class="big-bold-text third-title-size">${ofer.titulo}</h3>
                    <p class="line-heigh-generic text-generic-size">${ofer.descripcion}</p>
                  </div>
                </div>
              </div>
            </li>`
}
lista += '</ul>'
ofertas.innerHTML += lista
lista = '<ul>'