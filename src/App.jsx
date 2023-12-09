import "./App.css";
import { useEffect, useState } from "react";
import Movielist from "./components/Movielist";
import Searchbar from "./components/Searchbar";


function App() {

  const [movie, setMovies] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchMovie, setSearchMovie] = useState('');
  

  const getMovies = async () =>{
      const apiKey ="195a1210";
      const apiUrl= `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchMovie}`;

      try{
        const respond = await fetch(apiUrl);
        const respondJson = await respond.json();

        if(respondJson.Search)
        {
        setMovies(respondJson.Search)
        setloading(false)
 
       
        }
        
   
          setloading(false)

      }
      catch(error){
        console.error() 
        setloading(false)
      }
  }

  useEffect(()=>{
    getMovies()
  },[searchMovie])

  return(
    <>
    <div className="wrapper">
      <div className="wrapper_con">
    <Searchbar setSearchValue={setSearchMovie}/>
    {!loading ?
     <Movielist movies={movie} /> 
     :  <p>Loading ....</p> }
    </div>
    </div>
    </>
  );
}

export default App;
