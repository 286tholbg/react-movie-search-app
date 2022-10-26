import React from "react";


export default function SearchMovies(props){

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submitting")

        const query = "Jurassic Park";
    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e0dccba967e141ef0d3a554db10a1e7f&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Search Movie</label>
            <input className="input" type="text" name="query" placeholder="i.e Jurassic park" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

// movie search db apikey = e0dccba967e141ef0d3a554db10a1e7f