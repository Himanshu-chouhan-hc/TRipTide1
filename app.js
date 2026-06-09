if(process.env.NODE_ENV !=="production"){
  require('dotenv').config();
}
console.log(process.env.SECRET);
const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings = require("./routes/listings.js");
const reviews =require("./routes/review.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./module/user.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

const port = 2000;

mongoURL="mongodb://127.0.0.1:27017/project"
// const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
  
async function main() {
  await mongoose.connect(mongoURL);
}


app.get("/", (req, res) => {
  res.redirect("/listings");
});
// const store = MongoStore.create({
//    mongoUrl: dbUrl,
//    crypto:{
//       secret:process.env.SCERET,
//    },
//    touchAfter: 24*3600,
// });

// store.on("error",(err)=>{
//   console.log("session store error",err);
// });

const sessionOptions = {
  // store,
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true,
  cookie: { 
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true
  }
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use( new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);
app.use("/user",userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
