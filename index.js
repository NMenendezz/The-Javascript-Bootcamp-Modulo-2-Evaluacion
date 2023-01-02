/* Top de películas actuales (o al menos eso dicen)​

Nos han encargado un top de películas actuales (o al menos eso dicen) para una aplicación de cine, lo bueno es que al menos nos han dado un JSON con los datos de las películas y no tenemos que buscarlos nosotros.

La aplicación debe permitir como mínimo:
◻️ Mostrar un listado de películas ✅
◻️ Añadir una película
◻️ Buscar una película por título
◻️ Al hacer click en una película se redigirá a la página de la película en Rotten Tomatoes ✅

Hay un par de bonus que puedes hacer:
◻️ Añadir un botón para marcar una película como favorita y que se muestre con un color diferente
◻️ Que al recargar la página se mantengan las películas añadidas y las favoritas
 */

import { films } from "./films.js";

// const film = JSON.stringify(films);
// console.log(film)

const fragment = document.createDocumentFragment();
const template = document.querySelector(".template");

// Mostrar listado de todas las películas
const main = document.querySelector(".main");

const url = template.content.querySelector(".url");
const title = template.content.querySelector(".title");
const img = template.content.querySelector(".img");
const year = template.content.querySelector(".year");
const starring = template.content.querySelector(".starring");
const director = template.content.querySelector(".director");

films.forEach((film) => {
  url.setAttribute("href", film.url);
  title.textContent = film.title;
  img.src = film.img;
  year.textContent = film.year;
  starring.textContent += film.starring.join(", ");
  director.textContent += film.directedBy.join(", ");
  const clone = template.cloneNode(true);
  fragment.append(clone.content);
});

main.append(fragment);

// Añadir película
const addFilmBtn = document.querySelector(".add-film-btn");

const addFilm = () => {
  const form = document.createElement('form');
  const title = document.createElement("input");
  title.setAttribute("placeholder", "Título");
  title.classList.add("fTitle");
  const img = document.createElement("input");
  img.setAttribute("placeholder", "url");
  img.classList.add("fUrl");
  const year = document.createElement("input");
  year.setAttribute("placeholder", "Año");
  year.classList.add("fYear");
  const starring = document.createElement("input");
  starring.setAttribute("placeholder", "Protagonizada por");
  starring.classList.add("fStarring");
  const director = document.createElement("input");
  director.setAttribute("placeholder", "Dirigida por");
  director.classList.add("fdirector");
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('fSubmitBtn');
  submitBtn.textContent = 'Aceptar';
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('fResetBtn');
  resetBtn.textContent = 'Cancelar';
  form.append(title, img, year, starring, director, submitBtn, resetBtn);
  main.before(form);
};

addFilmBtn.addEventListener("click", () => {
  addFilmBtn.disabled = true;
  addFilm();
});
