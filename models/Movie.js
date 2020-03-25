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
  posterPath: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  voteAverage: {
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
