// Меню з навігаційними посиланнями перенесіть в
// компонент Navigation. Він складається з двох компонентів NavLink,
// які вказують на маршрути / і /movies.

import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const makeNaveLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={makeNaveLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNaveLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
