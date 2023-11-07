/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

const moviesDrama = movies.filter(
    (movie) => movie.category === categories.drama
);

const moviesDramaInfo = moviesDrama.map((movie) => {
    return {
        title: movie.title,
        description: movie.description,
    };
});

showContent(12, moviesDramaInfo);