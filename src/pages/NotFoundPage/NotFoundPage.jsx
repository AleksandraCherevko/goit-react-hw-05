// Якщо користувач зайшов за неіснуючим маршрутом, п
// отрібно показувати компонент NotFoundPage,
// в якому є посилання Link на домашню сторінку.

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Ooooops🫠 </p>
      <p>
        Please, back to <Link to="/">home page</Link> !
      </p>
    </div>
  );
}
