// ebd bn'b: the listings model (Lab 5, part 2)
// The only code that touches the data
import mongoose from "mongoose";

// The shape of one listing
const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

// The model: our handle on the "listings" collection
const Listing = mongoose.model("Listing", listingSchema);

export async function getAllListings() {
  return Listing.find();
}

export async function getListingById(id) {
  // "abc" can never be an _id: not found
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findById(id);
}

export async function addListing(data) {
  // The schema keeps only the fields it knows
  return Listing.create(data);
}

export async function updateListing(id, data) {
  if (!mongoose.isValidObjectId(id)) return null;
  // new: true sends back the listing after the update
  return Listing.findByIdAndUpdate(id, data, {
    new: true,
  });
}

export async function removeListing(id) {
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findByIdAndDelete(id);
}
