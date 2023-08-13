import { useParams } from 'react-router-dom'
import { useMovieById } from '../hooks/useMovieById'

const MovieDescription = () => {
  const { id } = useParams()
  const { singleMovie, loading, error } = useMovieById({ movieId: id })
  return (
    <div>MovieDescription</div>
  )
}
export default MovieDescription