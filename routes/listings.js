const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../module/listing.js");
const { isLoggedIn, validateListing } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/", wrapAsync(listingController.index));
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.post(
  "/",
  upload.single('Listing[image]'),
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing)
);

router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const Listings = await Listing.findById(id);

  if (!Listings) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  let originalImage = "/images/placeholder.png";
  if (Listings.image && Listings.image.url) {
    originalImage = Listings.image.url.replace("/upload", "/upload/h_30,w_25");
  }
  return res.render("listings/edit", { Listings, originalImage });
}));

router.get("/:id", wrapAsync(listingController.showListing));
router.delete("/:id", isLoggedIn, wrapAsync(listingController.deleteListing));
router.put(
  "/:id",
  upload.single('Listing[image]'),
  isLoggedIn,
  wrapAsync(listingController.updateListing)
);

module.exports = router;
