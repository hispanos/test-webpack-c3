//Imports
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import star from "../../assets/images/star.png";

//Generals
const URL_MEDIA = 'https://image.tmdb.org/t/p/original/';

//DOM elements
const logoImage = document.getElementById("logoImage");
const searchImage = document.getElementById("searchImage");
const containerMovies = document.getElementById("container__movies");
export const buttonNext = document.getElementById('paginator__next');
export const buttonPrevius = document.getElementById('paginator__previus');

export const renderImages = () => {
  logoImage.src = logo;
  searchImage.src = search;
};

export const renderMovies = (listMovies) => {
  containerMovies.innerHTML = ``;
  listMovies.forEach((movie) => {
    containerMovies.innerHTML += `
        <article class="movie">
        <div class="movie__rated"><img alt="Estrella" class="starImg" src="${star}"><span>${movie.vote_average}</span></div>
        <figure class="movie__figure"><img src="${`${URL_MEDIA}${movie.poster_path}`}" alt="Gato con botas" class="movie__image"></figure>
    </article>
        `;
  });
};