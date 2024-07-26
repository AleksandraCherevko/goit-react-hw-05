import clsx from "clsx";
import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

export default function App() {
  return (
    <div>
      <h1>Searching</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieID" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" />
        <Route path="/movies/:movieId/reviews" />
      </Routes>
    </div>
  );
}
