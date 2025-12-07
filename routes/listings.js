const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../module/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { error } = require("console");
const {isLoggedIn,validateListing} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const{ storage } = require("../cloudConfig.js");
const upload = multer({ storage });
// const validateListing = (req,res,next) =>{
//   let{error}= listingSchema.validate(req.body);
//   if (error){
//     let errmsg = error.details.map((el)=>el.message).join(",");
//     throw new ExpressError(400,errmsg);
//   }else{
//     next();
//   }
// };
//index
router.get("/", wrapAsync (listingController.index) );
//new route
router.get("/new",isLoggedIn,validateListing, listingController.renderNewForm);

router.post("/", upload.single('Listing[image]'), isLoggedIn, validateListing, wrapAsync(async (req, res) => {
  const newListing = new Listing(req.body.Listing);
  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  }
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success","created sucessful");
  res.redirect("/listings");
}));



//edit route
router.get("/:id/edit",isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const Listings = await Listing.findById(id);
  let originalImage = Listings.image.url;
  originalImage = originalImage=originalImage.replace("/upload","/upload/h_30,w_25");
  res.render("listings/edit", { Listings ,originalImage});
}));
//show route
router.get("/:id",wrapAsync(listingController.showListing));
//delete route
router.delete("/:id", isLoggedIn, wrapAsync(listingController.deleteListing));
//create route
router.post("/:id",isLoggedIn, wrapAsync(listingController.createListing));

router.put("/:id", upload.single('Listing[image]'),isLoggedIn, wrapAsync(listingController.updateListing));

module.exports = router;
