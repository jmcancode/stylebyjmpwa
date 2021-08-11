const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("process.env.REACT_APP_STRIPE_PUBLIC_KEY");
const app = express();
const path = require("path");
const passport = require("passport");
const fs = require("fs");
const port = 5000;

const { success, error } = require("consola");
const compression = require("compression");
const https = require("https");
const helmet = require("helmet");
const { connect } = require("mongodb");
const { MongoClient } = require("mongodb");
const { MONGO_URL } = require("./src/config/index");
const client = new MongoClient(MONGO_URL);
const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!");
});

mongoose.connection.on("error", () => {
  console.error(err);
});

//MIDDLEWEAR
app.use("/client/public/**", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/users", require("./src/routes/users"));
app.use(passport.initialize());
require("./src/middleware/passport");

if (process.env.REACT_APP_NODE_ENV === "production") {
  app.use(compression);

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/", cors(), async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

const startApp = async () => {
  try {
    // Connection With DB
    await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    success({
      message: `Successfully connected with the Database \n${MONGO_URL}`,
      badge: true,
    });

    // Start Listenting for the server on PORT
    app.listen(port, () =>
      success({ message: `Server started on PORT ${port}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
