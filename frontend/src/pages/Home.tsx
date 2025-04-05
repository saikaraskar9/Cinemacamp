import Moviecard from "../components/Moviecard"
import { useState } from "react";

function Home(){
    const [searchquery, setsearchquery]= useState("");
    const movies = [
        {id:1, title:"jw", release_date:"2024"},
        {id:2, title:"jw1", release_date:"2023"},
        {id:3, title:"jw2", release_date:"2021"},
        {id:4, title:"jw3", release_date:"2022"}
    ];

    const handlesearch=(e)=>{
        e.preventDefault()
        alert(searchquery)
    }
    return <>
    
    <div className="home">

    <form onSubmit={handlesearch} className="search-bar">
        <input type="text" 
        placeholder="search here" 
        className="search"
        value={searchquery}
        onChange={(e)=>setsearchquery(e.target.value)}
        ></input>
        <button type="submit" className="search-btn">Search</button>
    </form>
        {movies.map((movie)=>(
            movie.title.toLowerCase().startsWith(searchquery) && <Moviecard movie={movie} key={movie.id}/>
        ))}
    </div>
    </>
}

export default Home;