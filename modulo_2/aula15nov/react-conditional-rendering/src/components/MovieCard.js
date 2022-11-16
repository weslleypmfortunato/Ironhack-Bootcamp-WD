const MovieCard = (props) => {
  const {movie, clickToDelete} = props
  

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      {/* {movie.hasOscars && <p>Got the Oscar Award!</p>}
      {!movie.hasOscars && <p>Great movie, but no Oscars</p>}  OU */}

      {movie.hasOscars ? <p>Got the Oscar Award!</p> : <p>Great movie, but no Oscars</p>}

      <button onClick={() => clickToDelete(movie._id)}>
        Delete
      </button>
    </div>
  )
}

export default MovieCard 