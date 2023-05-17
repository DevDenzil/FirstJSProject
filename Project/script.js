'use strict';

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    let numberOfFilms;
    while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt('How much films have you seen?', '0');
    }
    this.count = numberOfFilms;
  },
  rememberMyFilms: function () {
    let s = true;
    while (s) {
      let newMovieName = prompt('One of last films?', '').trim();
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
      this.movies[newMovieName] = newMovieScore;
      this.count++;
      s = confirm('Add new movie?');
    }
  },
  detectPersonalLevel: function () {
    if (this.count < 10) {
      alert("You haven't watched a lot of movies");
    } else if (10 <= this.count && this.count <= 30) {
      alert('You are classic viewer');
    } else if (this.count > 30) {
      alert('You are cinephile');
    } else {
      alert('Error');
    }
  },
  showMyDB: function () {
    if (!this.privat) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    let s = true;
    while (s) {
      let i = personalMovieDB.genres.length + 1;
      let newGenre = prompt(`Your ${i}-st/d favorite genre`);
      if (newGenre === '' || newGenre === null || !newGenre) {
        continue;
      }
      personalMovieDB.genres[i - 1] = newGenre;
      s = confirm('Add new genre?');
    }
    this.genres.forEach((value, i) =>
      console.log(`Favourite genre #${i+1} - ${value}`)
    );
  },
  toggleVisibleMyDB: function () {
    this.privat = !this.privat;
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
