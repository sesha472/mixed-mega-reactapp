


import React,{useState} from 'react';
import Movie from './Movie';
import './Movies.css'

export default function Movies() {

    const [moviedetails, setmoviedetails] = useState({
        movieslist:[
            { baner:"movie",likes:101,moviename:"srimanthudu"},
            { baner:"movie",likes:102,moviename:"srimanthudu"},
            { baner:"movie",likes:103,moviename:"srimanthudu"},
            { baner:"movie",likes:104,moviename:"srimanthudu"},
            { baner:"movie",likes:105,moviename:"srimanthudu"},
            { baner:"movie",likes:106,moviename:"srimanthudu"},
        ],
    })
    return (

        <div className="Movies">
            {moviedetails.movieslist.map(item=>{
                return ( <Movie 
                    key={item.likes}
                baner={item.baner}
                likes={item.likes}
                moviename={item.moviename} />)
            }
            ) }

        </div>
    )
}
