import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getMovie } from "../../components/movies-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesFilter = searchParams.get("movie") ?? "";
  const [movies, setMovies] = useState([]);

  const changeTitleFilter = (newMovie) => {
    setSearchParams({ movie: newMovie });
  };

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const data = await getMovie();
        setMovies(data);
      } catch (error) {
        console.error("Error....", error);
      }
    }
    fetchMovieList();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(moviesFilter.toLowerCase())
    );
  }, [moviesFilter, movies]);

  return (
    <div>
      <div className={css.searchContainer}>
        <input
          type="text"
          value={moviesFilter}
          onChange={(e) => changeTitleFilter(e.target.value)}
          className={css.searchInput}
          placeholder="Filter movies..."
        />
      </div>
      {movies.length > 0 && <MovieList movies={filteredMovies} />}
    </div>
  );
}
