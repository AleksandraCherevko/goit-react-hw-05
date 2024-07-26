import { useEffect, useState } from "react";
import { getMovie } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(movies);
    async function fetchMovies() {
      try {
        const data = await getMovie();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return <div>{movies.length > 0 && <MovieList movies={movies} />}</div>;
}
