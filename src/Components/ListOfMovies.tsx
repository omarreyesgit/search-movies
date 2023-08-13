import { MapedMovie } from '../types'
import MovieCard from './MovieCard'

interface Props {
  movies: MapedMovie[]
}
const ListOfMovies = ({ movies }: Props) => {


  const hasMovies = movies?.length > 0
  return (
    <>
      {hasMovies ? (
        <ul className='grid-movies'>
          {movies.map((movie) => {
            return (
              <MovieCard movie={movie} key={movie.id} />
            )
          })}
        </ul>

      ) : (
        <p>No se encontraron resultados</p>
      )}
    </>
  )
}
export default ListOfMovies