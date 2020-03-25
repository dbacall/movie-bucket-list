const express = require("express");
const router = express.Router();
const Movie = require("../../models/Movie");

router.post("/", (req, res) => {
  Movie.findOne({ title: req.body.title, userId: req.body.userId }).then(
    movie => {
      if (movie) {
        return res
          .status(400)
          .json({ movie: "Movie already selected by user" });
      } else {
        let movie = new Movie(req.body);
        movie
          .save()
          .then(movie => {
            res.status(200).json({ movie: "Movie added successfully" });
          })
          .catch(err => {
            res.status(400).send("Adding new movie failed");
          });
      }
    }
  );
});

router.get("/:id", (req, res) => {
  Movie.find({ userId: req.params.id }).then(movies => {
    res.json(movies);
  });
});

router.delete("/:id", (req, res) => {
  console.log("here", req.params.id);
  Movie.deleteOne(
    {
      _id: req.params.id
    },
    function(err, movie) {
      if (err) return res.send(err);
      res.json({ message: "Deleted" });
    }
  );
});

module.exports = router;
