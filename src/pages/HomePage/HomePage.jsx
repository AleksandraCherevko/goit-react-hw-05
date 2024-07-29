import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMovie } from "../../components/movies-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        const data = await getMovie();
        setMovies(data);
      } catch (error) {
        console.log("error");
      }
    }
    fetchMovieList();
  }, []);

  return <div>{movies.length > 0 && <MovieList movies={movies} />}</div>;
}
