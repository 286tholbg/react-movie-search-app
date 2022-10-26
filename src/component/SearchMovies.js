import React from "react";


export default function SearchMovies(props){

    return (
        <form className="form">
            <label className="label" htmlFor="query">Search Movie</label>
            <input className="input" type="text" name="query" placeholder="i.e Jurassic park" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}