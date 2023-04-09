import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from './request';

function Banner() {
    const [movie, setmovies] = useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(requests.fetchnetflixorignals);
            console.log(
                request.data.results  [
                    Math.floor(Math.random()*request.data.results.length-1)
                ]);
        }
        fetchdata()
    },[]);
console.log(movie);

function truncate(str,n){
    return str?.length>n? str.substr(0,n-1)+   "...":str;
}
  return (
    <header className='banner'
    style={{
        backgroundSize :"cover",
        backgroundImage : `url("https://image.tmbd.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",    
    }}
    >
        <div className='banner_contents'>
        <h1>
            {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>List</button>
        </div>
        <h1 className='banner_description'>{movie?.overview}
        {truncate(movie?.overview,150)}
        </h1>
        </div>

        <div className='banner_fadebotton'>

        </div>

    </header>
  )
}

export default Banner
