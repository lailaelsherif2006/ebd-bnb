// ebd bn'b: the listings API, split into files (Lab 5, part 2)
import express from "express";
import { connectDB } from "./db.js";
import listingRoutes from "./routes/listingRoutes.js";

const app = express();

// ========== MIDDLEWARE ==========
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.json());

// ========== ROUTES ==========
app.get("/", (req, res) => {
  res.send("Welcome to ebd bn'b");
});
app.use("/api/listings", listingRoutes);

// ========== START ==========
await connectDB();
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
