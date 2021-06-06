import mongoose from 'mongoose'


import UserSchema from '../../data/models/User'
import BookSchema from '../../data/models/Book'
import MovieSchema from '../../data/models/Movie'
const connectToMongo = async () => {
  const connection = await mongoose.createConnection(
    'mongodb+srv://hasanEksi:sZKvjUPaKQ51JlmF@myarchive.ar83y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
  )
  const User = connection.model('User', UserSchema)
  const Book = connection.model('Book', BookSchema)
  const Movie = connection.model('Movie', MovieSchema)
  return {
    connection,
    models: {
      User,
      Book,
      Movie
    }
  }
}

export default connectToMongo
