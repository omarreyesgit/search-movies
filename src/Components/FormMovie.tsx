import { useEffect, useRef, useState } from 'react'


interface Props {
  handleFormSubmit: (search: string) => void,
  debouncedGetMovies: (search: string) => void
}
const FormMovie = ({ handleFormSubmit, debouncedGetMovies }: Props) => {

  const [search, setSearch] = useState('')

  const [error, setError] = useState(null as null | string)
  const isFirstInput = useRef(true)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    handleFormSubmit(search)

  }





  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(' ')) {
      return
    }
    setSearch(newSearch)
    if (newSearch.length < 3) {
      //la busqueda debe tener al menos 3 caracteres
      setError('La búsqueda debe tener al menos 3 caracteres')
      return

    }
    debouncedGetMovies(newSearch)
    setError(null)

  }
  useEffect(() => {


    if (isFirstInput.current) {

      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('La búsqueda no puede estar vacía')
      return
    }
  }, [search])
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='search' onChange={(e) => handleChage(e)} value={search} type="text" placeholder='The Matrix, Stars Wars...' />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
export default FormMovie