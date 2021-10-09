import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../faetures/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"
const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    let renderMovies = "";
    console.log("geldi", movies)

    renderMovies = movies.map((movie) => (
        // console.log("nedir",movie)
        <MovieCard key={movie.show.id} data={movie} />

    ))


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Batman TV Show List</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>

        </div>
    )
}

export default MovieListing;

