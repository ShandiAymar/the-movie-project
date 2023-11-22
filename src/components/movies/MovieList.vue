<template>
  <div>
    <h1 class="title">Listado de Películas</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<style>
.movie-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 50px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.movie-list {
  list-style-type: disc;
  padding: 15px;
}

.movie-item {
  border-bottom: 1px solid #ccc;
  padding: 15px;
  margin: 0;
}
</style>

<script>
import { ref, onMounted } from "vue";
import { fetchMovies } from "src/tmdb.js";

export default {
  setup() {
    const movies = ref([]);

    onMounted(async () => {
      try {
        const apiKey = "3279c8a95e8766108057e3c654d5b2ea";
        movies.value = await fetchMovies(apiKey);
      } catch (error) {
        console.error(
          "Error al obtener el listado de películas desde el componente:",
          error
        );
      }
    });

    return {
      movies,
    };
  },
};
</script>
