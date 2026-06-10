if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./module/user.js");
const listings = require("./routes/listings.js");
const reviews = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const ExpressError = require("./utils/ExpressError.js");

const dbUrl = process.env.ATLASDB_URL || process.env.MONGODB_URI || process.env.DATABASE_URL;
const fallbackLocalDb = "mongodb://127.0.0.1:27017/project";

if (process.env.NODE_ENV === "production" && !dbUrl) {
  console.error(
    "Missing production MongoDB URI. Set ATLASDB_URL, MONGODB_URI, or DATABASE_URL in Render environment variables."
  );
  process.exit(1);
}

const mongooseUrl = dbUrl || fallbackLocalDb;

mongoose
  .connect(mongooseUrl)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const sessionSecret = process.env.SECRET || "mysupersecret";

let store;
try {
  store = MongoStore.create({
    mongoUrl: mongooseUrl,
    touchAfter: 24 * 3600,
    collectionName: "sessions",
  });

  store.on("error", (err) => {
    console.error("Session store error:", err);
  });
} catch (e) {
  console.error("Failed to initialize MongoStore:", e);
}

const sessionOptions = {
  secret: sessionSecret,
  store,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  const originalRender = res.render.bind(res);
  res.render = function (view, options, callback) {
    if (res.headersSent) {
      console.warn("Attempted to render after headers already sent:", view);
      return res;
    }
    return originalRender(view, options, callback);
  };

  next();
});

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/user", userRouter);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;

  if (res.headersSent) {
    console.error("Headers already sent, cannot render error template:", err);
    return res.end();
  }

  try {
    res.status(statusCode).render("error.ejs", { message });
  } catch (renderErr) {
    console.error("Error rendering error template:", renderErr);
    res.status(statusCode).send(`Error: ${message}`);
  }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});