import type { WatchedData } from "./WatchedBox";
import WatchedMovie from "./WatchedMovie";

type WatchedMoviesListProps = {
  watched: WatchedData[];
};

function WatchedMoviesList({ watched }: WatchedMoviesListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
