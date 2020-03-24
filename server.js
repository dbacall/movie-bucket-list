const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

const app = express();

var cors = require("cors");

// use it before all route definitions
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(err);
  });

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

app.listen(port, () => console.log(`Server up and running on port ${port}`));
