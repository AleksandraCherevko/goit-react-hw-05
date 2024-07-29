import { useEffect, useState } from "react";
import { movieCast } from "../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await movieCast(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {casts.length > 0 ? (
        <ul className={css.castList}>
          {casts.map((cast) => (
            <li className={css.castItem} key={cast.id}>
              <img
                className={css.castImg}
                src={`${IMAGE_BASE_URL}${cast.profile_path}`}
                alt={cast.name}
              />
              <p className={css.casAfterTitle}>
                <b className={css.casTitle}>{cast.name}</b> as {cast.character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.casAlert}>No cast information available.</p>
      )}
    </div>
  );
}
