import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="page">
      <h2>Page not found</h2>
      <p>There is nothing at this address.</p>
      <Link to="/">Back to all listings</Link>
    </div>
  );
}

export default NotFoundPage;
