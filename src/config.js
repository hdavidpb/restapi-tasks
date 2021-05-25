const config = require("dotenv");
config.config();

module.exports = {
  mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/taskdb",
};
