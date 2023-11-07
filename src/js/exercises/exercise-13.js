/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/

const moviesGrouped = movies.reduce((grouped, movie) => {
    const category = movie.category;
    if (!grouped[category]) {
        grouped[category] = [];
    }
    grouped[category].push(movie);
    return grouped;
}, {});

showContent(13, moviesGrouped);
