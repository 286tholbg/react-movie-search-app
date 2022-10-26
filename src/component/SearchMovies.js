import React, {useState} from "react";
import MovieCard from "./MovieCard";


export default function SearchMovies(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e0dccba967e141ef0d3a554db10a1e7f&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json();
            setMovies(data.results)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Search Movie</label>
                <input className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e Jurassic park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie =>
                    <MovieCard 
                        movie={movie} 
                        key={movie.id}
                    />
                )}
            </div>
        </>
    )
}

// movie search db apikey = e0dccba967e141ef0d3a554db10a1e7f