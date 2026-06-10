const Listing = require("../module/listing");

module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  return res.render("listings/index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
  return res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  return res.render("listings/show.ejs", { Listing: listing, currUser: req.user });
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }
  req.flash("success", "Listing deleted successfully");
  return res.redirect("/listings");
};

module.exports.createListing = async (req, res) => {
  const newListing = new Listing(req.body.Listing || {});
  newListing.owner = req.user._id;
  if (req.file) {
    newListing.image = { url: req.file.path, filename: req.file.filename };
  }
  await newListing.save();
  req.flash("success", "Listing created successfully");
  return res.redirect(`/listings/${newListing._id}`);
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  Object.assign(listing, req.body.Listing || {});

  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
  }

  await listing.save();
  return res.redirect(`/listings/${listing._id}`);
};