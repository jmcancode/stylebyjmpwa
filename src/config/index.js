require("dotenv").config();

module.exports = {
  MONGO_URL: process.env.REACT_APP_MONGO_URL,
  SECRET: process.env.REACT_APP_SECRET,
};
