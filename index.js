require("dotenv").config();

const axios = require("axios");

const API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEY_WORD = "movies";

axios
  .get(
    `${API_BASE_URL}/search?api_key=${process.env.API_KEY}&q=${SEARCH_KEY_WORD}`
  )
  .then((res) => {
    const movies = res.data.data;
    movies.map((movie) => {
      console.log(movie.title);
    });
  });
