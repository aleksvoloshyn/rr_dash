import axios from 'axios'
const apikey = 'd37bfeabc71c0969f8ae363116645ca9'
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}`

const getTrendingMovies = () => {
  return axios
    .get(url)
    .then((response) => response.data.results)
    .catch((error) => console.log(error.message))
}
const getMovieById = (id) => {
  return axios
    .get(
      // `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=ru-RU`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error.message))
  // .finally((response) => console.log(response))
}

export { getTrendingMovies, getMovieById }
