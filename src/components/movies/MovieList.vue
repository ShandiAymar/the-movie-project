<template>
  <div>
    <h1>Lista de películas</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjc5YzhhOTVlODc2NjEwODA1N2UzYzY1NGQ1YjJlYSIsInN1YiI6IjY1NWNhNzUzNTM4NjZlMDEzOWU1NTY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2IoBqfWvkUKdGKUGgFLRj3IzLwZDF9rJCdhKdzu1yKs",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
</script>
