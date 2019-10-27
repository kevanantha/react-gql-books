const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    genre: {
      type: String,
      required: [true, 'Genre is required']
    },
    authorId: {
      type: String,
      required: [true, 'authorId is required']
    }
  },
  { versionKey: false, timestamps: true }
)

const Book = model('Book', bookSchema)

module.exports = Book
