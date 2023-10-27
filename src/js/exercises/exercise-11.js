/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function highestRating(movies) {
    const resultado = movies.sort((movie1, movie2) => {
        if (movie1.rating < movie2.rating) return -1;
        if (movie1.rating > movie2.rating) return 1;
        return 0;
    })
    return resultado
}

showContent(11, resultado);