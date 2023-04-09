import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url =  "https://image.tmbd.org/t/p/original/";

function Row({ title , fetchUrl, isLargeRow}){
    const[movies, setmovies]= useState([]);


    useEffect(() => {
        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request;
        }
        fetchdata();
    },[fetchUrl]);
    console.table(movies);

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie =>(
                    <img
                    key={movie.id}
                    className= {`row_poster ${isLargeRow && "row_posterlarge"}`}  
                    src={`${base_url} ${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                        ))}
            </div>
        </div>
    );   
}
export default Row
