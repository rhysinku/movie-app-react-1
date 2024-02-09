import { useEffect, useState } from "react";



const MovieInfo = ({movieId}) => {
    
     const [MovieData, setMovieData] = useState([]);
    //const [MovieIDtemp , setMovieIDtemp] = useEffect()

    const movieData = async() => {
        const apiKey="195a1210";
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`

        try{
            const respond = await fetch(apiUrl);
            const respondJson = await respond.json()

            console.log(respondJson)
            setMovieData(respondJson)

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
        <div className="info_con wrapper"> 
        <div className="info_box">
            <figure><img src={MovieData.Poster} alt={MovieData.Title}/></figure>
            <h2>{MovieData.Title}</h2>
            <span className="movie__rls">{MovieData.Released}</span>
           
            <p>{MovieData.Plot}</p>
        </div>
        </div>
            

        </>
    );
}

export default MovieInfo;
