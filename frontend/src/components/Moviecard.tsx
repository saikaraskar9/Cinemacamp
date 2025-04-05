interface Movie {
    url?: string;
    title: string;
    release_date: string;
}
  
function Moviecard({movie}:{movie:Movie}){

    function favonclick(){
        alert("saved...")
    }
    return <div className="moviecard">
        <div className="movie-poster">
            <img src={movie?.url} alt={movie?.title} />
            <div className="overlay">
                <button className="fav" onClick={favonclick}>
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h2>{movie?.title}</h2>
            <h5>{movie?.release_date}</h5>
        </div>
    </div>
}

export default Moviecard