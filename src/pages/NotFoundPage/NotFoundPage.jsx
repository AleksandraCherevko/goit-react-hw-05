// Якщо користувач зайшов за неіснуючим маршрутом, п
// отрібно показувати компонент NotFoundPage,
// в якому є посилання Link на домашню сторінку.

import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={css.errorMesContainer}>
      <div className={css.errorMes}>
        <p className={css.errorMesTitle}>Ooooops🫠 </p>
        <p className={css.errorMesAlert}>
          Please, back to{" "}
          <NavLink className={css.errorMesLink} to="/">
            home page
          </NavLink>
          !
        </p>
      </div>
    </div>
  );
}
