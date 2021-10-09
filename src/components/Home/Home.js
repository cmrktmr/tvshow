import React from 'react'
import MovieListing from "../MovieListing/MovieListing"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../faetures/movies/movieSlice'

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovies());
    }, [dispatch])

    return (
        <>
            <div className="banner-img">
                <MovieListing />
            </div>
        </>

    )
}

export default Home

