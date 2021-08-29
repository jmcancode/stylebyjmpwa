const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const helmet = require("helmet");
const app = express();

// connect mongodb
connectDB();

// init middleware
app.use(express.json());
app.use(helmet());
// define routes
app.use("/api/users", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));

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
