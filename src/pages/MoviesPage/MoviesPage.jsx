import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { searchMovie } from "../../components/movies-api";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [movies, setMovies] = useState([]);

  const seacrhQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (seacrhQuery) {
      const handleSearch = async () => {
        try {
          const results = await searchMovie(seacrhQuery);
          setMovies(results);
        } catch (error) {
          console.error("Error searching for movies:", error);
        }
      };
      handleSearch();
    }
  }, [seacrhQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={css.searchInput}
          placeholder="Search movies..."
        />{" "}
        <button className={css.searchButton}>Search</button>
      </form>

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
