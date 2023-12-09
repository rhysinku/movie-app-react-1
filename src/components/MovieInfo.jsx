import { useEffect, useState } from "react";


const MovieInfo = ({movieId}) => {
    
    const [MovieData, setMovieData] = useState([]);
    const [MovieIDtemp , setMovieIDtemp] = useEffect()

    const movieData = async() => {
        const apiKey="195a1210";
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`

        try{
            const respond = await fetch(apiUrl);
            const respondJson = await respond.json()

          console.log(respondJson)

        }
        catch(error){
            console.error()
        }
    }

    useEffect(()=>
    {
        movieData()
    },[])




    return (
        <>
        <div className="info_box">
            <h2>{movieId}</h2>  
        </div>

        </>
    );
}

export default MovieInfo;
