import React from 'react'
import "./MovieCard.scss"
import { Link } from "react-router-dom"
const MovieCard = (props) => {
    const { data } = props;

    return (
        <div className="card-item">
            <Link to={`/shows/${data.show.id}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.show.image.medium} alt={data.show.name} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.show.name}</h4>
                            <p>  <i className="fa fa-star">  {data.show.rating.average ? data.show.rating.average : "no rating"} </i></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard;
