import { Link } from "react-router-dom";
export default function MovieCard({ movie: { title, id } }) {
  return (
    <div>
      <p>
        <Link to="/movie/${id}">{title}</Link>
      </p>
    </div>
  );
}
