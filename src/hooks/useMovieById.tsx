import { useEffect, useState } from 'react';
import { MOVIE_BY_ID_URL } from '../constants';

export function useMovieById ({ movieId }: { movieId: string }) {
  const [movieDescription, setmovieDescription] = useState({
    singleMovie: {},
    loading: false,
    error: false
  })
  const getMovieById = async () => {
    setmovieDescription({
      ...movieDescription,
      loading: true
    })
    try {
      const res = await fetch(`${MOVIE_BY_ID_URL}${movieId}`)
      const data = await res.json()
      console.log(" data:", data)
      setmovieDescription({
        singleMovie: data,
        loading: false,
        error: false
      })
    } catch (error) {
      console.log(error);
      setmovieDescription({
        ...movieDescription,
        loading: false,
      })

    }
  }
  useEffect(() => {
    getMovieById()
  }, [movieId])
  return {
    singleMovie: movieDescription.singleMovie,
    loading: movieDescription.loading,
    error: movieDescription.error
  }

}