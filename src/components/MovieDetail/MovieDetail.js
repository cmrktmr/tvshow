import React, { useEffect } from 'react'
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesDetail, getSelectedMovie } from '../../faetures/movies/movieSlice';
import "./MovieDetail.scss"
const MovieDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovie)
    console.log("detay", data)
    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };
    useEffect(() => {
        dispatch(fetchAsyncMoviesDetail(id));

    }, [dispatch, id])
    return (
        <div className="movie-section">

            {Object.keys(data).length === 0 ? (<div>...Loading</div>) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">
                            {data.name}
                        </div>
                        <div className="movie-rating">
                            <span>
                                {/*     Rating <i className="fa fa-star">{data.rating.average}</i> */}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film">:{data.runtime}</i>
                            </span>
                            <span>
                                Premired Year  <i className="fa fa-calendar">:{data.premiered}</i>
                            </span>
                        </div>
                        <div className="movie-sum">
                            {data.summary && removeTags(data.summary)}
                        </div>
                        <div className="movie-info">
                            <div>
                                <span>Languages</span>
                                <span>{data.language}</span>
                            </div>
                            <div>
                                <span>Status</span>
                                <span>{data.status}</span>
                            </div>
                            <div>
                                <span>Schedule Day</span>
                                <span>{data.schedule.time ? data.schedule.time : '-'}</span>
                            </div>


                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.image.medium} alt={data.name} />
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDetails
