import ListingCard from "../components/ListingCard.jsx";

function HomePage({ listings, onDelete }) {
  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard
      key={listing._id}
      listing={listing}
      onDelete={onDelete}
    />
  ));

  return <div className="listings">{cards}</div>;
}

export default HomePage;
