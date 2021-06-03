import mongoose from 'mongoose'

const MovieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  bannerUrl: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  rating: {
    type: Number
  }
})

module.exports = MovieSchema
