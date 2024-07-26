import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieID } = useParams();

  return <div>MovieDetailsPage</div>;
}
