const ImprovedMovieCard = (props) => {
  const {movie, clickToDelete} = props

  const generateScoreLabel = score => {
    if (score > 9) {
      return <span className="green">9+</span>
    } else if (score < 7) {
      return <span className="red">{score}</span>
    } else {
      return <span className="black">{score}</span>
    }
  }
  

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>

      {movie.hasOscars ? <p>Got the Oscar Award!</p> : <p>Great movie, but no Oscars</p>}

      <button onClick={() => clickToDelete(movie._id)}>
        Delete
      </button>
    </div>
  )
}

export default ImprovedMovieCard 