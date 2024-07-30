import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { searchMovie } from "../../components/movies-api";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchMovie(query);
      setMovies(results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };
  return (
    <div className={css.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={css.searchInput}
        placeholder="Search movies..."
      />
      <button className={css.searchButton} onClick={handleSearch}>
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
