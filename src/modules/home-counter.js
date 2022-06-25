const homeCounter = async function () {
  const requestmovies = await fetch('https://api.tvmaze.com/shows');
  const requestedMovies = await requestmovies.json();
  let movieCounter = 0;

  requestedMovies.forEach((movieData) => {
    movieCounter += 1;
    return movieData;
  });
  document.querySelector('.movie-counter').innerHTML = `
  ${movieCounter}
  
  `;
};

export default homeCounter;