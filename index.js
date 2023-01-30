/*

Users should be able to:
By default the arrow is white: #fff
When the user hovers over the hamburger, it turns pink: #f40082
When the hamburger turns into an arrow, it turns yellow: #ffd200
The arrow stays yellow (doesn’t turn pink), even if the user hovers over it.
When the user clicks on the hamburger, it animates into an arrow.
When the user clicks on the arrow, it animates into a hamburger
*/


const movies = [
    {"title": "john wick",
    "year": 2012
    },
    {"title": "Shazam",
    "year": 2022
    },
    {"title": "Grace",
    "year": 2022
    }
]

const moviecard = document.querySelector('.moviecard');

let results = [];
const moviecardEl = movies.map(movie =>  {
    results = `<h1> ${movie.title}</h1>`
    moviecard.append(results)
    moviecard.innerHTML = results;
    console.log(results)

})


// const moviecardEl = movies.map(movie =>  
//     `<h1> ${movie.title}</h1>`
//     // moviecard.append(results)
// )

// moviecard.innerHTML = moviecardEl;
// console.log(moviecardEl)