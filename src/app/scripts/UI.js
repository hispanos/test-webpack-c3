import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import star from "../../assets/images/star.png";

const logoImage = document.getElementById("logoImage");
const searchImage = document.getElementById("searchImage");
const stars = document.getElementsByClassName("starImg");

logoImage.src = logo;
searchImage.src = search;

document.addEventListener("DOMContentLoaded", () => {
  Array.from(stars).forEach((element) => {
    element.src = star;
  });
});
