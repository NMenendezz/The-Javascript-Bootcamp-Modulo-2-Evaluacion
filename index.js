/* Top de películas actuales (o al menos eso dicen)​

Nos han encargado un top de películas actuales (o al menos eso dicen) para una aplicación de cine, lo bueno es que al menos nos han dado un JSON con los datos de las películas y no tenemos que buscarlos nosotros.

La aplicación debe permitir como mínimo:
◻️ Mostrar un listado de películas
◻️ Añadir una película
◻️ Buscar una película por título
◻️ Al hacer click en una película se redigirá a la página de la película en Rotten Tomatoes

Hay un par de bonus que puedes hacer:
◻️ Añadir un botón para marcar una película como favorita y que se muestre con un color diferente
◻️ Que al recargar la página se mantengan las películas añadidas y las favoritas
 */

import { films } from "./films.js"

// const film = JSON.stringify(films);
// console.log(film)

const fragment = document.createDocumentFragment();
const template = document.querySelector('.template');
const clone = template.content.cloneNode(true);

const main = document.querySelector('.main');
const title = template.content.querySelector('.title');
const img = template.content.querySelector('.img');
const year = template.content.querySelector('.year');
const starring = template.content.querySelector('.starring');
const director = template.content.querySelector('.director');



fragment.append(clone.content);
main.append(fragment);