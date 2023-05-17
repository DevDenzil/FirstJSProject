'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films have you seen?', '0');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films have you seen?', '0');
  }
}

start();
let personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  let s = true;
  while (s) {
    let newMovieName = prompt('One of last films?', '');
    if (
      newMovieName == '' ||
      newMovieName == null ||
      newMovieName.length > 50
    ) {
      alert(
        'Name of film must be less that 50 chars, not "" and don\'t click Reject'
      );
      continue;
    }
    let newMovieScore = prompt('How do you rate it?', '10');
    if (newMovieScore == '' || newMovieScore == null) {
      alert(
        'Score of film must be less that 50 chars, not "" and don\'t click Reject'
      );
      continue;
    }
    personalMovieDB.movies[newMovieName] = newMovieScore;
    personalMovieDB.count++;
    s = confirm('Add new movie?');
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('You haven\'t watched a lot of movies');
  } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    alert('You are classic viewer');
  } else if (personalMovieDB.count > 30) {
    alert('You are cinephile');
  } else {
    alert('Error');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  let s = true;
  while (s) {
    let i = personalMovieDB.genres.length + 1;
    let newGenre = prompt(`Your ${i}-st/d favorite genre`);
    personalMovieDB.genres[i-1] = newGenre;
    i++;
    s = confirm('Add new genre?');
  }
}

writeYourGenres();
