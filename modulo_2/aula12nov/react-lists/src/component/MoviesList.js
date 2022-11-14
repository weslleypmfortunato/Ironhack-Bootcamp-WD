import moviesData from '../movies-data.json'
import {useState} from 'react'
import MovieCard from './MovieCard'

const MoviesList = () => {
  const [movies,setMovies] = useState(moviesData)

  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId
    })

    setMovies(filteredMovies)
  }


  return (
    <div className="MoviesList">
      <h2>Movies List</h2>
      {
        movies.map(movie => {
          return (
            <MovieCard key={movie._id} movie={movie}/>
          )
        })
      }
    </div>
  )
}

export default MoviesList