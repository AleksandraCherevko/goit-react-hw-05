// /movies/:movieId/cast –
// компонент MovieCast, інформація про акторський склад.
// Рендериться в нижній частині на сторінці MovieDetailsPage.
// Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage
// тут получаем еще полную информацию про каждый элемент списка

import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../components/movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieById(movieId);
        setMovies(data);
      } catch (error) {}
    }
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      {movies && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt={movies.title}
          />
          <b>Title</b>
          <p>{movies.title}</p>
          <b>User Score: </b>
          <p>{movies.vote_average} %</p>
          <b>Overview:</b> <p>{movies.overview}</p>
          <b>Language:</b>
          <p>{movies.original_language}</p>
          <ul>
            <li>
              <NavLink to="cast">MovieCast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">MovieReviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
