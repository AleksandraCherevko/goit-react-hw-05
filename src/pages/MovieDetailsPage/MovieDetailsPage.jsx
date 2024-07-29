import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../components/movies-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Исправлено название переменной на singular, так как это один фильм

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error); // Добавлен вывод ошибки в консоль
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieContainer}>
      {movie && (
        <>
          <div className={css.movieCard}>
            <img
              className={css.moviePoster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={css.movieInfo}>
              <h2 className={css.movieTitle}>{movie.title}</h2>
              <b>User Score: </b>
              <p className={css.moviesDescription}>{movie.vote_average} %</p>
              <b>Overview:</b>
              <p className={css.moviesDescription}>{movie.overview}</p>
              <b>Language:</b>
              <p className={css.moviesDescription}>{movie.original_language}</p>
            </div>
          </div>
          <h3 className={css.moreDetTitle}>Additional information</h3>
          <ul className={css.moviesMoreDetails}>
            <li className={css.moviesMoreDetItem}>
              <NavLink className={css.moviesMoreDetLink} to="cast">
                Cast
              </NavLink>
            </li>
            <li className={css.moviesMoreDetItem}>
              <NavLink className={css.moviesMoreDetLink} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
}
