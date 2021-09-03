const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const helmet = require("helmet");
const app = express();
const cors = require("cors");

// connect mongodb
connectDB();

// init middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(helmet());
app.use(cors());

// define routes
app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/journal", require("./routes/api/journal"));

// access token expiration
app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    const accessToken = req.headers["x-access-token"];
    const { userId, exp } = await jwt.verify(
      accessToken,
      process.env.JWT_SECRET
    );
    // Check if token has expired
    if (exp < Date.now().valueOf() / 1000) {
      return res.status(401).json({
        error: "JWT token has expired, please login to obtain a new one",
      });
    }
    res.locals.loggedInUser = await User.findById(userId);
    next();
  } else {
    next();
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
