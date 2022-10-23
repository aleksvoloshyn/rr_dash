import { useNavigate } from 'react-router-dom'
// import MovieDetail from '../MovieDetail'
const MoviesHome = () => {
  const navigate = useNavigate()
  return (
    <>
      <button
        onClick={() => {
          navigate('../')
        }}
      >
        go back
      </button>
    </>
  )
}

export default MoviesHome
