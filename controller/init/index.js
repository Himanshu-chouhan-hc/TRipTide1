const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../module/listing.js");

console.log("ATLASDB_URL:", process.env.ATLASDB_URL);

if (!process.env.ATLASDB_URL) {
  throw new Error("ATLASDB_URL is not defined in .env file");
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
    return initDB();
  })
  .then(() => {
    console.log("Database initialized successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Error:", err);
  });

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = new mongoose.Types.ObjectId("69071225722255307b460740");

  const updatedData = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
  }));

  await Listing.insertMany(updatedData);

  console.log("Data was initialized");
};