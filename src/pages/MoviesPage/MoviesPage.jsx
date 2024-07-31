import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { searchMovie } from "../../components/movies-api";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get.query ?? "");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (query) => {
    try {
      const results = await searchMovie(query);
      setMovies(results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  const handleClick = () => {
    handleSearch(query);
  };

  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={css.searchInput}
        placeholder="Search movies..."
      />
      <button className={css.searchButton} onClick={handleClick}>
        Search
      </button>
      <ul className={css.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
