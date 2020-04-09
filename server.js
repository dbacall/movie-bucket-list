const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const movies = require("./routes/api/movies");
const path = require("path");

const db = require("./config/keys").mongoURI;

const app = express();

var cors = require("cors");

// use it before all route definitions
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(err);
  });

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/users", users);

app.use("/movies", movies);

// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
