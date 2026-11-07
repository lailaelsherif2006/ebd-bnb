import { useState } from "react";
import { Link } from "react-router";

function ListingCard({ listing, onDelete }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      <h2>
        <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
      </h2>
      <p>{listing.pricePerNight} per night</p>
      <button onClick={() => setSaved(!saved)}>
        {saved ? "♥ Saved" : "♡ Save"}
      </button>
      <button onClick={() => onDelete(listing._id)}>Delete</button>
    </div>
  );
}

export default ListingCard;
