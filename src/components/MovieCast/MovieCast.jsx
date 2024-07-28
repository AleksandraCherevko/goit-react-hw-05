import { useEffect, useState } from "react";
import { movieCast } from "../movies-api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await movieCast(movieId);
        setCasts(data.cast); // Access the cast array
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {casts.length > 0 ? (
        <ul>
          {casts.map((cast) => (
            <li key={cast.id}>
              <p>
                <b>{cast.name}</b> as {cast.character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
}
