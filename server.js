const express = require("express");
const admin = require("firebase-admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//DB URL
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("        <=== Database connected ! ====>");
  console.log(`<=== Running on URL: https://localhost:${PORT} ====>`);
});

const options = {
  key: fs.readFileSync("cerificates/key.pem"),
  cert: fs.readFileSync("cerificates/cert.pem"),
};

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`<=== Server is up and running on port ${PORT} ====>`);
});

// Student Routes
const StudentRouter = require("./routes/StudentRoute");
app.use("/student", StudentRouter);

// Lecture Routes
const LectureRoute = require("./routes/lectureRoute");
app.use("/lecture", LectureRoute);

// Module Routes
const ModuleRoute = require("./routes/moduleRoute");
app.use("/module", ModuleRoute);

// Mark Routes
const MarkRoute = require("./routes/markRoute");
app.use("/mark", MarkRoute);

// Quize Routes
const QuizeRoute = require("./routes/quizeRoute");
app.use("/quize", QuizeRoute);
