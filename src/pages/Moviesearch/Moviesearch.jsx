import { Routes, Route } from 'react-router-dom'
import MoviesHome from './MoviesHome'
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'
import MovieCast from './MovieCast'
import MovieReviews from './MovieReviews'

const MovieSearch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviesHome />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MovieSearch
