import { API_URL } from '../constants'
import { Movie } from '../types'
export const searchMovies = async (search: string) => {
  if (!search) return
  try {
    const res = await fetch(`${API_URL}${search}`)
    const data = await res.json()
    const mappedMovies = data?.Search?.map((movie: Movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))
    return mappedMovies
  } catch (error) {
    throw new Error('Error fetching movies')
    console.log(error);

  }

}