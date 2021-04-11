


import React from 'react';
import './Movie.css';

export default function Movie(props) {
    return (
        <div className="Movie">
            <img src={props.baner}  alt="movie name"/>
            <div className="title">
                <span>likes{props.likes}</span>
                <span>{props.moviename}</span>
            </div>
        </div>
    )
}
