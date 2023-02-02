//Imports
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import star from "../../assets/images/star.png";
import { getMovieById } from "./services";

//Generals
const URL_MEDIA = "https://image.tmdb.org/t/p/original/";

//DOM elements
const logoImage = document.getElementById("logoImage");
const searchImage = document.getElementById("searchImage");
const containerMovies = document.getElementById("container__movies");
export const buttonNext = document.getElementById("paginator__next");
export const buttonPrevius = document.getElementById("paginator__previus");
export const buttonSearch = document.getElementById("buttonSearch");
export const inputSearch = document.getElementById("inputSearch");
export const menuAll = document.getElementById("menuAll");
export const menuRated = document.getElementById("menuRated");
export const menuRecent = document.getElementById("menuRecent");
export const navHeader = document.getElementById("navHeader");
const modalContainer = document.getElementById('modal__container');

const modal = document.getElementById('modal');

export const renderImages = () => {
  logoImage.src = logo;
  searchImage.src = search;
};

export const renderMovies = (listMovies) => {
  containerMovies.innerHTML = ``;
  listMovies.forEach((movie) => {
    containerMovies.innerHTML += `
      <article class="movie" data-id=${movie.id}>
        <div class="movie__rated" data-id=${movie.id}><img alt="Estrella" class="starImg" src="${star}" data-id=${movie.id}>
        <span class="movie__rated__number" data-id=${movie.id}>${movie.vote_average}</span></div>
          <figure class="movie__figure" data-id=${movie.id}><img src="${`${URL_MEDIA}${movie.poster_path}`}" alt="Gato con botas" class="movie__image" data-id=${movie.id}></figure>
      </article>`;
  });
};

containerMovies.addEventListener("click", async (e) => {
  if (
    e.target.classList.contains("movie") ||
    e.target.classList.contains("movie__rated") ||
    e.target.classList.contains("starImg") ||
    e.target.classList.contains("movie__figure") ||
    e.target.classList.contains("movie__image") ||
    e.target.classList.contains("movie__rated__number")
  ) {
    modalContainer.classList.remove('hidden');
    const idMovie = e.target.getAttribute('data-id');
    console.log(idMovie);
    const response = await getMovieById(idMovie);
    console.log(response);
    //render data into modal
  }
});

//Event over modal
modalContainer.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.id === 'modal__container') {
    modalContainer.classList.add('hidden');
  }
})