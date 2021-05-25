const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const TaskRoutes = require("./routes/task.routes");

//settings
app.set("port", process.env.PORT | 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//Routes | Rutas
app.get("/", function (req, res) {
  res.send("SERVIDOR");
});

app.use("/api/task", TaskRoutes);

module.exports = app;
