require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../module/listing.js");

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to MongoDB");
    initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});

    const ownerId = new mongoose.Types.ObjectId(
      "69071225722255307b460740"
    );

    const updatedData = initData.data.map((obj) => ({
      ...obj,
      owner: ownerId,
    }));

    await Listing.insertMany(updatedData);

    console.log("Data was initialized");
    mongoose.connection.close();
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};