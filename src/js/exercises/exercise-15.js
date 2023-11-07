/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/


const totalRating = movies.reduce(function (total, movie) {
    return total + movie.rating;
}, 0);
const ratingAverage = totalRating / movies.length;

const bestFilms = movies.filter(function (movie) {
    return movie.rating > ratingAverage;
});

bestFilms.sort(function (a, b) {
    return b.rating - a.rating;
});

const bestFilmsInfo = bestFilms.map(function (movie) {
    return {
        title: movie.title,
        description: movie.description
    };
});

showContent(15, bestFilmsInfo);