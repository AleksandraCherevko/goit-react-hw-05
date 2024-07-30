import { useState, useEffect } from "react";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { getMovie } from "../../components/movies-api";
import { searchMovie } from "../../components/movies-api";

export default function MoviesPage() {
  const [filterValue, setFilterValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const initialMovies = await getMovie();
        setMovies(initialMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleFilter = async (value) => {
    setFilterValue(value);
    setLoading(true);

    try {
      const results = await searchMovie(value);
      setMovies(results);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => handleFilter(e.target.value)}
        className={css.searchInput}
        placeholder="Search movies..."
      />
      <button
        onClick={() => handleFilter(filterValue)}
        className={css.searchButton}
      >
        Search
      </button>
      {loading ? <p>Loading...</p> : <MovieList movies={filteredMovies} />}
    </div>
  );
}
