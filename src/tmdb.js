export async function fetchMovies(apiKey) {
  try {
    console.log("Antes de la solicitud a la API");
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("Después de la solicitud a la API, respuesta:", data);

    return data.results;
  } catch (error) {
    console.error("Error al obtener el listado de películas:", error);
    throw error; // Puedes elegir manejar el error aquí o lanzarlo para que se maneje en el componente que llama a esta función.
  }
}
