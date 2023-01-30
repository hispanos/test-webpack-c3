import "../styles/style.scss";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  const getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    response.data.results.forEach((element) => {
      document.body.innerHTML += `
            <hr>
            ${element.name}
            `;
    });
  };

  getPokemons();
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  form.addEventListener("submit", (e) => {
    handleSubmit(e);
  });

  console.log("Hola mundo");
});
