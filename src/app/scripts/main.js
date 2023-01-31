import "../styles/style.scss";
import { getAllMovies } from "./services";
import { buttonNext, buttonPrevius, renderImages, renderMovies } from "./UI";

let page = 1;

document.addEventListener("DOMContentLoaded", async () => {
  const movies = await getAllMovies(page);
  renderImages();
  renderMovies(movies.results);
  disabledButtons();
});

buttonNext.addEventListener("click", async () => {
  if (page < 500) {
    page++;
  }
  disabledButtons();
  console.log(page);
  const movies = await getAllMovies(page);
  renderMovies(movies.results);
});

buttonPrevius.addEventListener("click", async () => {
  if (page > 1) {
    page--;
  }
  disabledButtons();
  const movies = await getAllMovies(page);
  renderMovies(movies.results);
});

const disabledButtons = () => {
  if (page === 1) {
    buttonPrevius.classList.add("paginator__disabled");
  } else if (page > 1) {
    buttonPrevius.classList.remove("paginator__disabled");
  }

  if (page === 500) {
    buttonNext.classList.add("paginator__disabled");
  } else if (page < 500) {
    buttonNext.classList.remove("paginator__disabled");
  }
};
