import { MapedMovie } from '../types'


interface MovieProps {
  movie: MapedMovie
}
const MovieCard = ({ movie }: MovieProps) => {
  return (
    <li key={movie.id} className='movie-card'>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
    </li>
  )
}
export default MovieCard