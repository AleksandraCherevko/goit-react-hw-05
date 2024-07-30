import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <NavLink
            className={css.movieListLink}
            to={`/movies/${movie.id}`}
            state={location}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
