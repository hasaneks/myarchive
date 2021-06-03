import mongoose from 'mongoose'

const BookScheme = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true
    },
    bannerUrl: {
      type: String,
      required: true
    },
    numberOfPages: {
      type: Number
    },
    date: {
      type: Date,
      required: true
    },
    category: {
      type: Array
    },
    description: {
      type: String
    },
    rating: {
      type: Number
    },
    author: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = BookScheme
