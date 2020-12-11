const API_KEY = '4bcb50edee6e88e71723d4527527315b'
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4bcb50edee6e88e71723d4527527315b&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=4bcb50edee6e88e71723d4527527315b&query='

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const getMovies = async (url) => {
  const res = await fetch(url)
  const resData = await res.json()

  console.log('movies data', resData)

  showMovies(resData.results)
}

getMovies(API_URL) //initially get favourite movies

const showMovies = (movies) => {
  //clear main first
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
    </div>
    <div class="overview">
      <h4>Overview: </h4>
      ${overview}
    </div>
    `
    main.appendChild(movieEl)
  })
}

const getClassByRate = (rate) => {
  if (rate >= 8) {
    return 'green'
  } else if (rate >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm) {
    console.log(SEARCH_API + searchTerm)
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  }
})
