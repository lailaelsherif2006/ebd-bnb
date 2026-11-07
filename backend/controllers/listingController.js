// ebd bn'b: the listings controllers (Lab 5, part 2)
// Read the request, call the model, send the response
import {
  getAllListings,
  getListingById,
  addListing,
  updateListing,
  removeListing,
} from "../models/Listing.js";

export async function handleGetAll(req, res) {
  res.json(await getAllListings());
}

export async function handleGetOne(req, res) {
  const listing = await getListingById(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}

export async function handleCreate(req, res) {
  const data = req.body || {}; // no body sent? use an empty object
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  res.status(201).json(await addListing(data));
}

export async function handleUpdate(req, res) {
  const data = req.body || {};
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  const listing = await updateListing(req.params.id, data);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}

export async function handleDelete(req, res) {
  const listing = await removeListing(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.status(204).end(); // done, nothing to send back
}
