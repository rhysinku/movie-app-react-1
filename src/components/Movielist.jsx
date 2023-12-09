
const Movielist = ({movies, setAlert}) => {
    return (
        <>
   
     <div className="box_card">
        {movies.map((movie)=>(
            <section key={movie.imdbID} className="movie_card" >
            <figure><img src={movie.Poster} alt={movie.Title}/></figure>
            <div className="movie_title">
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            </div>
            </section>
        ))}
           </div>
        </>
    );
}

export default Movielist;
