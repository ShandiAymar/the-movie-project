const axios = require("axios");

// Configura tu clave de API de TMDb
const apiKey = "3279c8a95e8766108057e3c654d5b2ea";

// URL del endpoint para descubrir películas
const discoverMoviesEndpoint = "https://api.themoviedb.org/3/discover/movie";

// Parámetros de ejemplo para obtener las películas más populares
const params = {
  api_key: apiKey,
  sort_by: "popularity.desc",
};

// Realiza la solicitud HTTP a TMDb
axios
  .get(discoverMoviesEndpoint, { params })
  .then((response) => {
    // Maneja la respuesta aquí
    console.log(response.data);
  })
  .catch((error) => {
    // Maneja los errores aquí
    console.error("Error al obtener películas:", error.message);
  });
