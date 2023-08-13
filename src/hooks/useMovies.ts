import { useRef, useState, useCallback } from 'react';
import { searchMovies } from '../services/movies'
import { MapedMovie } from '../types'
import debounce from 'just-debounce-it';
interface ResponseMovies {
  movies: MapedMovie[]
  error: boolean
  loading: boolean
}


export function useMovies ({ sort }: { sort: boolean }) {
  const previousSearch = useRef('')

  const [responseMovies, setResponseMovies] = useState<ResponseMovies>({
    movies: [],
    error: false,
    loading: false
  })



  const getMovies = useCallback(async (search: string) => {


    if (previousSearch.current === search) return
    if (search) {
      setResponseMovies({
        movies: [],
        error: false,
        loading: true
      })
      try {
        previousSearch.current = search
        const movies = await searchMovies(search)
        setResponseMovies({
          loading: false,
          movies,
          error: false
        })

      } catch (error) {
        setResponseMovies({
          movies: [],
          error: true,
          loading: false
        })

      }


    } else {
      setResponseMovies({
        ...responseMovies,

        error: true
      })
    }
  }, [])


  const debouncedGetMovies = useCallback(debounce(getMovies, 300), [getMovies])

  const sortedMoviesByTitle = sort ? [...responseMovies.movies].sort((a, b) => a.title.localeCompare(b.title)) : responseMovies.movies


  return {
    getMovies,
    debouncedGetMovies,
    movies: sortedMoviesByTitle,
    error: responseMovies.error,
    loading: responseMovies.loading,


  }



}









