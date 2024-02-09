import { Drawer, Button } from "@mui/material";
import { useState } from "react";
import MovieInfo from "./MovieInfo";

const Movielist = ({ movies }) => {
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
  const [GetimdbId, setGetimdbId] = useState(null);

  const openDrawer = (imdbID) => {
    setGetimdbId(imdbID);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setGetimdbId(null);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="box_card">
        {movies.map((movie) => (
          <section key={movie.imdbID} className="movie_card" id={movie.imdbID}>
            <figure>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <div className="movie_title">
              <h2>{movie.Title}</h2>
              <Button
                variant="outlined"
                onClick={() => openDrawer(movie.imdbID)}
              >
                More Info
              </Button>
            </div>
          </section>
        ))}
      </div>

      <Drawer anchor="bottom" open={IsDrawerOpen} onClose={() => closeDrawer()}>
        <MovieInfo movieId={GetimdbId} />
      </Drawer>
    </>
  );
};

export default Movielist;
