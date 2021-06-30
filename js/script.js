"use strict";


const numberOfFilms = +prompt('How', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of', ''), 
      b = prompt('How rate', ''),
      c = prompt('One of', ''),
      d = prompt('How rate', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB)