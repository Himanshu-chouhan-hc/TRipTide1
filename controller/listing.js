const Listing = require("../module/listing");

// index
module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  return res.render("listings/index.ejs", { allListing });
};

// new route
module.exports.renderNewForm = (req, res) => {
  return res.render("listings/new.ejs");
};

// show route
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const Listings = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!Listings) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }

  return res.render("listings/show.ejs", { Listing: Listings, currUser: req.user });
};

// delete route
module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    req.flash("error", "Listing does not exist");
    return res.redirect("/listings");
  }
  req.flash("success", "Listing deleted successfully");
  return res.redirect("/listings");
};

// create route (if creating new listing)
module.exports.createListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.Listing);
  newListing.owner = req.user._id;
  newListing.image = {url,filename};
  await newListing.save();
  return res.redirect(`/listings/${newListing._id}`);
};

// update route (if updating existing listing)
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.Listing });
  if(req.file){
  let url = req.file.path;
  let filename = req.file.filename;
  newListing.image = {url,filename};
  await Listing.save();
  }
  return res.redirect(`/listings/${id}`);
};