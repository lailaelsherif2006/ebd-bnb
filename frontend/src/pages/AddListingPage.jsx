import { useState } from "react";
import { useNavigate } from "react-router";

function AddListingPage({ onAdd }) {
  // One piece of state per input
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    // Stop the browser from reloading the page
    event.preventDefault();
    onAdd({
      // A random unique id. In Lab 8, MongoDB makes it
      _id: crypto.randomUUID(),
      title: title,
      pricePerNight: Number(price),
    });
    navigate("/"); // back to all listings
  }

  return (
    <form className="page form" onSubmit={handleSubmit}>
      <h2>Add a listing</h2>
      <label>
        Title
        <input value={title} required
          onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Price per night
        <input type="number" value={price} required
          onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add listing</button>
    </form>
  );
}

export default AddListingPage;