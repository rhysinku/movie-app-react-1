import Grid from "@mui/material/Unstable_Grid2";

import MovieCard from "./MovieCard";

const Movielist = () => {
  return (
    <div className="MovieList mt-10">
      <div className="flex flex-wrap gap-3 justify-evenly">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCard key={i} id={i} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
