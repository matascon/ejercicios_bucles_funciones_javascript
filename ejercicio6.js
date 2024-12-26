const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const starWarsMoviesInDecades = [];
let decadeValue = 0;
let existMovie = false;

for (const movie of starWarsMovies) {
	decadeValue = movie.releaseYear - (movie.releaseYear % 10);
	if (!starWarsMoviesInDecades.length) {
		starWarsMoviesInDecades.push({[decadeValue]: [movie.title]});
	} else {
		starWarsMoviesInDecades.forEach((decade) => {
			if (decade[decadeValue]) {
				decade[decadeValue].push(movie.title);
				existMovie = true;
			}
		});
		if (!existMovie) {
			starWarsMoviesInDecades.push({[decadeValue]: [movie.title]});
		}
		existMovie = false;
	}
}

console.log(starWarsMoviesInDecades);