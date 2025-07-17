import type { MovieData } from "../../App";
import Movie from "./Movie";

type MovieListProps = {
  movies: MovieData[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
