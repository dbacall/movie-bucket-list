const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  vote_average: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model("movies", MovieSchema);
