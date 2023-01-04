/* Top de películas actuales (o al menos eso dicen)​

Nos han encargado un top de películas actuales (o al menos eso dicen) para una aplicación de cine, lo bueno es que al menos nos han dado un JSON con los datos de las películas y no tenemos que buscarlos nosotros.

La aplicación debe permitir como mínimo:
◻️ Mostrar un listado de películas ✅
◻️ Añadir una película ✅
◻️ Buscar una película por título
◻️ Al hacer click en una película se redigirá a la página de la película en Rotten Tomatoes ✅

Hay un par de bonus que puedes hacer:
◻️ Añadir un botón para marcar una película como favorita y que se muestre con un color diferente
◻️ Que al recargar la página se mantengan las películas añadidas y las favoritas ✅
 */

import { movies } from "./movies.js";

/***************** Selectores *****************/

const fragment = document.createDocumentFragment();
const template = document.querySelector(".template");
const main = document.querySelector(".main");
const card = document.querySelectorAll(".card");

// Selectores del template
const url = template.content.querySelector(".url");
const title = template.content.querySelector(".title");
const img = template.content.querySelector(".img");
const year = template.content.querySelector(".year");
const starring = template.content.querySelector(".starring");
const director = template.content.querySelector(".director");

// Selectores de los elementos del formulario
const fTitle = document.querySelector("#fTitle");
const fImg = document.querySelector("#fImg");
const fUrl = document.querySelector("#fUrl");
const fYear = document.querySelector("#fYear");
const fStarring = document.querySelector("#fStarring");
const fDirector = document.querySelector("#fDirector");
const submitBtn = document.querySelector(".f-submit-btn");

// Selectores del buscador
const search = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

/***************** Funciones *****************/

// Función mostrar todas las películas
const displayMovies = () => {
  movies.forEach((movie) => {
    url.setAttribute("href", movie.url);
    title.textContent = movie.title;
    img.src = movie.img;
    year.textContent = movie.year;
    starring.textContent = movie.starring.join(", ");
    director.textContent = movie.directedBy.join(", ");
    const clone = template.cloneNode(true);
    fragment.append(clone.content);
  });
  main.append(fragment);
};

// Recuperar datos de localStorage (si los hay) y ejecutar la función displayMovies()
if (localStorage.getItem("newMovies") !== null) {
  const newMovies = JSON.parse(localStorage.newMovies);
  for (let i = 0; i < newMovies.length; i++) {
    movies.push(newMovies[i]);
  }
  displayMovies();
} else {
  displayMovies();
}

// Función de buscar película
const searchMovie = (title) => {
  title = title.toLowerCase();
  for (let i = 0; i < movies.length; i++) {
    movies[i].title = movies[i].title.toLowerCase();
    if (movies[i].title.includes(title)) {
      return movies[i];
    }
  }
  return null;
};


/***************** Gestión de eventos *****************/

// No permite guardar una película nueva si no tiene al menos un título
fTitle.addEventListener("input", () => {
  if (fTitle.value.length !== 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Guardar una nueva película y añadirla al localStorage
submitBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const movie = {
    id: movies.length + 1,
    title: fTitle.value,
    url: fUrl.value,
    img: fImg.value,
    year: fYear.value,
    starring: [fStarring.value],
    directedBy: [fDirector.value],
  };
  
  movies.push(movie);
  
  let newMovies = JSON.parse(localStorage.getItem("newMovies"));
  if (newMovies === null) {
    newMovies = [];
  }
  newMovies.push(movie);
  localStorage.newMovies = JSON.stringify(newMovies);
});

// Busca la película y la muestra en el DOM
searchBtn.addEventListener("click", () => {
  console.log(searchMovie(search.value));
  const searchValue = search.value;
  if (searchMovie(searchValue) !== null) {
    main.innerHTML = "";
    const movies = [searchMovie(searchValue)];
    movies.forEach((movie) => {
      url.setAttribute("href", movie.url);
      title.textContent = movie.title;
      img.src = movie.img;
      year.textContent = movie.year;
      starring.textContent = movie.starring.join(", ");
      director.textContent = movie.directedBy.join(", ");
      const clone = template.cloneNode(true);
      fragment.append(clone.content);
      main.append(fragment);
    });
  } else {
    console.log("No se ha encontrado ninguna coincidencia");
    const span = document.createElement("span");
    span.textContent = "No se ha encontrado ninguna coincidencia";
    main.before(span)
  }
  search.value = "";
});
