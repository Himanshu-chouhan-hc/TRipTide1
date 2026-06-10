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

// ------------------- DB CONNECTION -------------------

const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ATLASDB_URL
    : "mongodb://127.0.0.1:27017/project";

async function main() {
  await mongoose.connect(dbUrl);
  console.log("Connected to DB");
}

main().catch((err) => {
  console.log(err);
});

// ------------------- EXPRESS SETUP -------------------

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ------------------- SESSION STORE -------------------

let store;
// Only initialize Mongo-backed session store in production with a provided DB URL.
if (process.env.NODE_ENV === 'production' && process.env.ATLASDB_URL) {
  try {
    store = MongoStore.create({
      mongoUrl: dbUrl,
      crypto: {
        secret: process.env.SECRET || "mysupersecret",
      },
      touchAfter: 24 * 3600,
    });

    store.on("error", (err) => {
      console.error("Session Store Error:", err);
    });
  } catch (e) {
    console.error("Failed to initialize Mongo session store, falling back to default store:", e);
    store = undefined;
  }
} else {
  console.warn('Skipping Mongo session store initialization in non-production environment');
}

const sessionOptions = {
  secret: process.env.SECRET || "mysupersecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

if (store) sessionOptions.store = store;

app.use(session(sessionOptions));
app.use(flash());

// ------------------- PASSPORT -------------------

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ------------------- GLOBAL VARIABLES -------------------

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ------------------- ROUTES -------------------

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/user", userRouter);

// ------------------- ERROR HANDLER -------------------

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;

  res.status(statusCode).render("error.ejs", {
    message,
  });
});

// ------------------- SERVER -------------------

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});