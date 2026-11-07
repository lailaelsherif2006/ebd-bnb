import { Link, useParams } from "react-router";

function ListingPage({ listings }) {
  // For /listings/a2, id is "a2"
  const { id } = useParams();
  const listing = listings.find((l) => l._id === id);

  if (!listing) {
    return <p className="page">No listing with this id.</p>;
  }

  return (
    <div className="page">
      <h2>{listing.title}</h2>
      <p>{listing.pricePerNight} per night</p>
      <Link to="/">Back to all listings</Link>
    </div>
  );
}

export default ListingPage;
