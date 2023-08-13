import './App.css';
import ListOfMovies from './Components/ListOfMovies';

import FormMovie from './Components/FormMovie';
import { useMovies } from './hooks/useMovies';
import Loader from './icons/Loader';
import { useState } from 'react';

function App () {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, debouncedGetMovies, loading, error } = useMovies({ sort })

  const handleFormSubmit = (search: string) => {
    getMovies(search)

  }


  return (
    <div className='app'>

      <header>
        <h1>Buscador de Películas</h1>


        <FormMovie handleFormSubmit={handleFormSubmit} debouncedGetMovies={debouncedGetMovies} />
        <input type="checkbox" checked={sort} name="" id="" onChange={() => setSort(!sort)} />
      </header>
      <main>
        {loading && <Loader />}
        <ListOfMovies movies={movies} />



      </main>
    </div>

  )

}
export default App












