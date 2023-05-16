'use strict';

let numberOfFilms = prompt('How much films have you seen?', '0');
let personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let s = true;
while (s) {
  let newMovieName = prompt('One of last films?', '');
  if (newMovieName == '' || newMovieName == null || newMovieName.length > 50) {
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

// console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  alert('You haven\'t watched a lot of movies');
} else if (10 <= personalMovieDB.count <= 30) {
  alert('You are classic viewer');
} else if (personalMovieDB.count > 30) {
  alert('You are cinephile');
} else {
  alert('Error');
}
